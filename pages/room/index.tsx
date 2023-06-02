import { Loading } from "@/components";
import { CLEAR_GET_ROOM } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import { parseTime } from "@/libs/helper";
import { getRooms } from "@/redux/actions";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";

const Room = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { loading, error, rooms } = useAppSelector(
    (state) => state.getRoomReducer
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_GET_ROOM });
      router.push("/");
    }
  }, [error]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getRooms());
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LayoutAdmin>
          {" "}
          <div className="my-5 mx-5">
            <h1 className="text-3xl font-extrabold text-gray-700 mb-4">
              Manage Room Page
            </h1>
            <h3 className="pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 ">
              Admin Page
            </h3>
            <p className="text-base text-gray-400 mb-2 mt-2">
              web - thành - kiên - trường
            </p>
            <div className="flex flex-col mt-[20px] shadow-md rounded-sm">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-x-auto">
                    <table className="min-w-full ">
                      <thead className="border-b">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-2 py-1 text-left"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-2 py-1 text-left"
                          >
                            Thumbnail
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-2 py-1 text-left"
                          >
                            title
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-2 py-1 text-left"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-2 py-1 text-left"
                          >
                            acreage
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-2 py-1 text-left"
                          >
                            phoneConnect
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-2 py-1 text-left"
                          >
                            type
                          </th>

                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-2 py-1 text-left"
                          >
                            CreatedAt
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-2 py-1 text-left"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {rooms?.length > 0 ? (
                          rooms.map((item: any, index: number) => (
                            <tr key={item._id} className="border-b rounded-md">
                              <td className="px-2 py-1 whitespace-nowrap text-md font-medium text-gray-900">
                                {index + 1}
                              </td>
                              <td className="text-md text-gray-900 font-semibold whitespace-nowrap">
                                <img
                                  className="h-20 w-20 rounded-full"
                                  src={item.image.url}
                                  alt=""
                                />
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap max-w-[100px] truncate">
                                {item?.title}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap max-w-[100px] truncate">
                                {item?.description}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                {item?.info.acreage}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                {item?.info.phoneConnect}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                {item?.type}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                {parseTime(item?.createdAt, "")}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                <button
                                  onClick={() =>
                                    router.push(`/room/update/${item._id}`)
                                  }
                                  type="button"
                                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                >
                                  Update
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <p className="center text-xs my-2 text-red-500">
                            Hiện không có data
                          </p>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => router.push("/room/new")}
              className="mt-5 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
            >
              Create new
            </button>
          </div>
        </LayoutAdmin>
      )}
    </>
  );
};

export default Room;
