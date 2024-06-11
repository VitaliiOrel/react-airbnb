import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'
import './index.css'

const Details = (props) => {
  return (
    <Box shadow>
      <div className="details">
        <Heading border>Деталі властивості:</Heading>
        <List {...props} />
      </div>
    </Box>
  )
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="details__list">
      <ListItem imageSrc="/guests.svg">
        <span>{guests} гості</span>
      </ListItem>
      <ListItem imageSrc="/bedrooms.svg">
        <span>{bedrooms} спальня</span>
      </ListItem>
      <ListItem imageSrc="/beds.svg">
        <span>{beds} ліжко</span>
      </ListItem>
      <ListItem imageSrc="/baths.svg">
        <span>{baths} ванна кімната</span>
      </ListItem>
    </ul>
  )
}

export default Details
