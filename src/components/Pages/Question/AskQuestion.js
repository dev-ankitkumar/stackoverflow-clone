import { Paper, Button } from "@mui/material";
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Editor from "./Editor";
import "./askQuestion.css";
import { useAddPostMutation } from "../../redux/loginapi/postQuestionSlice";
import { useTagsapiQuery } from "../../redux/loginapi/tagsSlice";
import { ClosedCaptionDisabledOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AskQuestion() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const tagsData = useTagsapiQuery();
  // const options1 = tagsData?.data?.info.map((x) => {
  //   return "{ value: `${x.id}`, label: `${x.category}`" ;
  // }1
  // );
  const myArray = [];
  const newData = tagsData?.data?.info.map((x) => {
    return { value: x.id, label: x.category };
  });

  const [post, { isLoading, data, error, isSuccess }] = useAddPostMutation();
  const btnSubmit = async () => {
    console.log(title, "title");
    console.log(description, "description");
    const selectedData = selectedOption[0].value;
    await post({ title, description, selectedData });
    navigate("/");
  };
  if (error) <div>{error}</div>;
  const animatedComponents = makeAnimated();
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleAnswerechange(e) {}

  return (
    <div>
      <h1 className="question_page_heading">Ask a public question</h1>
      <Paper elevation={20} className="question-container">
        <div className="question-title margin">
          <label id="label-title">Title</label>
          <label>
            Be specific and imagine you’re asking a question to another person
          </label>
          <input
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="question-title margin">
          <CKEditor
            editor={ClassicEditor}
            data=""
            config={{ placeholder: "Enter Your Description..." }}
            // placeholder="Enter Your Description"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              // console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setDescription(data);
            }}
            onBlur={(event, editor) => {
              // console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              // console.log("Focus.", editor);
            }}
          />
        </div>
        <div className="question-title">
          <label>Tags</label>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={newData}
            onChange={(e) => {
              setSelectedOption(e);
            }}
          />
        </div>
        <div className="question-title p-top-15">
          <Button variant="contained" onClick={btnSubmit}>
            Submit
          </Button>
        </div>
      </Paper>
    </div>
  );
}
