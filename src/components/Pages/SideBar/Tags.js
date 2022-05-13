import { NavLink } from "react-router-dom";
import data2 from "../../jsonFiles/data.json";
import "./Tags.css";
import { useTagsapiQuery } from "../../redux/loginapi/tagsSlice";
export default function Tags() {
  const { data, error, isLoading, status, isSuccess, isError } =
    useTagsapiQuery();
  console.log(data);
  return (
    <div>
      <div className="d-flex flex-column">
        <div className="fs-3 p-top-20 flex-row">Tags</div>
        <div className="p-top-20 w-50">{data2.TagDefination}</div>
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
          {isSuccess ? (
            data?.info?.map((x, index) => (
              <div
                className="card h-50 m-right-10 p-inside justify-content-around rounded shadow"
                key={index}
              >
                <NavLink
                  to="/"
                  className="navtags width-fit p-right-10 rounded"
                >
                  {x.category}
                </NavLink>
                <div className="d-flex flex-column">
                  {/* <div className="p-top text-ellipsis">{x.tagDescription}</div> */}
                </div>
                <div className="d-flex justify-content-between">
                  <span>Question Asked by</span>
                  <span>Asked today</span>
                </div>
              </div>
            ))
          ) : (
            <div>Fetching ....</div>
          )}
        </div>
      </div>
    </div>
  );
}
