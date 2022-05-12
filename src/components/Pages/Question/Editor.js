import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default function Editor() {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.dir("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.dir({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.dir("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.dir("Focus.", editor);
        }}
      />
    </>
  );
}
