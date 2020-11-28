import MessageStyle from "./DialogsMessage.module.css";

export default function Message(props) {
  return <div className={MessageStyle.message}>{props.message}</div>;
}
