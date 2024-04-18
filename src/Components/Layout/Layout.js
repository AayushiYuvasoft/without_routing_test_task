import { Box, Grid } from "@mui/material";
import AppHeader from "./Header";
import AppFooter from "./Footer";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sx={{ margin: 3 }}>
          <AppHeader />
          	{children}
          <AppFooter />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
