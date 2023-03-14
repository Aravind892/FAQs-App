// Write your JS code here
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogDetails} = props

  return (
    <div className="list">
      {blogDetails.map(eachItem => (
        <BlogItem details={eachItem} key={eachItem.id} />
      ))}
    </div>
  )
}

export default BlogList
