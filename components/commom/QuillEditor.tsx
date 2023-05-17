import React from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface QuillEditorProps {
  contentText: string;
  setContentText: (value: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ contentText, setContentText }) => {
  const handleChangeContentText = (value: string) => {
    setContentText(value);
  };

  const toolbarOptions = [
    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    // ['blockquote', 'code-block'],
    ["code-block", "image", "link"],

    //  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    //  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    // [{ 'direction': 'rtl' }],                         // text direction

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <ReactQuill
      value={contentText}
      modules={modules}
      onChange={handleChangeContentText}
      theme='snow'
    />
  );
};

export default QuillEditor;
