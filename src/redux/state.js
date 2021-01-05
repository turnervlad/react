import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you", likesCount: 12 },
        { id: 2, message: "Hi", likesCount: 134 },
        { id: 3, message: "how are you", likesCount: 12343434 },
        { id: 4, message: "you", likesCount: 134432 },
      ],
      newPostText: "it-kamasutra.com",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "nigga" },
        { id: 3, message: "wazzzzup" },
        { id: 4, message: "cheburek" },
        { id: 5, message: "kek" },
        { id: 6, message: "lol" },
      ],
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Valera" },
        { id: 3, name: "Nikita" },
        { id: 4, name: "Igor" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Jonh" },
      ],
      newMessageBody: ''
    },
  },
  _callSubscriber() {
    console.log("state was changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
    
  },
};







window.store = store;
export default store;
