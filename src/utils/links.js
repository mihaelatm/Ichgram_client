import home_icon from "../assets/icons/home_icon.svg";
import home_icon_filled from "../assets/icons/home_icon_filled.svg";
import search_icon from "../assets/icons/search_icon.svg";
import search_icon_filled from "../assets/icons/search_icon_filled.svg";
import explore_icon from "../assets/icons/explore_icon.svg";
import explore_icon_filled from "../assets/icons/explore_icon_filled.svg";
import message_icon from "../assets/icons/message_icon.svg";
import message_icon_filled from "../assets/icons/message_icon_filled.svg";
import notification_icon from "../assets/icons/notification_icon.svg";
import notification_icon_filled from "../assets/icons/notification_icon_filled.svg";
import create_icon from "../assets/icons/create_icon.svg";

const links = [
  { to: "/home", label: "Home", icon: home_icon, filledIcon: home_icon_filled },
  {
    to: "/search/users",
    label: "Search",
    icon: search_icon,
    filledIcon: search_icon_filled,
  },
  {
    to: "/explore",
    label: "Explore",
    icon: explore_icon,
    filledIcon: explore_icon_filled,
  },
  {
    to: "/messages",
    label: "Messages",
    icon: message_icon,
    filledIcon: message_icon_filled,
  },
  {
    to: "/notifications",
    label: "Notifications",
    icon: notification_icon,
    filledIcon: notification_icon_filled,
  },
  {
    label: "Create",
    icon: create_icon,
  },
];

export default links;
