import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import App from "../App";
import MainScreen from "../screen/MainScreen";
import MarkdownEditor from "../screen/MarkdownEditor";
import MarkdownViewer from "../screen/MarkdownViewer";

/**
 * Navigation router for the markdown renderer app.
 */
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route path="" element={<MainScreen />} />
      <Route path="mdviewer" element={<MarkdownViewer />} />
      <Route path="mdeditor" element={<MarkdownEditor />} />
    </Route>
  )
);

export default router;
