import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'
import './index.css'

const Additional = (props) => {
  return (
    <Box shadow>
      <div className="details">
        <Heading border>Додаткові властивості:</Heading>
        <List {...props} />
      </div>
    </Box>
  )
}

function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  checkin_instructions,
}) {
  return (
    <ul className="additional__list">
      <ListItem title="Правила дому">
        <span>{house_rules}</span>
      </ListItem>
      <ListItem title="Полтітика скасування">
        <span>{cancellation_policy}</span>
      </ListItem>
      <ListItem title="Місцевий транспорт">
        <span>{local_transportation}</span>
      </ListItem>
      <ListItem title="Мови хоста">
        <span>{host_languages}</span>
      </ListItem>
      <ListItem title="Спеціальні пропозиції">
        <span>{special_offers}</span>
      </ListItem>
      <ListItem title="Інструкції щодо реєстрації">
        <span>{checkin_instructions}</span>
      </ListItem>
    </ul>
  )
}

export default Additional
