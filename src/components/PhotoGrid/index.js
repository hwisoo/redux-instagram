import React from 'react'
import Photo from '../Photo'
import {connect } from 'react-redux'
const mapStateToProps = state => {
  return { posts: state.posts, 
          comments: state.comments
  };
}

function PhotoGrids({posts, comments}){

    return (
      <div className="photo-grid">
        {posts.map((post, i) => {
          return (
            <Photo key={i} index={i} post={post} comments={comments[post.code]}/>
          )
        })}
      </div>
    )
  }

const PhotoGrid = connect(mapStateToProps)(PhotoGrids);

export default PhotoGrid
