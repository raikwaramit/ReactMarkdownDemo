import { Button } from "@mui/material";
import { useState } from "react";
import InputFileUpload from "../component/UploadButton";
import MarkdownPreview from "@uiw/react-markdown-preview";

export interface IMarkdownComponentProps {}

/**
 * Function component for the markdown viewer screen of the app.
 *
 * @param props Properties for the markdown viewer screen.
 * @returns A ui component representing the markdown viewer screen.
 */
export default function MarkdownViewer(props: IMarkdownComponentProps) {
  const [md, setMd] = useState<string | undefined>("");
  const buttonClickHandler = () => {
    import("../file.md")
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res: string) => {
            console.log(res);
            setMd(res);
          });
      })
      .catch((error) => console.log(error));
  };

  const uploadButtonClickHandler = (e: any) => {
    e.preventDefault();
    console.log(e);
    const reader = new FileReader();
    reader.onload = (e) => {
      const stringToShow = e.target?.result;
      console.log(stringToShow);
      setMd(stringToShow?.toString());
    };

    reader.readAsText(e.target.files[0]);
  };

  return (
    <div className="flex-col h-screen justify-center m-5 rounded-lg outline">
      <div className="flex justify-evenly m-5 rounded-md  flex-row p-5">
        <Button variant="contained" onClick={buttonClickHandler}>
          Markdown Demo
        </Button>
        <InputFileUpload handler={uploadButtonClickHandler} />
      </div>
      <div
        className="flex m-3 outline h-4/5 rounded-md p-2 overflow-scroll"
        data-color-mode="light"
      >
        <MarkdownPreview source={md} />
      </div>
    </div>
  );
}
