"use client";
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 Not found</title>
        <meta name="viewport" content="width=1920, user-scalable=no" />
      </Head>
      <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              href="/"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
