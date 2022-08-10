import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const Sidebar = () => {
  return <div>Sidebar</div>;
};

export default Sidebar;

export const sidebarItems = [
  {
    title: "Statistics",
    icon: <TrendingUpIcon />,
    link: "/statistica",
  },
  {
    title: "Moderatorlar",
    icon: <RecentActorsOutlinedIcon />,
    link: "moderator",
  },
  {
    title: "Operatorlar",
    icon: <PeopleAltOutlinedIcon />,
    link: "operator",
  },
  {
    title: "Sowda nokatlar",
    icon: <RoomOutlinedIcon />,
    link: "store-location",
  },
  {
    title: "Eltip berijiler",
    icon: <LocalShippingOutlinedIcon />,
    link: "courier",
  },
  {
    title: "Soraglar",
    icon: <HelpOutlineOutlinedIcon />,
    link: "question",
  },
  {
    title: "Ulanyjy gornusleri",
    icon: <GridViewOutlinedIcon />,
    link: "customer-type",
  },
];
