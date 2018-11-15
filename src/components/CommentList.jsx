import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

function CommentList(props) {
  console.log(props);
  return(
    <div>
      {props.commentList.map((comment, index) =>
        <Comment
          names={comment.names}
          comment={comment.comment}
          commentTimeStamp={comment.commentTimeStamp}
          key={index}
        />
      )}
    </div>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.array
};

export default CommentList;
