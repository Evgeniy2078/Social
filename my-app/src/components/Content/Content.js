import ContentStyles from './Content.module.css'
import { Route} from "react-router-dom";
import Profile from "./ContentComponents/Profile/Profile";
import Dialogs from "./ContentComponents/Dialogs/Dialogs";
import Music from "./ContentComponents/Music/Music";
import News from "./ContentComponents/News/News";
import Settings from "./ContentComponents/Settings/Settings";

export default function Content(props){
 
  
    return(

        <div className={ContentStyles.app_wrapper_content}>
          <Route path="/profile" render={() =>  <Profile postsData = {props.postsData}/>} />
          <Route path="/dialogs" render = {() => <Dialogs dialogData = {props.dialogData} dialogsMessage={props.dialogsMessage}/>} />
          <Route path="/news" render={() =>  <News/>} />
          <Route path="/music" render={()=> <Music/>} />
          <Route path="/settings" render={()=> <Settings/>} />
        </div>
    )
}