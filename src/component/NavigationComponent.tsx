import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

/**
 * Function component for the top navigation bar for the markdown renderer app.
 *
 * @returns A ui component representing the navigation bar.
 */
export default function NavigationComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/"> Markdown file renderer</NavLink>
          </Typography>
          <Button color="inherit" sx={{ p: 0, m: 1 }}>
            <NavLink
              to="/mdviewer"
              className={({ isActive }) =>
                isActive ? " bg-blue-800 rounded-lg p-2" : " bg-inherit p-2"
              }
            >
              Markdown screen
            </NavLink>
          </Button>
          <Button color="inherit" sx={{ p: 0, m: 1 }}>
            <NavLink
              to="/mdeditor"
              className={({ isActive }) =>
                isActive ? " bg-blue-800 rounded-lg p-2" : " bg-inherit p-2"
              }
            >
              Markdown editor
            </NavLink>
          </Button>{" "}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
