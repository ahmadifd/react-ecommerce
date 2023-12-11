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
import { MuiLink } from "./components/mui/MuiLink";
import { MuiBreadcrumbs } from "./components/mui/MuiBreadcrumbs";
import { MuiDrawer } from "./components/mui/MuiDrawer";
import { MuiSpeedDial } from "./components/mui/MuiSpeedDial";
import { MuiBottomNavigation } from "./components/mui/MuiBottomNavigation";
import { MuiAvatar } from "./components/mui/MuiAvatar";
import { MuiBadge } from "./components/mui/MuiBadge";
import { MuiList } from "./components/mui/MuiList";
import { MuiChip } from "./components/mui/MuiChip";
import { MuiTooltip } from "./components/mui/MuiTooltip";
import { MuiTable } from "./components/mui/MuiTable";
import { MuiAlert } from "./components/mui/MuiAlert";
import { MuiSnackbar } from "./components/mui/MuiSnackbar";
import { MuiProgress } from "./components/mui/MuiProgress";
import { MuiDialog } from "./components/mui/MuiDialog";
import { MuiSkeleton } from "./components/mui/MuiSkeleton";
import { MuiLoadingButton } from "./components/mui/MuiLoadingButton";
import { MuiTabs } from "./components/mui/MuiTabs";
import { MuiTimeline } from "./components/mui/MuiTimeline";
import { MuiMasonry } from "./components/mui/MuiMasonry";
import { MuiCustomTheme } from "./components/mui/MuiCustomTheme";
import { MuiResponsiveness } from "./components/mui/MuiResponsiveness";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
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
        <Route path="link" element={<MuiLink />} />
        <Route path="brcr" element={<MuiBreadcrumbs />} />
        <Route path="drw" element={<MuiDrawer />} />
        <Route path="sd" element={<MuiSpeedDial />} />
        <Route path="btnnav" element={<MuiBottomNavigation />} />
        <Route path="avator" element={<MuiAvatar />} />
        <Route path="badge" element={<MuiBadge />} />
        <Route path="list" element={<MuiList />} />
        <Route path="chip" element={<MuiChip />} />
        <Route path="tooltip" element={<MuiTooltip />} />
        <Route path="table" element={<MuiTable />} />
        <Route path="alert" element={<MuiAlert />} />
        <Route path="snack" element={<MuiSnackbar />} />
        <Route path="prog" element={<MuiProgress />} />
        <Route path="dlg" element={<MuiDialog />} />
        <Route path="skeleton" element={<MuiSkeleton />} />
        <Route path="lbtn" element={<MuiLoadingButton />} />
        <Route path="tab" element={<MuiTabs />} />
        <Route path="tl" element={<MuiTimeline />} />
        <Route path="mnry" element={<MuiMasonry />} />
        <Route path="ct" element={<MuiCustomTheme />} />
        <Route path="resp" element={<MuiResponsiveness />} />
        /////////////////////////////////////////////////////////////////////////////////
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
