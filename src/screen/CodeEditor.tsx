import CodeEditorComponent from "../codeeditorpack/CodeEditorComponent";

export interface ICodeEditorProps {}

export default function CodeEditor(props: ICodeEditorProps) {
  return (
    <div className="h-full w-full">
      <CodeEditorComponent />
    </div>
  );
}
