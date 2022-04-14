import { Link, Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { BigSidebar, Navbar, SmallSidebar } from "../../components";
import { useAppContext } from "../../context/appContext";

function SharedLayout() {
  const { user } = useAppContext();
  return (
    <>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div className="dashboard-page">
            <Navbar />
            <Outlet />
          </div>
        </main>
      </Wrapper>
    </>
  );
}
export default SharedLayout;
