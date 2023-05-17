import { Loading, Transition } from "@/components";
import DismissableToast from "@/components/DissmissableToast";
import { loadUser } from "@/redux/actions";
import store from "@/redux/store";
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import nprogess from "nprogress";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";
import "../styles/app.scss";
import "react-quill/dist/quill.snow.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [hasWindow, setHasWindow] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    // @ts-ignore
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    nprogess.start();
    nprogess.done();
  }, [router.pathname]);

  if (!hasWindow) {
    return <Loading />;
  } else {
    return (
      <Transition location={router.pathname}>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          <Provider store={store}>
            <DismissableToast />
            {getLayout(<Component {...pageProps} key={router.asPath} />)}
          </Provider>
        </AnimatePresence>
      </Transition>
    );
  }
}

export default MyApp;
