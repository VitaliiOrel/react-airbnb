import Heading from '../heading'
import './index.css'

const Contact = ({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) => {
  return (
    <div>
      <div className="contact">
        <div className="avatar">
          <img src={image} alt="img" />
        </div>

        <div className="subblock">
          <Heading>Господар - {name}</Heading>
          <div className="contactblock">
            <span className="contactblock-value">{phone}</span>
            <span className="contactblock-value">{response_time}</span>
            <span className="contactblock-value">
              {response_rate}% швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <div className="infoBlock">
        <span>{info}</span>
      </div>
    </div>
  )
}

export default Contact
