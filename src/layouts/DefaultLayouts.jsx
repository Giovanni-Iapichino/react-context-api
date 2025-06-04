import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function DefaultLayouts() {
  return (
    <>
      <div className="container text-center">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
