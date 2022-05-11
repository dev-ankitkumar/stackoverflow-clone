import { Paper } from "@mui/material";
import React from "react";
import "./askQuestion.css";
import Editor from "./Editor";
export default function AskQuestion() {
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
          <label>body</label>
          <label>
            Include all the information someone would need to answer your
            question
          </label>
          <Editor />
        </div>
      </Paper>
    </div>
  );
}
