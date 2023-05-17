import {
  CLEAR_CREATE_REPORT_TYPE_ERROR,
  RESET_CREATE_REPORT_TYPE,
} from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { createReportTypes } from "@/redux/actions";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { InputAdmin } from "../../components";
import LayoutAdmin from "../../layouts";

const CreateReportTypes: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { error, success } = useAppSelector(
    (state) => state.createReportTypesReducer
  );

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const handleFormSubmitNewRoomTypes = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = toast.loading("submit...");
    const formData = new FormData();
    formData.set("title", name);
    formData.set("description", description);
    formData.set("level", level);

    // @ts-ignore
    dispatch(createReportTypes(formData));
    toast.remove(id);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_CREATE_REPORT_TYPE_ERROR });
      router.push("/");
    }
  }, [error]);
  useEffect(() => {
    if (success) {
      toast.success("success Create room Type");
      dispatch({
        type: RESET_CREATE_REPORT_TYPE,
        payload: undefined,
      });
      router.push("/types-report");
    }
  }, [success]);

  return (
    <LayoutAdmin>
      <Head>
        <title>Create Report Type</title>
      </Head>
      <h5 className="text-2xl font-extrabold text-gray-700">
        Create Report Type page
      </h5>
      <form onSubmit={handleFormSubmitNewRoomTypes}>
        <div className="grid gap-3 mb-6">
          <InputAdmin
            name="title"
            label="Name Report Type"
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
            name="description"
            value={level}
            as="select"
            dataSelect={[
              {
                name: 1,
                _id: 1,
              },
              {
                name: 2,
                _id: 2,
              },
              {
                name: 3,
                _id: 3,
              },
              {
                name: 4,
                _id: 4,
              },
              {
                name: 5,
                _id: 5,
              },
            ]}
            label="level"
            onChange={(e) => setLevel(e.target.value)}
          />
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

export default CreateReportTypes;
