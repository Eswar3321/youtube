const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="p-2 bg-gray-100 rounded-lg mb-2">
      <p className="font-semibold">{name}</p>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
