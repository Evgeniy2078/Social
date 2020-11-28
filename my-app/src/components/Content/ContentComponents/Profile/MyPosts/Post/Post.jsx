import PostClasses from "./Post.module.css";
import PostAvatar from "./PostAvatar/PostAvatar";
import PostDescriptions from "./PostDescription/PostDescription";
export default function Post(props) {
  return (
    <div className={PostClasses.post_wrapper}>
      <PostAvatar like={props.like} dislike={props.dislike} />
      <PostDescriptions message={props.message} />
    </div>
  );
}
