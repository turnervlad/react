import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((x) => (
    <DialogItem name={x.name} id={x.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;


  // let add = React.createRef();
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea onChange={onNewMessageChange}
                      value={newMessageBody} placeholder="Enter your message"
                      ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
