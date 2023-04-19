// components
import Header from "./components/header/Header";
import Home from "./components/home/Home";

import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </Box>
  );
}

export default App;
