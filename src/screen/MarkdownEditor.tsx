import { Button, TextareaAutosize } from "@mui/material";
import { useRef, useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

export interface IMarkDownTypingScreeProps {}

/**
 * Function component for the markdown editor screen of the app.
 *
 * @param props Properties for the markdown editor screen.
 * @returns A ui component representing the markdown editor screen.
 */
export default function MarkdownEditor(props: IMarkDownTypingScreeProps) {
  const inputRef = useRef<HTMLTextAreaElement>();
  const [areaText, setAreaText] = useState("");
  const [mdText, setMdText] = useState("");

  const clearClickHandler = () => {
    setAreaText("");
    setMdText("");
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="flex justify-center items-center m-5 ">
        <Button variant="contained" onClick={clearClickHandler} sx={{ mx: 2 }}>
          Clear
        </Button>
      </div>
      <div className="grid grid-cols-2 h-fit gap-6 bg-cover m-5 p-2 rounded-lg outline">
        <div className="grid-rows-2 justify-evenly m-5 rounded-sm flex-row">
          <div className="py-2">
            Markdown input{" "}
            <Button
              onClick={() => {
                navigator.clipboard.writeText(areaText);
              }}
              sx={{ p: 0, mx: 2 }}
            >
              Copy
            </Button>
          </div>
          <TextareaAutosize
            minRows={20}
            maxRows={20}
            className="flex rounded w-full h-full p-4 outline-dashed"
            value={areaText}
            autoFocus
            aria-multiline
            onChange={(e) => {
              setMdText(e.target.value);
              setAreaText(e.target.value);
            }}
          />
        </div>
        <div className="grid-rows-2 justify-evenly m-5 rounded-sm flex-row">
          <div className="py-2">
            Markdown output
            <Button
              onClick={() => {
                navigator.clipboard.writeText(mdText);
              }}
              sx={{ p: 0, mx: 2 }}
            >
              Copy
            </Button>
          </div>
          {mdText !== "" && (
            <div className=" outline rounded-md p-2" data-color-mode="light">
              <MarkdownPreview source={mdText} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
