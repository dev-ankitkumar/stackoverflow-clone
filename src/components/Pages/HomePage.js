import { NavLink } from "react-router-dom";
import data from "../jsonFiles/question.json";
import tagdata from "../jsonFiles/tags.json";
import "./form.css";
export default function HomePage() {
  // const data1 = Object();
  // .fromEntries
  const data1 = Object.entries(data).map((x) => {
    return x[1].map((x, index) => (
      <>
        <div className="d-flex p-bottom-10 p-top-10  border-bottom" key={index}>
          <div className="d-flex flex-column w-30 justify-content-evenly">
            <div className=" f-size-12 text">{x.votes} Votes</div>
            <div className=" f-size-12 text">24 Answers</div>
            <div className=" f-size-12 text">{x.View} Views</div>
          </div>
          <div>
            <NavLink to="/" className="fs-4 text question-color">
              {x.question}
            </NavLink>
            <div className="fs-6">{x.Description}</div>
            <div className="d-flex p-top-10">
              {x.tags.map((x, index) => {
                return (
                  <div className="p-all btn border m-right-5" key={index}>
                    {x}
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-around p-top-10">
              <div>username: {x.userName}</div>
              <div>time: {x.time}</div>
            </div>
          </div>
        </div>
      </>
    ));
  });
  return (
    <div className="d-flex">
      <div>
        <div className="d-flex justify-content-between p-bottom-20">
          <div className="fs-2">All Questions</div>
          <NavLink to="askquestion">
            <button className="btn border btn-primary">Ask Question </button>
          </NavLink>
        </div>
        <div className="d-flex justify-content-between p-bottom-20 ">
          <div className="fs-4 ">Total Questions</div>
          <button className="btn border">Filters </button>
        </div>
        <div>{data1}</div>
      </div>
      <div className="w-75 p-left-20">
        <div>Realted tags</div>
        <div className="p-bottom-20 ">
          {Object.entries(tagdata).map((x) => {
            return x[1].map((x) => (
              <div className="p-bottom-20">{x.tagName}</div>
            ));
          })}
        </div>
      </div>
    </div>
  );
}
