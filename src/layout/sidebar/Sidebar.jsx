import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

const Sidebar = () => {
  return <></>;
};

export default Sidebar;

export const sidebarItems = [
  {
    title: "Statistika",
    icon: <TrendingUpIcon />,
    link: "/",
  },
  {
    title: "Moderatorlar",
    icon: <RecentActorsOutlinedIcon />,
    link: "/moderator",
  },
  {
    title: "Operatorlar",
    icon: <PeopleAltOutlinedIcon />,
    link: "/operator",
  },
  {
    title: "Görüjiler",
    icon: <RemoveRedEyeOutlinedIcon />,
    link: "/operator?type=Viewer",
  },
  {
    title: "Admin",
    icon: <AdminPanelSettingsOutlinedIcon />,
    link: "/operator?type=admin",
  },
  {
    title: "Söwda nokatlar",
    icon: <RoomOutlinedIcon />,
    link: "/store-location",
  },
  {
    title: "Eltip berijiler",
    icon: <LocalShippingOutlinedIcon />,
    link: "/courier",
  },
  {
    title: "Soraglar",
    icon: <HelpOutlineOutlinedIcon />,
    link: "/question",
  },
  {
    title: "Ulanyjy görnüşleri",
    icon: <GridViewOutlinedIcon />,
    link: "/customer-type",
  },

  {
    title: "Yzyna gaýtarmak sebäpleri",
    icon: <CancelOutlinedIcon />,
    link: "/cancel_reason",
  },
  {
    title: "Çykmak",
    icon: <LogoutIcon />,
    link: "/login",
  },
];
