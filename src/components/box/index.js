import './index.css'

const Box = ({ children, className, shadow }) => {
  return (
    <div className={`box ${shadow ? 'box--shadow' : ''} ${className}`}>
      {children}
    </div>
  )
}

export default Box
