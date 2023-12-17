import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { CookiesProvider } from "react-cookie";
import { ToastContainer } from "react-toastify";

import { api } from "~/_utils/api";

import "react-toastify/dist/ReactToastify.css";
import "~/styles/globals.css";

const Application: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <Component {...pageProps} />
        <ToastContainer newestOnTop pauseOnFocusLoss />
      </CookiesProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(Application);
