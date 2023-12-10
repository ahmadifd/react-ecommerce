import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import Home from "./components/Home";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import Prefetch from "./features/auth/Prefetch";
import Welcome from "./features/auth/Welcome";
import DashLayout from "./components/DashLayout";
import ShoppingLayout from "./components/ShoppingLayout";
import Shopping from "./features/shop/Shopping";
import UsersList from "./features/users/UsersList";
import MuiTypography from "./components/mui/MuiTypography";
import { MuiButton } from "./components/mui/MuiButton";
import { MuiTextField } from "./components/mui/MuiTextField";
import { MuiSelect } from "./components/mui/MuiSelect";
import { MuiRadioButton } from "./components/mui/MuiRadioButton";
import { MuiCheckbox } from "./components/mui/MuiCheckbox";
import { MuiSwitch } from "./components/mui/MuiSwitch";
import { MuiRating } from "./components/mui/MuiRating";
import { MuiAutocomplete } from "./components/mui/MuiAutocomplete";
import { MuiLayout } from "./components/mui/MuiLayout";
import { MuiCard } from "./components/mui/MuiCard";
import { MuiAccordion } from "./components/mui/MuiAccordion";
import { MuiImageList } from "./components/mui/MuiImageList";
import { MuiNavbar } from "./components/mui/MuiNavbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
          >
            <Route element={<Prefetch />}>
              <Route path="home" element={<Home />} />

              <Route path="shopping" element={<ShoppingLayout />}>
                <Route index element={<Shopping />} />
              </Route>

              <Route
                element={
                  <RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />
                }
              >
                /////////////////////////////////////////////////////////////////////////////////
                <Route path="typo" element={<MuiTypography />} />
                <Route path="button" element={<MuiButton />} />
                <Route path="text" element={<MuiTextField />} />
                <Route path="select" element={<MuiSelect />} />
                <Route path="rb" element={<MuiRadioButton />} />
                <Route path="cb" element={<MuiCheckbox />} />
                <Route path="switch" element={<MuiSwitch />} />
                <Route path="rating" element={<MuiRating />} />
                <Route path="autoc" element={<MuiAutocomplete />} />
                <Route path="layout" element={<MuiLayout />} />
                <Route path="card" element={<MuiCard />} />
                <Route path="accor" element={<MuiAccordion />} />
                <Route path="imgl" element={<MuiImageList />} />
                <Route path="nav" element={<MuiNavbar />} />
                /////////////////////////////////////////////////////////////////////////////////
                <Route path="dash" element={<DashLayout />}>
                  <Route index element={<Welcome />} />
                  <Route path="users">
                    <Route index element={<UsersList />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
