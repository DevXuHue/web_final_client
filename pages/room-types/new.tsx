import {
  CLEAR_CREATE_CATEGORY_POST_FAIL,
  RESET_CREATE_CATEGORY_POST,
} from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { createRoomTypes } from "@/redux/actions";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { InputAdmin } from "../../components";
import LayoutAdmin from "../../layouts";

const CreateRoomTypes: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { error, success } = useAppSelector(
    (state) => state.createCategoryPost
  );

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [shortDescription, setShortDescription] = useState<string>("");
  const [images, setImages] = useState<ArrayBuffer | string>("");
  const [imagesPreview, setImagePreview] = useState<ArrayBuffer | string>("");

  const handleFormSubmitNewRoomTypes = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = toast.loading("submit...");
    const formData = new FormData();
    formData.set("title", name);
    formData.set("description", description);
    formData.set("short_description", shortDescription);
    formData.append("thumbnail", images as string);

    // @ts-ignore
    dispatch(createRoomTypes(formData));
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
      dispatch({ type: CLEAR_CREATE_CATEGORY_POST_FAIL });
      router.push("/");
    }
  }, [error]);
  useEffect(() => {
    if (success) {
      toast.success("success Create room Type");
      dispatch({
        type: RESET_CREATE_CATEGORY_POST,
        payload: undefined,
      });
      router.push("/categories-stream");
    }
  }, [success]);

  return (
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
            label="Name Category"
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
  );
};

export default CreateRoomTypes;
