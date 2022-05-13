import { Paper, Button } from "@mui/material";
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Editor from "./Editor";
import "./askQuestion.css";
import { ClosedCaptionDisabledOutlined } from "@mui/icons-material";
export default function AskQuestion() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [title, setTitle] = useState("");
  const [answere, setAnswere] = useState("");
  const options = [
    { value: "js", label: "Javascript " },
    { value: "php", label: "Php" },
    { value: "java", label: "Java" },
    { value: "dot net", label: "Dot net" },
    { value: "qa", label: "QA" },
  ];
  const animatedComponents = makeAnimated();
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleAnswerechange(e) {
    setAnswere(e.target.value);
  }
  // console.log(title, "title");
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
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
        <div className="question-title">
          <label>Tags</label>
          <Select closeMenuOnSelect={false} isMulti options={options} />
        </div>
        <div className="question-title p-top-15">
          <Button variant="contained">Submit</Button>
        </div>
      </Paper>
    </div>
  );
}
