import { Loading } from "@/components";
import { CLEAR_GET_ALL_ROOM_TYPE } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import { getRoomTypes } from "@/redux/actions";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const RoomTypePage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { loading, room_types, error } = useAppSelector(
    (state) => state.getRoomTypesReducer
  );

  useEffect(() => {
    if (error) {
      toast.error("Có lỗi đã xảy ra!!");
      dispatch({ type: CLEAR_GET_ALL_ROOM_TYPE });
      router.push("/");
    }
  }, [error]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getRoomTypes());
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LayoutAdmin>
          <div className="my-5 mx-5">
            <h1 className="text-3xl font-extrabold text-gray-700 mb-4">
              Manage room - types page
            </h1>
            <h3 className="pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 ">
              Admin Page
            </h3>
            <p className="text-base text-gray-400 mb-2 mt-2">
              web - thành - kiên - trường
            </p>
            <p>{JSON.stringify(room_types)}</p>
          </div>
        </LayoutAdmin>
      )}
    </>
  );
};

export default RoomTypePage;
