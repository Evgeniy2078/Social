import DialogStyles from "./Dialogs.module.css";
import Avatar from "./DialogsComponents/DialogsAvatar/DialogAvatar";
import Message from "./DialogsComponents/DialogsMessages/DialogMessages";


export default function Dialogs(props) {
  console.log(props)
  let dialogs = props.dialogData.map((dialog) => (
    <Avatar id={dialog.id} name={dialog.name} />
  ));
  let Messages = props.dialogsMessage.map((message) => (
    <Message message={message.message} id={message.id} />
  ));
  return (
    <div className={DialogStyles.dialogs}>
      <div className={DialogStyles.dialogs_item}>{dialogs}</div>
      <div className={DialogStyles.messages}>{Messages}</div>
    </div>
  );
}
