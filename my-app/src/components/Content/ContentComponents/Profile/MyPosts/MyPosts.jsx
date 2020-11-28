import PostsClasses from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";



export default function MyPosts(props) {
  let posts = props.postsData.map(post=> <Post message={post.message} like={post.likesCount} dislike={post.DislikesCount} />)
  return (
    <div className={PostsClasses.posts_wrapper}>
      {posts}
    </div>
  );
}
