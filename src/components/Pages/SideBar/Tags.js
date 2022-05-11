import { NavLink } from "react-router-dom";
import data from "../../jsonFiles/data.json";
import "./Tags.css";
export default function Tags() {
  let tagsData = [
    "Java",
    "JavaScript",
    "Array",
    "React-js",
    "React-Native",
    "C-Language",
    "C++",
  ];
  const tagsData1 = tagsData.map((x) => (
    <div className="card h-50 m-right-10 p-inside">
      <NavLink to="/" className="navtags">
        {x}
      </NavLink>
      <div className="d-flex flex-column">
        <div className="p-top">Discription</div>
        <div className="d-flex justify-content-between">
          <span>Question Asked by</span>
          <span>Asked today</span>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="d-flex">
        <div className="fs-3 p-top-20 flex-row">Tags</div>
        <div className="p-top-20 w-50">{data.TagDefination}</div>
      </div>
      <div>
        <div className="d-flex p-top-20 justify-content-between ">
          <input type="text" placeholder="Filter by tag name" />
          <div>
            <button>Popular</button>
            <button>Name</button>
            <button>New</button>
          </div>
        </div>
        <div className="d-flex flex-wrap ">{tagsData1}</div>
      </div>
    </div>
  );
}
