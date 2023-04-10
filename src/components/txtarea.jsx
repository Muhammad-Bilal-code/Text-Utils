import React, { useState } from "react";

export default function Textarea({ textArea }) {
  const [text, setText] = useState("");

  const handleUpperCase = (e) => {
    setText(text.toLocaleUpperCase());
    // setIsUpper(true)
  };
  const handleLowerCase = (e) => {
    setText(text.toLocaleLowerCase());
  };
  const handleCapitalize = () => {
    let capText = text.split(" ");
    capText = capText.map(
      (elm) => elm.slice(0, 1).toUpperCase() + elm.slice(1).toLowerCase()
    );
    setText(capText.join(" "));
  };

  
  const handleChangeState = (e) => {
    // console.log(text)
    if(e.target.value[0] === " "){
      // alert("test")
      setText(e.target.value.replace(/\s+/g,""))
    }
    else{
      setText(e.target.value.replace(/\s+/g," "))
    }
    // console.log(text)
  };
  // console.log(text)
  const handleClearText = (e) => {
    setText("");
    // setText(e.target.value);
  };
  const handleCopyClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => console.log("Text copied to clipboard"))
      .catch((err) => console.error("Could not copy text: ", err));
  };
  const handleBlur = ()=>{
    setText(text.trim())
  }
  return (
    <>
      <div class="container my-3">
        <div className="mb-3">
          <label for="myTextArea" className="form-label">
            {textArea}
          </label>
          <textarea
            className="form-control"
            id="myTextArea"
            rows="5"
            value={text}
            onChange={handleChangeState}
            onBlur={handleBlur}
            placeholder="Enter Text Here"
          ></textarea>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleUpperCase}
          >
            Convert to Upper Case
          </button>
          <button
            className="btn btn-success my-2 mx-2"
            onClick={handleLowerCase}
          >
            Convert to Lower Case
          </button>
          <button
            className="btn btn-danger my-2 mx-2"
            onClick={handleCapitalize}
          >
            Convert to Capitalize Case
          </button>
          <button
            className="btn btn-warning my-2 mx-2"
            onClick={handleClearText}
          >
            Clear Text
          </button>
          <button
            className="btn btn-info my-2 mx-2"
            onClick={handleCopyClipboard}
          >
            Copy to Clipboard
          </button>
        </div>
        <div className="text-summary">
          <h2>Text Summary</h2>
          {text.length === 0 ? "0 words " : text.split(" ").length + " words "}
          {text.length} characters
        </div>
        <div className="text-Preview">
          <h2>Text Preview</h2>
          {text}
        </div>
      </div>
    </>
  );
}
