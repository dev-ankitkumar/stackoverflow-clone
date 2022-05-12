import Editor from "./Editor";
import data from "../../jsonFiles/question.json";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function QuestionView() {
  let { id } = useParams();
  // console.log(id.split(":")[1]);
  let postData = useSelector((state) => state.showpostslice.queries.showpost);
  console.dir(postData);
  // let id = 1;
  // const questionData = Object.entries(data).map((x) => {
  //   return x[1]
  //     .filter((x) => x.id == id)
  //     .map((x) => (
  //       <div className="w-75">
  //         <div className="fs-3">{x.question}</div>
  //         <div>{x.Description}</div>
  //         <div className="d-flex p-top-10">
  //           {x.tags.map((x, index) => {
  //             return (
  //               <div className="p-all btn border m-right-5" key={index}>
  //                 {x}
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     ));
  // });
  return (
    <div>
      {/* <div>{questionData}</div> */}
      <div>
        Know someone who can answer? Share a link to this question via email,
        Twitter, or Facebook. Your Answer
      </div>
      <div className="w-75">
        <Editor />
      </div>
    </div>
  );
}
