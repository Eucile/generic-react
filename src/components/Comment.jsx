import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  return(
    <div>
      <style jsx>{`
          div {
            background-color: red;
          }
      `}</style>
      <p>Tesssstttt</p>
      <h3>{props.names}</h3>
      <h4>{props.commentTimeStamp}</h4>
      <p><em>{props.comment}</em></p>
      <hr/>
    </div>
  );
}

Comment.propTypes = {
  names: PropTypes.string.isRequired,
  comment: PropTypes.string,
  commentTimeStamp: PropTypes.string.isRequired,
};

export default Comment;
