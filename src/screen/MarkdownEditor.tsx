import { Button, TextareaAutosize } from "@mui/material";
import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
  const clickHandler = () => {
    setMdText(areaText);
  };

  const clearClickHandler = () => {
    setAreaText("");
    setMdText("");
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="flex justify-center items-center m-5 ">
        <Button variant="contained" onClick={clickHandler} sx={{ mx: 2 }}>
          Click To Markdown
        </Button>
        <Button variant="contained" onClick={clearClickHandler} sx={{ mx: 2 }}>
          Clear
        </Button>
      </div>
      <div className="grid grid-cols-2 h-fit gap-6 bg-cover m-5 p-2 rounded-lg outline">
        <div className="grid-rows-2 justify-evenly m-5 rounded-sm flex-row">
          <div className="py-2">Markdown input</div>
          <TextareaAutosize
            minRows={20}
            maxRows={20}
            className="flex rounded w-full h-full p-4 outline-dashed"
            value={areaText}
            autoFocus
            aria-multiline
            onChange={(e) => {
              setAreaText(e.target.value);
            }}
          />
        </div>
        <div className="grid-rows-2 justify-evenly m-5 rounded-sm flex-row">
          <div className="py-2">Markdown output</div>
          {mdText !== "" && (
            <ReactMarkdown
              className="flex rounded w-full p-4 outline-dashed"
              remarkPlugins={[remarkGfm]}
            >
              {mdText}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </>
  );
}
