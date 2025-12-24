import { redirect } from "next/navigation";
import { getUserFromCookie } from "@/lib/auth";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const user = getUserFromCookie();

  if (!user) redirect("/signin");

  return <>{children}</>;
};

export default ProtectedLayout;
