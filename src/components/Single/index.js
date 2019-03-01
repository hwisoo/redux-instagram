import React from 'react'
import Photo from '../Photo'
import Comments from '../Comments'
import {connect } from 'react-redux'

const mapStateToProps = state => {
  return { posts: state.posts, 
          comments: state.comments
  };
}

function Singles (props){


  
    const id  = props.match.params.code;
    const currentPost = props.posts.filter(post => (post.code === id));
    
    const currentComments = props.comments[id] || []

    return (
      <div className="single-photo">
      <p>I called</p>
        <Photo post={currentPost[0]} />
        <Comments comments={currentComments} />
      </div>
    )
  }


const Single = connect(mapStateToProps)(Singles);

export default Single;
