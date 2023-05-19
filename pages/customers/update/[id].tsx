import { InputAdmin, Loading } from "@/components";
import {
  CLEAR_GET_USER_BY_ID,
  CLEAR_REGISTER_USER_FAILURE,
  CLEAR_UPDATE_USER,
  RESET_REGISTER_USER,
  RESET_UPDATE_USER,
} from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import {
  getRooms,
  getUser,
  register as registerFunc,
  updateUser,
} from "@/redux/actions";
import { DatePicker } from "antd";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import dayjs, { Dayjs } from "dayjs";

const register: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { error, success } = useAppSelector((state) => state.updateUserReducer);
  const {
    customer,
    loading,
    error: errorUser,
  } = useAppSelector((state) => state.getUserReducer);
  const { rooms } = useAppSelector((state) => state.getRoomReducer);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [cmnd, setCmnd] = useState<string>("");
  const [from, setForm] = useState<Dayjs | null>(dayjs(new Date(Date.now())));
  const [to, setTo] = useState<Dayjs | null>(dayjs(new Date(Date.now())));
  const [images, setImages] = useState<ArrayBuffer | string>("");
  const [imagesPreview, setImagePreview] = useState<ArrayBuffer | string>("");
  const [room, setRoom] = useState<string>("");

  const handleFormSubmitNewCustomer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idLoading = toast.loading("submit...");
    const formData = new FormData();
    formData.set("username", name);
    formData.set("email", email);
    formData.set("phone", phone);
    formData.set("cmnd", cmnd);
    formData.set("address", address);
    formData.set("to", to?.toJSON() as string);
    formData.set("from", from?.toJSON() as string);
    formData.set("room", room);
    formData.append("avatar", images as string);

    // @ts-ignore
    dispatch(updateUser(formData, id));
    toast.remove(idLoading);
  };

  const handleDataChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    if (!target.files) return;
    const files = Array.from(target.files);

    files.forEach((file) => {
      const render = new FileReader();

      render.onload = () => {
        if (render.readyState === 2) {
          if (render.result) {
            setImagePreview(render.result);
            setImages(render.result);
          }
        }
      };
      render.readAsDataURL(file);
    });
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_UPDATE_USER });
    }
  }, [error]);

  useEffect(() => {
    if (errorUser) {
      toast.error("usre not found");
      dispatch({ type: CLEAR_GET_USER_BY_ID });
      router.push("/");
    }
  }, [errorUser]);

  useEffect(() => {
    if (success) {
      toast.success("success update user");
      dispatch({
        type: RESET_UPDATE_USER,
        payload: undefined,
      });
      router.push("/customers");
    }
  }, [success]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getRooms());
    // @ts-ignore
    dispatch(getUser(id));
  }, [id]);
  useEffect(() => {
    if (customer) {
      setName(customer?.username || "");
      setEmail(customer?.email || "");
      setAddress(customer?.address || "");
      setImagePreview(customer?.avatar?.url || "");
      setCmnd(customer?.cmnd || "");
      setPhone(customer?.phone || "");
      setRoom(customer?.roomId || "");
      if (customer?.roomId) {
        setTo(customer?.rooms?.to);
        setForm(customer?.rooms?.form);
      }
    }
  }, [customer]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LayoutAdmin>
          <Head>
            <title>Register </title>
          </Head>
          <h5 className="text-2xl font-extrabold text-gray-700">
            Register page
          </h5>
          <form onSubmit={handleFormSubmitNewCustomer}>
            <div className="grid gap-3 mb-6">
              <InputAdmin
                name="title"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputAdmin
                name="email"
                value={email}
                type="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputAdmin
                name="phone"
                value={phone}
                type="number"
                label="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
              <InputAdmin
                name="address"
                value={address}
                label="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <InputAdmin
                name="cmnd"
                value={cmnd}
                label="Cmnd"
                onChange={(e) => setCmnd(e.target.value)}
              />
              <label htmlFor="">from</label>
              <DatePicker
                size={"middle"}
                value={from}
                onChange={(e) => setForm(e)}
              />
              <label htmlFor="">to</label>
              <DatePicker
                size={"middle"}
                value={to}
                onChange={(e) => setTo(e)}
              />
              <InputAdmin
                name="roomId"
                label={"Room id"}
                value={room}
                as="select"
                onChange={(e) => setRoom(e.target.value)}
                dataSelect={
                  rooms
                    ? rooms.filter((item: any) => item.isBooked !== true)
                    : []
                }
              />
              <InputAdmin
                name="images"
                type="file"
                value={images as string}
                onChange={handleDataChange}
                label="Images"
              />
              <div className="flex gap-2 items-center justify-center">
                {imagesPreview && (
                  //@ts-ignore
                  <img
                    className="object-cover w-[400px] h-[300px] rounded-md"
                    src={imagesPreview as string}
                    alt="Avatar priview"
                  />
                )}
              </div>
              <p>{error}</p>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </LayoutAdmin>
      )}
    </>
  );
};

export default register;
