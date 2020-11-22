import PostAvatarStyles from "./PostAvatar.module.css";
export default function PostAvatar(props) {
  return (
    <div className={PostAvatarStyles.post_avatar}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcmzSh71wN1WYTvzGtjgGpPyclfaaRfcV7MQ&usqp=CAU"
        alt="post_avatar"
      />
      <span>{`Likes: ${props.like} Dislike: ${props.dislike}`}</span>
    </div>
  );
}
