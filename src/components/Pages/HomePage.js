import data from "../jsonFiles/question.json";
export default function HomePage() {
  const data1 =
    Object();
    // .fromEntries
    // Object.entries(data).map(
    //   (x) => {
    //     console.log(x);
    //   }
    //   // return x[1];
    //   // console.log(x[1]);
    // )
  // const data2 = data1.map(({ id }) => {
  // console.log(id);
  // <div key={x.id}>
  // <div>{x.id}</div>
  // </div>;
  // console.log(x[1]);
  // });
  return (
    <div>
      <div>
        <div>All Questions</div>
        <button>Ask Question </button>
      </div>
      <div>{/* <div>{data2}</div> */}</div>
    </div>
  );
}
