import Comment from './Comment';

const commentsData = [
  {
    name: 'Eswar',
    text: 'Lorem ipsum dolor sit amet.',
    replies: [
      {
        name: 'Eswar',
        text: 'Lorem ipsum dolor sit amet.',
        replies: [],
      },
    ],
  },
  {
    name: 'Eswar',
    text: 'Lorem ipsum dolor sit amet.',
    replies: [
      {
        name: 'Eswar',
        text: 'Lorem ipsum dolor sit amet.',
        replies: [
          {
            name: 'Eswar',
            text: 'Lorem ipsum dolor sit amet.',
            replies: [
              {
                name: 'Eswar',
                text: 'Lorem ipsum dolor sit amet.',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Eswar',
    text: 'Lorem ipsum dolor sit amet.',
    replies: [],
  },
];

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index} className="my-2">
          <Comment data={comment} />
          {comment.replies?.length > 0 && (
            <div className="ml-6 border-l pl-4">
              <CommentList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl mb-4 font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
