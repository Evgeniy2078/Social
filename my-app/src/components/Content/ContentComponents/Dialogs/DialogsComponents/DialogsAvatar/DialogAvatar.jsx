import AvatarStyles from "./DialogAvatar.module.css";
import { NavLink } from "react-router-dom";

export default function Avatar(props) {
  return (
    <div className={AvatarStyles.item}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
}
