import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'
import './index.css'

const Amenities = (props) => {
  return (
    <Box shadow>
      <div className="details">
        <Heading border>Зручності:</Heading>
        <List {...props} />
      </div>
    </Box>
  )
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="amenities__list">
      {hasPool && (
        <ListItem imageSrc="/pool.svg">
          <span>Басейн</span>
        </ListItem>
      )}
      {hasGym && (
        <ListItem imageSrc="/gym.svg">
          <span>Спортивний зал</span>
        </ListItem>
      )}
      {hasFreeBreakfast && (
        <ListItem imageSrc="/breakfast.svg">
          <span>Безкоштовний сніданок</span>
        </ListItem>
      )}
      {hasFreeWiFi && (
        <ListItem imageSrc="/wifi.svg">
          <span>Безкоштовний Wi-Fi</span>
        </ListItem>
      )}
      {hasParking && (
        <ListItem imageSrc="/parking.svg">
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imageSrc="/pets.svg">
          <span>Дозволено розміщення з домашніми тваринами</span>
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imageSrc="/shuttle.svg">
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
      )}
      {hasConciergeService && (
        <ListItem imageSrc="/conciergeservice.svg">
          <span>Консьєрж-сервіс</span>
        </ListItem>
      )}
      {hasRoomService && (
        <ListItem imageSrc="/roomservice.svg">
          <span>Обслуговування номерів</span>
        </ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imageSrc="/chilfdriendly.svg">
          <span>Підходить для дітей</span>
        </ListItem>
      )}
    </ul>
  )
}

export default Amenities
