const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((total, current) => total + current.likes, 0)
}

const favoriteBlog = (blogs) => {
  const blog = blogs.reduce(
    (max, current) => (current.likes > max.likes ? current : max),
    blogs.length > 0 ? blogs[0] : {}
  )
  const blogCopy = JSON.parse(JSON.stringify(blog))
  delete blogCopy._id
  delete blogCopy.__v
  delete blogCopy.url
  return blogCopy
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
