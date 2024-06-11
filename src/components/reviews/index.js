import React, { Fragment } from 'react'
import Heading from '../heading'
import Box from '../box'
import './index.css'

const Reviews = ({ list }) => {
  return (
    <div className="review__block">
      <Heading>Відгуки клієнтів</Heading>
      <div className="review__list">
        {list.map((review) => (
          <Fragment key={review.id}>
            <Item {...review} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="reviewBox">
      <div className="reviewBlock">
        <span className="guestName">{guestName}</span>
        <span className="rating">Rating: {rating}</span>
      </div>
      <span className="review">{review}</span>
    </Box>
  )
}
export default Reviews
