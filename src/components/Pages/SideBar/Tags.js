import { NavLink } from "react-router-dom";
import data from "../../jsonFiles/data.json";
import data1 from "../../jsonFiles/tags.json";
import "./Tags.css";
import { useTagsapiQuery } from "../../redux/loginapi/tagsSlice";
export default function Tags() {
  const responseinfo = useTagsapiQuery();
  console.log(responseinfo);
  console.log(responseinfo.data.info);
  const newData = responseinfo?.data?.info;
  const tagsData2 = newData.map((x) => {
    console.log(x);
  });
  // const tagsData2 = Object.value(newData).map((x) => {
  //   return x.map(
  //     (x) => {
  //       console.log(x);
  //     }
  //     //   <div className="card h-50 m-right-10 p-inside justify-content-around rounded shadow">
  //     //     <NavLink to="/" className="navtags width-fit p-right-10 rounded">
  //     //       {x.tagName}
  //     //     </NavLink>
  //     //     <div className="d-flex flex-column">
  //     //       <div className="p-top text-ellipsis">{x.tagDescription}</div>
  //     //     </div>
  //     //     <div className="d-flex justify-content-between">
  //     //       <span>Question Asked by</span>
  //     //       <span>Asked today</span>
  //     //     </div>
  //     //   </div>
  //   );
  // });
  return (
    <div>
      <div className="d-flex flex-column">
        <div className="fs-3 p-top-20 flex-row">Tags</div>
        <div className="p-top-20 w-50">{data.TagDefination}</div>
      </div>
      <div>
        <div className="d-flex p-top-20 p-bottom-20 justify-content-between ">
          <input
            type="text"
            placeholder="Filter by tag name"
            className="p-left-10"
          />
          <div>
            <button className="btn border">Popular</button>
            <button className="btn border">Name</button>
            <button className="btn border">New</button>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-evenly">
          {tagsData2}
        </div>
      </div>
    </div>
  );
}
