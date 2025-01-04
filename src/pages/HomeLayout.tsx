import { Header, Loading, Navbar } from "@/components/global";
import { Outlet, useNavigation } from "react-router-dom";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <section>
      <Header />
      <Navbar />
      <main className="align-element py-20">
        {isPageLoading ? <Loading /> : <Outlet />}
      </main>
    </section>
  );
};
export default HomeLayout;
