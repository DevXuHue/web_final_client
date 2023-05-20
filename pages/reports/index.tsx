import axiosAdminClient from "@/apis";
import { Loading } from "@/components";
import { CLEAR_GET_ALL_REPORT_ERROR } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import { parseTime } from "@/libs/helper";
import { getAllReports } from "@/redux/actions";
import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ReportManagePage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { loading, reports, error } = useAppSelector(
    (state) => state.getReportReducer
  );

  const handleCheck = async (id: string) => {
    try {
      const { data } = await axiosAdminClient.post("/report/check", { id });
      if (data?.metadata) {
        toast.success("success");
        // @ts-ignore
        dispatch(getAllReports());
      } else {
        toast.error("update error");
      }
    } catch (error) {
      toast.error("update error");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error("Có lỗi đã xảy ra!!");
      dispatch({ type: CLEAR_GET_ALL_REPORT_ERROR });
      router.push("/");
    }
  }, [error]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getAllReports());
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LayoutAdmin>
          <div className="my-5 mx-5">
            <h1 className="text-3xl font-extrabold text-gray-700 mb-4">
              Manage reports page
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
                            Level
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-2 py-1 text-left"
                          >
                            roomId
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-2 py-1 text-left"
                          >
                            emailConnect
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
                            isCheck
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
                        {reports?.length > 0 ? (
                          reports.map((item: any, index: number) => (
                            <tr key={item._id} className="border-b rounded-md">
                              <td className="px-2 py-1 whitespace-nowrap text-md font-medium text-gray-900">
                                {index + 1}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap max-w-[100px] truncate">
                                {item?.title}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap max-w-[100px] truncate">
                                {item?.description}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                {item?.level}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                {item?.roomId}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                {item?.emailConnect}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                {item?.phoneConnect}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                {item?.isCheck ? "True" : "false"}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                {item?.type}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                {parseTime(item?.createdAt, "")}
                              </td>
                              <td className="text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap">
                                <button
                                  disabled={item?.isCheck}
                                  onClick={() => handleCheck(item?._id)}
                                  type="button"
                                  className="text-white disabled:opacity-50 disabled:cursor-not-allowed bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                >
                                  Check
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

export default ReportManagePage;
