import React from 'react'
import { Link } from 'react-router-dom'
// import CSSTransitionGroup from 'react-addons-css-transition-group'

class Photo extends React.Component{
  render() {
    const { post, index, comments } = this.props;

    return (
      <figure className="grid-figure">
        {/* <div className="grid-photo-wrap"> */}
          {/* <Link to={`/view/${post.code}`}>
          </Link> */}
            <img src={post.display_src} alt={post.caption} className="grid-photo" />

          {/* <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup> */}
        {/* </div> */}

          <figcaption>
          <p>{post.caption}</p>
          </figcaption>
          <div className="control-buttons">

         {/* onClick={post.incrementLikes.bind(null, index)}  */}
            <button className="likes">
              &hearts; {post.likes}
            </button> 
            <span className="comment-count">
                {/* <span className="speech-bubble"></span>
                <span> {comments[post.code] ? comments[post.code].length : 0}</span> */}
              </span>
            </div>
          </figure>
                         )
                        }
                      }
          

            /* <Link to={`/view/${post.code}`} className="button">
              
            </Link> */

        
 

        
      
      

export default Photo
