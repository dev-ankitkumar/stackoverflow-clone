import Header from "./Header";
import SideBar from "./SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div >
        <SideBar />
      </div>
    </div>
  );
}
