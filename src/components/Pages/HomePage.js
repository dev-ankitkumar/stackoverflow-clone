import { NavLink } from "react-router-dom";
import { useState } from "react";
import data from "../jsonFiles/question.json";
import tagdata from "../jsonFiles/tags.json";
import "./form.css";
import { useGetPostsQuery } from "../redux/loginapi/postQuestionSlice";
import { useTagsapiQuery } from "../redux/loginapi/tagsSlice";
import { useSelector } from "react-redux";
export default function HomePage() {
  const [categoryShow, setCategoryShow] = useState("");
  const [categoryFilterID, setCategoryFilterId] = useState("");
  const { data, error, isLoading, status, isSuccess, isError } =
    useGetPostsQuery();
  // console.log(data);
  const categoryData = useTagsapiQuery();
  // const categoryFilter = (x) => {
  //   ;
  //   console.log("clicked");
  // };
  return (
    <div className="d-flex w-100">
      {!categoryShow ? (
        <div className="w-100">
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
          {isSuccess ? (
            data?.map((x) => (
              <div
                className="d-flex p-bottom-10 p-top-10  border-bottom"
                // key={index}
              >
                {/* <div className="d-flex flex-column w-30 justify-content-evenly"> */}
                {/* <div className=" f-size-12 text">{x.votes} Votes</div>
              <div className=" f-size-12 text">24 Answers</div>
              <div className=" f-size-12 text">{x.View} Views</div> */}
                {/* </div> */}
                <div>
                  <div className="d-flex">
                    <div className="fs-4">Title: </div>
                    <NavLink
                      to={`askquestion/post_id:${x.id}`}
                      className="fs-4 text question-color"
                    >
                      {x.title}
                    </NavLink>
                  </div>
                  <div className="fs-6">{x.description}</div>
                  {categoryData.isSuccess ? (
                    categoryData.data?.info
                      ?.filter((y) => y.id == x.cateogry_id)
                      .map((x, index) => (
                        <div key={index}>
                          <NavLink
                            to="/"
                            className="navtags width-fit p-right-10 rounded"
                          >
                            {x.category}
                          </NavLink>
                        </div>
                      ))
                  ) : (
                    <div>Fetching ....</div>
                  )}
                  {/* <div className="fs-6">{x.cateogry_id}</div> */}
                  {/* <div className="d-flex p-top-10">
                {x.tags.map((x, index) => {
                  return (
                    <div className="p-all btn border m-right-5" key={index}>
                      {x}
                    </div>
                  );
                })}
              </div> */}
                  <div className="d-flex justify-content-around p-top-10">
                    {/* <div>username: {x.userName}</div> */}
                    {/* <div>time: {x.time}</div> */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Error</div>
          )}
        </div>
      ) : (
        <div className="w-100">
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
          {isSuccess ? (
            data
              ?.filter((x) => categoryFilterID == x.cateogry_id)
              .map((x) => (
                <div
                  className="d-flex p-bottom-10 p-top-10  border-bottom"
                  // key={index}
                >
                  {/* <div className="d-flex flex-column w-30 justify-content-evenly"> */}
                  {/* <div className=" f-size-12 text">{x.votes} Votes</div>
              <div className=" f-size-12 text">24 Answers</div>
              <div className=" f-size-12 text">{x.View} Views</div> */}
                  {/* </div> */}
                  <div>
                    <div className="d-flex">
                      <div className="fs-4">Title: </div>
                      <NavLink
                        to={`askquestion/post_id:${x.id}`}
                        className="fs-4 text question-color"
                      >
                        {x.title}
                      </NavLink>
                    </div>
                    <div className="fs-6">{x.description}</div>
                    {categoryData.isSuccess ? (
                      categoryData.data?.info
                        ?.filter((y) => y.id == x.cateogry_id)
                        .map((x, index) => (
                          <div key={index}>
                            <NavLink
                              to="/"
                              className="navtags width-fit p-right-10 rounded"
                            >
                              {x.category}
                            </NavLink>
                          </div>
                        ))
                    ) : (
                      <div>Fetching ....</div>
                    )}
                    {/* <div className="fs-6">{x.cateogry_id}</div> */}
                    {/* <div className="d-flex p-top-10">
                {x.tags.map((x, index) => {
                  return (
                    <div className="p-all btn border m-right-5" key={index}>
                      {x}
                    </div>
                  );
                })}
              </div> */}
                    <div className="d-flex justify-content-around p-top-10">
                      {/* <div>username: {x.userName}</div> */}
                      {/* <div>time: {x.time}</div> */}
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div>Error</div>
          )}
        </div>
      )}
      <div className="w-25 p-left-20">
        <div>Realted tags</div>
        <div className="p-bottom-20 ">
          {categoryData.isSuccess ? (
            categoryData.data?.info?.map((x, index) => (
              <div key={index}>
                <button
                  className="navtags width-fit p-right-10 rounded btn p-bottom-10"
                  onClick={() => {
                    setCategoryFilterId(x.id);
                    setCategoryShow(true);
                  }}
                >
                  {x.category}
                </button>
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
