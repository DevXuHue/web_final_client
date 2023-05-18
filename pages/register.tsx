import { InputAdmin } from "@/components";
import { CLEAR_REGISTER_USER_FAILURE, RESET_REGISTER_USER } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import { register as registerFunc } from "@/redux/actions";
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
  const { error, success } = useAppSelector((state) => state.createUserReducer);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [from, setForm] = useState<Dayjs | null>(dayjs(new Date(Date.now())));
  const [to, setTo] = useState<Dayjs | null>(dayjs(new Date(Date.now())));
  const [cmnd, setCmnd] = useState<string>("");
  const [images, setImages] = useState<ArrayBuffer | string>("");
  const [imagesPreview, setImagePreview] = useState<ArrayBuffer | string>("");

  const handleFormSubmitNewCustomer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = toast.loading("submit...");
    const formData = new FormData();
    formData.set("username", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("phone", phone);
    formData.set("cmnd", cmnd);
    formData.set("address", address);
    formData.append("avatar", images as string);
    formData.append("to", to?.toJSON() as string);
    formData.append("from", from?.toJSON() as string);

    // @ts-ignore
    dispatch(registerFunc(formData));
    toast.remove(id);
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
      dispatch({ type: CLEAR_REGISTER_USER_FAILURE });
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      toast.success("success create category post");
      dispatch({
        type: RESET_REGISTER_USER,
        payload: undefined,
      });
      router.push("/customers");
    }
  }, [success]);

  return (
    <LayoutAdmin>
      <Head>
        <title>Register </title>
      </Head>
      <h5 className="text-2xl font-extrabold text-gray-700">Register page</h5>
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
            name="password"
            value={password}
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
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
          <InputAdmin
            name="rooms"
            value={cmnd}
            label="Rooms"
            onChange={(e) => setCmnd(e.target.value)}
          />
          <InputAdmin
            name="images"
            type="file"
            value={images as string}
            onChange={handleDataChange}
            label="Images"
          />
          <DatePicker
            size={"middle"}
            value={from}
            onChange={(e) => setForm(e)}
          />
          <DatePicker size={"middle"} value={to} onChange={(e) => setTo(e)} />
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
  );
};

export default register;
