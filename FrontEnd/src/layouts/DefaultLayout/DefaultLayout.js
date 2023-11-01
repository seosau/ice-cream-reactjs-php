import { Outlet } from "react-router-dom";
import { Footer, HomeHeader } from "../../components";

function DefaultLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
