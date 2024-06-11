import React from 'react'
import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'
import './index.css'

const Attractions = ({ list }) => {
  return (
    <Box shadow>
      <div className="details">
        <Heading border>Пам'ятки поблизу</Heading>
        <ul className="attr-list">
          {list.map((attr) => (
            <ListItem>
              <a href={`https://${attr.link}`} key={attr.id} target="blank">
                {attr.name}
              </a>
            </ListItem>
          ))}
        </ul>
      </div>
    </Box>
  )
}

export default Attractions
