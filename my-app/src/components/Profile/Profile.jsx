import MyPosts from "./MyPosts/MyPosts";
import ProfileClasses from "../Profile/Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
export default function Profile() {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}
