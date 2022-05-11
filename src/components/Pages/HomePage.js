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
        <div className="d-flex p-bottom-20 " key={index}>
          <div className="w-25">
            <div>{x.votes} Votes</div>
            <div>24 Answers</div>
            <div>{x.View} Views</div>
          </div>
          <div>
            <NavLink to="/" className="fs-4 text question-color">
              {x.question}
            </NavLink>
            <div>{x.Description}</div>
            <div className="d-flex">
              {x.tags.map((x, index) => {
                return (
                  <div className="p-all " key={index}>
                    {x}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    ));
  });
  return (
    <div className="d-flex">
      <div>
        <div className="d-flex justify-content-between p-bottom-20 ">
          <div>All Questions</div>
          <NavLink to="askquestion">
            <button>Ask Question </button>
          </NavLink>
        </div>
        <div className="d-flex justify-content-between p-bottom-20 ">
          <div>Total Questions</div>
          <button>Filters </button>
        </div>
        <div>{data1}</div>
      </div>
      <div className="w-75 p-left-20">
        <div>Realted tags</div>
        <div className="p-bottom-20">
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
