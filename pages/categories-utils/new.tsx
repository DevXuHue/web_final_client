import {
  CLEAR_CREATE_CATEGORIES_UTIL,
  RESET_CREATE_CATEGORIES_UTIL,
} from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { createCategoriesUtil } from "@/redux/actions/categories-utils.action";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { InputAdmin } from "@/components";
import LayoutAdmin from "@/layouts";

const CreateNewCategoriesUtils: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { error, success } = useAppSelector(
    (state) => state.createCategoriesUtilReducer
  );

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [images, setImages] = useState<ArrayBuffer | string>("");
  const [imagesPreview, setImagePreview] = useState<ArrayBuffer | string>("");

  const handleFormSubmitNewProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = toast.loading("submit...");
    const formData = new FormData();
    formData.set("title", name);
    formData.set("description", description);
    formData.set("thumbnail", images as string);

    // @ts-ignore
    dispatch(createCategoriesUtil(formData));
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
      dispatch({ type: CLEAR_CREATE_CATEGORIES_UTIL });
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      toast.success("success create categories utils...");
      dispatch({
        type: RESET_CREATE_CATEGORIES_UTIL,
        payload: undefined,
      });
      router.push("/categories-utils");
    }
  }, [success]);

  return (
    <LayoutAdmin>
      <Head>
        <title>Create Category Utils</title>
      </Head>
      <h5 className="text-2xl font-extrabold text-gray-700">
        Create Category Utils page
      </h5>
      <form onSubmit={handleFormSubmitNewProduct}>
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
            disabled={!images || !name || !description}
            className="disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-white text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </LayoutAdmin>
  );
};

export default CreateNewCategoriesUtils;
