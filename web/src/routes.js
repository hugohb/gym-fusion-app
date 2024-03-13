import Icon from "@mui/material/Icon";
import Dashboard from "pages/Dashboard";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/emisores",
    component: <Dashboard />,
  },
];

export default routes;
