import { type FC } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface AuthenticationProps {
  children: React.ReactNode;
}

const Authentication: FC<AuthenticationProps> = ({ children }) => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    return <div>{children}</div>;
  }

  if (status === "unauthenticated") {
    void router.push("/welcome");
  }

  return <div className="h-screen w-screen bg-slate-100" />;
};

export default Authentication;
