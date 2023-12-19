import * as React from "react";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-sass";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-handlebars";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-coffee";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/keybinding-emacs";
import "ace-builds/src-noconflict/keybinding-vim";
import "ace-builds/src-noconflict/keybinding-vscode";
import "ace-builds/src-noconflict/keybinding-sublime";
import AceEditor from "react-ace";
import SelectComponent from "./component/SelectComponent";
import { EditorModes, EditorTheme, FontSize, Keyboard } from "./Constant";

export interface ICodeEditorComponentProps {}

export default function CodeEditorComponent(props: ICodeEditorComponentProps) {
  const [theme, setTheme] = React.useState<EditorTheme>(EditorTheme.github);
  const [mode, setMode] = React.useState<EditorModes>(EditorModes.javascript);
  const [keyboard, setKeyboard] = React.useState<Keyboard>(Keyboard.vim);
  const [fontSize, setFontSize] = React.useState<string>("20");

  const handleThemeChange = (themeSelect: EditorTheme) => {
    setTheme(themeSelect);
  };
  const handleModeChange = (modeSelect: EditorModes) => {
    setMode(modeSelect);
  };
  const handleKeyboardChange = (keyboardSelect: Keyboard) => {
    setKeyboard(keyboardSelect);
  };
  const handleFontChange = (fontChange: string) => {
    setFontSize(fontChange);
    console.log(fontChange);
  };
  return (
    <div className=" flex items-start row-auto m-5 p-2 outline-dotted gap-4">
      <div className="w-[10%]">
        <div className=" m-2 p-1 min-w-full">
          <SelectComponent
            label="Theme"
            optionArray={Object.values(EditorTheme)}
            handleChange={handleThemeChange}
          />
        </div>
        <div className=" m-2 p-1 w-full">
          <SelectComponent
            label="Mode"
            optionArray={Object.values(EditorModes)}
            handleChange={handleModeChange}
          />
        </div>
        <div className="m-2 p-1 w-full">
          <SelectComponent
            label="Keyboard"
            optionArray={Object.values(Keyboard)}
            handleChange={handleKeyboardChange}
          />
        </div>
        <div className="m-2 p-1 w-full">
          <SelectComponent
            label="FontSize"
            optionArray={FontSize}
            handleChange={handleFontChange}
          />
        </div>
      </div>
      <div className=" m-5 rounded-md outline p-1 overflow-scroll">
        <AceEditor
          placeholder="Write your code.... Happy coding !!!...."
          mode={mode}
          theme={theme}
          name="Code Editor"
          height="500px"
          width="1200px"
          onLoad={() => {}}
          onChange={() => {}}
          fontSize={fontSize}
          showPrintMargin={true}
          showGutter={true}
          key={keyboard}
          highlightActiveLine={true}
          value={``}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: false,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
            useWorker: false,
          }}
        />
      </div>
    </div>
  );
}
