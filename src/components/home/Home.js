import Header from "./Header";
import SideBar from "./SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
export default function Home() {
  return (
    <div className="position-fixed z-index-999">
      <Header />
      <SideBar />
    </div>
  );
}
