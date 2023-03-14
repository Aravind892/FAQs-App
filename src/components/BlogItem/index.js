// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details

  return (
    <ul className="list-items">
      <div className="header">
        <h1 className="heading1">{title}</h1>
        <h2 className="heading2">{publishedDate}</h2>
      </div>
      <p className="para">{description}</p>
      <hr />
    </ul>
  )
}
export default BlogItem
