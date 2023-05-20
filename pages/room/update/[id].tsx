import { Editor, InputAdmin, Loading } from "@/components";
import {
  CLEAR_CREATE_ROOM,
  CLEAR_GET_ROOM_BY_ID,
  RESET_UPDATE_ROOM,
  UPDATE_ROOM_ERROR,
} from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import { getOneRoom, getRoomTypes, updateRoom } from "@/redux/actions";
import { Radio } from "antd";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CreateRoomTypes: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { error, success } = useAppSelector((state) => state.updateRoomUpdate);

  const { room_types, loading } = useAppSelector(
    (state) => state.getRoomTypesReducer
  );

  const { error: errorGetRoom, room } = useAppSelector(
    (state) => state.getOneRoomReducer
  );

  const [name, setName] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [acreage, setAcreage] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneConnect, setPhoneConnect] = useState<string>("");
  const [utilities, setUtilities] = useState<boolean>(true);
  const [type, setType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [shortDescription, setShortDescription] = useState<string>("");
  const [images, setImages] = useState<ArrayBuffer | string>("");
  const [imagesPreview, setImagePreview] = useState<ArrayBuffer | string>("");

  const handleFormSubmitNewRoomTypes = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idLoading = toast.loading("submit...");
    const formData = new FormData();
    formData.set("title", name);
    formData.set("description", description);
    formData.set("short_description", shortDescription);
    formData.set("acreage", acreage);
    formData.set("address", address);
    formData.set("body", body);
    formData.set("type", type);

    formData.set("phoneConnect", phoneConnect);
    formData.set("utilities", utilities ? "true" : "false");
    formData.set("images", images as string);

    console.log(formData);

    // @ts-ignore
    dispatch(updateRoom(formData, id));
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
      dispatch({ type: UPDATE_ROOM_ERROR });
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      toast.success("success Create room Type");
      dispatch({
        type: RESET_UPDATE_ROOM,
        payload: undefined,
      });
      router.push("/room");
    }
  }, [success]);

  useEffect(() => {
    if (errorGetRoom) {
      toast.error("get room error");
      dispatch({
        type: CLEAR_GET_ROOM_BY_ID,
      });
      router.push("/room");
    }
  }, [errorGetRoom]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getRoomTypes());
    // @ts-ignore
    if (id) dispatch(getOneRoom(id));
  }, [id]);

  console.log(utilities);

  useEffect(() => {
    if (room) {
      setName(room?.title);
      setDescription(room?.description);
      setShortDescription(room?.short_description);
      setType(room?.type);
      setAcreage(room?.info?.acreage);
      setAddress(room?.info?.address);
      setPhoneConnect(room?.info?.phoneConnect);
      setUtilities(room?.info?.utilities);
      setImagePreview(room?.image?.url);
      setBody(room?.body);
    }
  }, [room]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LayoutAdmin>
          <Head>
            <title>Create room Type</title>
          </Head>
          <h5 className="text-2xl font-extrabold text-gray-700">
            Create room Type Post page
          </h5>
          <form onSubmit={handleFormSubmitNewRoomTypes}>
            <div className="grid gap-3 mb-6">
              <InputAdmin
                name="title"
                label="Name room"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputAdmin
                name="description"
                value={description}
                as="textarea"
                label="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <InputAdmin
                name="shortDescription"
                value={shortDescription}
                as="textarea"
                label="shortDescription"
                onChange={(e) => setShortDescription(e.target.value)}
              />
              <InputAdmin
                name="acreage"
                value={acreage}
                label="acreage"
                onChange={(e) => setAcreage(e.target.value)}
              />
              <InputAdmin
                name="address"
                value={address}
                label="address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <InputAdmin
                name="phoneConnect"
                value={phoneConnect}
                label="phoneConnect"
                onChange={(e) => setPhoneConnect(e.target.value)}
              />
              <InputAdmin
                name="type"
                as="select"
                dataSelect={
                  room_types &&
                  room_types.map((item: any) => ({
                    _id: item._id,
                    name: item.title,
                  }))
                }
                value={type}
                label="type"
                onChange={(e) => setType(e.target.value)}
              />
              <div>
                <Editor contentText={body} setContentText={setBody} />
              </div>

              <label>utilities</label>
              <Radio
                checked={utilities}
                value={utilities}
                onChange={(e) => setUtilities(e.target.checked)}
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

export default CreateRoomTypes;
