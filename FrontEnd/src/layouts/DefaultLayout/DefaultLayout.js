import { Outlet, Navigate } from "react-router-dom";

import { Footer, HomeHeader } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
function DefaultLayout() {
  const { userToken } = useStateContext();
  // if (!userToken) {
  //   return <Navigate to="login" />;
  // }
  return (
    <>
      <HomeHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
