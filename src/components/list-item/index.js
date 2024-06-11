import './index.css'

const ListItem = ({ children, imageSrc, title }) => {
  return (
    <li className="list-item">
      {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon" />}
      <div className="list-item__block">
        {title && <strong className="list-item__title">{title}</strong>}
        <div className="list-item__content">{children}</div>
      </div>
    </li>
  )
}

export default ListItem
