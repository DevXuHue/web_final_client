import { Loading } from "@/components";
import { CLEAR_GET_POSTS_ERROR } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import { parseTime } from "@/libs/helper";
import { getPosts } from "@/redux/actions";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";

const Posts = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { loading, error, posts } = useAppSelector(
    (state) => state.PostReducer
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_GET_POSTS_ERROR });
      router.push("/");
    }
  }, [error]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getPosts());
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LayoutAdmin>
          <div className="my-5 mx-5">
            <h1 className="text-3xl font-extrabold text-gray-700 mb-4">
              Manage posts page
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
                            Img
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-2 py-1 text-left"
                          >
                            Title
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
                            shortDescription
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
                        {posts?.length > 0 ? (
                          posts.map((item: any, index: number) => (
                            <tr key={item._id} className="border-b rounded-md">
                              <td className="px-2 py-1 whitespace-nowrap text-md font-medium text-gray-900">
                                {index + 1}
                              </td>
                              <td className="text-md text-gray-900 font-semibold whitespace-nowrap">
                                <img
                                  className="h-20 w-20 rounded-full"
                                  src={item.thumbnail.url}
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
                                {item?.shortDescription}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                {parseTime(item?.createdAt, "")}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                <button
                                  type="button"
                                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                >
                                  Public
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
          </div>
        </LayoutAdmin>
      )}
    </>
  );
};
export default Posts;
