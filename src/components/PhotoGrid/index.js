import React from 'react'
import Photo from '../Photo'
import {connect } from 'react-redux'

const mapStateToProps = state => {
  return { posts: state.posts };
}
function PhotoGrids({posts}){

    return (
      <div className="photo-grid">
        {posts.map((post, i) => {
          return (
            <Photo key={i} index={i} post={post} />
          )
        })}
      </div>
    )
  }

const PhotoGrid = connect(mapStateToProps)(PhotoGrids);

export default PhotoGrid
