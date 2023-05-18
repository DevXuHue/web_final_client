import { Loading, StatusCard } from "@/components";
import { CLEAR_GET_DATA_INDEX } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import { getDataIndex } from "@/redux/actions";
import {
  QrcodeIcon,
  UserGroupIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import { ShoppingCartIcon } from "lucide-react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const Home: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector(
    (state) => state.getDataIndexReducer
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_GET_DATA_INDEX });
      router.push("/500");
    }
  }, [error]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getDataIndex());
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LayoutAdmin>
          <div className="my-5 mx-5">
            <h1 className="text-3xl font-extrabold text-gray-700 mb-4">
              Dashboard
            </h1>
            <h3 className="pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 ">
              Admin Page
            </h3>
            <p className="text-base text-gray-400 mb-2 mt-2">
              web - livestream - hutech
            </p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-4 mt-2">
              <div
                className="cursor-pointer"
                onClick={() => router.push("/categories-post")}
              >
                <StatusCard
                  icon={QrcodeIcon}
                  title="categories-post"
                  count={data?.countCategoriesPost || 0}
                />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => router.push("/customers")}
              >
                <StatusCard
                  icon={UserGroupIcon}
                  title="Customers"
                  count={data?.countCustomer ? data?.countCustomer : 0}
                />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => router.push("/posts")}
              >
                <StatusCard
                  icon={ViewListIcon}
                  title="Post"
                  count={data?.countPosts || 0}
                />
              </div>

              <div
                className="cursor-pointer"
                onClick={() => router.push("types-report")}
              >
                <StatusCard
                  icon={ShoppingCartIcon}
                  title="Types report"
                  count={data?.countReportTypes ? data.countReportTypes : 0}
                />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => router.push("/room-types")}
              >
                <StatusCard
                  icon={ShoppingCartIcon}
                  title="Room Types"
                  count={data?.countRoomTypes ? data.countRoomTypes : 0}
                />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => router.push("/dashboard/category")}
              >
                <StatusCard
                  icon={ShoppingCartIcon}
                  title="Rooms"
                  count={data?.countRooms ? data.countRooms : 0}
                />
              </div>
            </div>
          </div>
        </LayoutAdmin>
      )}
    </>
  );
};

export default Home;
