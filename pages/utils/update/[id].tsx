import { Editor, InputAdmin } from "@/components";
import {
  CLEAR_GET_UTIL,
  CLEAR_UPDATE_UTIL,
  RESET_UPDATE_UTIL,
} from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import { getUtil, updateUtil } from "@/redux/actions";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateUtils: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { error, success } = useAppSelector((state) => state.updateUtilReducer);
  const { error: userGetUtilError, util } = useAppSelector(
    (state) => state.getUtilReducer
  );
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [errorMes, setErrorMes] = useState<string>("");
  const [images, setImages] = useState<ArrayBuffer | string>("");
  const [imagesPreview, setImagePreview] = useState<ArrayBuffer | string>("");

  const { id: idUtil } = router.query;

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

  const handleFormSubmitNewRoomTypes = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = toast.loading("submit...");
    const formData = new FormData();
    formData.set("title", name);
    formData.set("body", description);
    formData.set("price", level);
    formData.set("image", images as string);

    // @ts-ignore
    dispatch(updateUtil(formData, idUtil));
    toast.remove(id);
  };

  useEffect(() => {
    if (error) {
      setErrorMes(error);
      toast.error(error);
      dispatch({ type: CLEAR_UPDATE_UTIL });
    }
  }, [error]);
  useEffect(() => {
    if (success) {
      toast.success("success Create room Type");
      dispatch({
        type: RESET_UPDATE_UTIL,
        payload: undefined,
      });
      router.push("/utils");
    }
  }, [success]);

  useEffect(() => {
    if (userGetUtilError) {
      toast.error(userGetUtilError);
      dispatch({ type: CLEAR_GET_UTIL });
      router.push("/utils");
    }
  }, [userGetUtilError]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getUtil(idUtil as string));
  }, []);

  useEffect(() => {
    if (util) {
      setName(util?.title);
      setDescription(util?.body);
      setLevel(util?.price);
    }
  }, [util]);

  return (
    <LayoutAdmin>
      <Head>
        <title>Create Utils</title>
      </Head>
      <h5 className="text-2xl font-extrabold text-gray-700">
        Create Utils page
      </h5>
      <form onSubmit={handleFormSubmitNewRoomTypes}>
        <div className="grid gap-3 mb-6">
          <InputAdmin
            name="title"
            label="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">body - description</label>
          <div>
            <Editor contentText={description} setContentText={setDescription} />
          </div>
          <InputAdmin
            name="price"
            value={level}
            label="Price"
            type="number"
            onChange={(e) => setLevel(e.target.value)}
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
          <p>{errorMes}</p>
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

export default UpdateUtils;
