import PostsClasses from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";

let PostsData = [
  { id: 1, message: "Yo", likesCount: 3, DislikesCount: 233 },
  { id: 2, message: "Hello", likesCount: 13, DislikesCount: 123 },
  { id: 3, message: "Hi", likesCount: 5, DislikesCount: 41 },
  { id: 4, message: "Ho", likesCount: 7, DislikesCount: 53 },
  { id: 4, message: "Yooo", likesCount: 6, DislikesCount: 73 },
  { id: 4, message: "HiHi", likesCount: 1, DislikesCount: 673 },
];

export default function MyPosts() {
  return (
    <div className={PostsClasses.posts_wrapper}>
      <Post
        message={PostsData[0].message}
        like={PostsData[0].likesCount}
        dislike={PostsData[0].DislikesCount}
      />
      <Post
        message={PostsData[1].message}
        like={PostsData[1].likesCount}
        dislike={PostsData[1].DislikesCount}
      />
      <Post
        message={PostsData[2].message}
        like={PostsData[2].likesCount}
        dislike={PostsData[2].DislikesCount}
      />
      <Post
        message={PostsData[3].message}
        like={PostsData[3].likesCount}
        dislike={PostsData[3].DislikesCount}
      />
      <Post
        message={PostsData[4].message}
        like={PostsData[4].likesCount}
        dislike={PostsData[4].DislikesCount}
      />
      <Post
        message={PostsData[5].message}
        like={PostsData[5].likesCount}
        dislike={PostsData[5].DislikesCount}
      />
    </div>
  );
}
