import "./App.css";
import { Navbar } from "./componet/Navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/DarkTheme";
import Home from "./componet/Home/Home";
import RestaurantDetails from "./componet/Restaurant/RestaurantDetails";
import Cart from "./componet/Cart/Cart";
import Profile from "./componet/Profile/Profile";
import { CustomerRoute } from "./Routers/CustomerRoute";
import { LoginForm } from "./componet/Auth/LoginForm";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Navbar /> */}
      {/*<Home />*/}
      {/* <RestaurantDetails /> */}
      {/* <Cart /> */}
      {/* <Profile /> */}
      <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
