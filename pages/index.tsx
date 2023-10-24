import { NextPage } from "next";
import { useRouter } from "next/router";
import FormOrder from "../components/FormOrder";

const Index: NextPage = () => {
  const router = useRouter();
  // console.log(router);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormOrder />
    </main>
  );
};

export default Index;
