import React from 'react'
import { Link } from 'react-router-dom'
import {incrementLikes} from '../../actions/actionCreators'

function mapDispatchToProps(dispatch) {
  return {
    incrementLikes: post => dispatch(incrementLikes(props.index))
  };
}

function Photos(props) {

  const { post, comments } = props;

  return (
    <figure className="grid-figure">
      <Link to={`/view/${post.code}`}>

        <img src={post.display_src} alt={post.caption} className="grid-photo" />
      </Link>
      <figcaption>
        <p>{post.caption}</p>
      </figcaption>
      <div className="control-buttons">

        <button onClick="mapDispatchToProps" className="likes">
          &hearts; {post.likes}
        </button>
        <span className="comment-count">
          <span className="speech-bubble"></span>

          <span> Comments: {comments ? comments.length : 0}</span>
        </span>
      </div>
    </figure>
  )
}
const Photo = connect(null, mapDispatchToProps)(Photos);

export default Photo
