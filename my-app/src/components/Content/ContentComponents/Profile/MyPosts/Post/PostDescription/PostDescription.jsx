import PostDescriptionsStyles from "./PostDescription.module.css";
export default function PostDescriptions(props) {
  return (
    <div className={PostDescriptionsStyles.post_description}>
      <div className={PostDescriptionsStyles.item}>{props.message}</div>
    </div>
  );
}
