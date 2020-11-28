import MyPosts from "./MyPosts/MyPosts";
//import ProfileClasses from "../Profile/Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
export default function Profile(props) {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData ={props.postsData}/>
    </div>
  );
}
