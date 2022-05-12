import { Paper, Button } from "@mui/material";
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Editor from "./Editor";
import "./askQuestion.css";

export default function AskQuestion() {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "js", label: "Javascript " },
    { value: "php", label: "Php" },
    { value: "java", label: "Java" },
    { value: "dot net", label: "Dot net" },
    { value: "qa", label: "QA" },
  ];
  const animatedComponents = makeAnimated();
  return (
    <div>
      <h1 className="question_page_heading">Ask a public question</h1>
      <Paper elevation={20} className="question-container">
        <div className="question-title margin">
          <label id="label-title">Title</label>
          <label>
            Be specific and imagine you’re asking a question to another person
          </label>
          <input placeholder="title" />
        </div>
        <div className="question-title margin">
          <Editor />
        </div>
        <div className="question-title">
          <label>search tags</label>
          <Select closeMenuOnSelect={false} isMulti options={options} />
        </div>
        <div className="question-title p-top-15">
          <Button variant="contained">Submit</Button>
        </div>
      </Paper>
    </div>
  );
}
