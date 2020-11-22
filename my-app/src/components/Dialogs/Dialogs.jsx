import DialogStyles from "./Dialogs.module.css";
import Avatar from "./DialogsComponents/DialogsAvatar/DialogAvatar";
import Message from "./DialogsComponents/DialogsMessages/DialogMessages";

let dialogsData = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Дима" },
  { id: 3, name: "Оля" },
  { id: 4, name: "Коля" },
  { id: 5, name: "Юля" },
];
let dialogs = dialogsData.map((dialog) => (
  <Avatar id={dialog.id} name={dialog.name} />
));

let dialogsMessage = [
  { id: 1, message: "Yo" },
  { id: 2, message: "Hello" },
  { id: 3, message: "Hi" },
  { id: 4, message: "Ho" },
];

let Messages = dialogsMessage.map((message) => (
  <Message message={message.message} id={message.id} />
));

export default function Dialogs(props) {
  return (
    <div className={DialogStyles.dialogs}>
      <div className={DialogStyles.dialogs_item}>{dialogs}</div>
      <div className={DialogStyles.messages}>{Messages}</div>
    </div>
  );
}
