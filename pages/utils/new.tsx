import {
  CLEAR_CREATE_UTIL,
  CLEAR_GET_ALL_CATEGORIES_UTILS,
  RESET_CREATE_UTIL,
} from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { createUtil } from "@/redux/actions";
import { getAllCagoriesUtils } from "@/redux/actions/categories-utils.action";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Editor, InputAdmin, Loading } from "../../components";
import LayoutAdmin from "../../layouts";

const NewUtils: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { error, success } = useAppSelector((state) => state.createUtilReducer);
  const {
    loading,
    error: errorFetchAllCategories,
    categoriesUtils,
  } = useAppSelector((state) => state.getAllCategoriesUtilsReducer);

  const [name, setName] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [errorMes, setErrorMes] = useState<string>("");
  const [images, setImages] = useState<ArrayBuffer | string>("");
  const [imagesPreview, setImagePreview] = useState<ArrayBuffer | string>("");

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
    formData.set("categoriesId", categoryId);

    // @ts-ignore
    dispatch(createUtil(formData));
    toast.remove(id);
  };

  useEffect(() => {
    if (error) {
      setErrorMes(error);
      toast.error(error);
      dispatch({ type: CLEAR_CREATE_UTIL });
    }
    if (errorFetchAllCategories) {
      toast.error(errorFetchAllCategories);
      dispatch({ type: CLEAR_GET_ALL_CATEGORIES_UTILS });
      router.push("/");
    }
  }, [error, errorFetchAllCategories]);
  useEffect(() => {
    if (success) {
      toast.success("success Create room Type");
      dispatch({
        type: RESET_CREATE_UTIL,
        payload: undefined,
      });
      router.push("/utils");
    }
  }, [success]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getAllCagoriesUtils());
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LayoutAdmin>
          <Head>
            <title>Create Utils</title>
          </Head>
          <h5 className="text-2xl font-extrabold text-gray-700">
            Create Utils Page
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
                <Editor
                  contentText={description}
                  setContentText={setDescription}
                />
              </div>
              <InputAdmin
                name="price"
                value={level}
                label="Price"
                type="number"
                onChange={(e) => setLevel(e.target.value)}
              />
              <InputAdmin
                name="categoryId"
                as="select"
                value={categoryId}
                dataSelect={
                  categoriesUtils
                    ? categoriesUtils.map((item: any) => ({
                        _id: item._id,
                        name: item.title,
                      }))
                    : []
                }
                onChange={(e) => setCategoryId(e.target.value)}
                label="CategoryId"
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
                disabled={
                  !name || !description || !images || !categoryId || !level
                }
                className="disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-white text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

export default NewUtils;
