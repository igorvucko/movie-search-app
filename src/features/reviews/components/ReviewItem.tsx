
interface ReviewItemProps {
  id: number;
  author: string;
  content: string;

}

function ReviewItem({ id, author, content } : ReviewItemProps ){
  return (
    <li key={id}>
      <h4>{author}</h4>
      <p>{content.substring(0, 200)}...</p>
    </li>
  );
}

export default ReviewItem;
