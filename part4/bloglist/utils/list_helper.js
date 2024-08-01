const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((total, current) => total + current.likes, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.reduce((max, current) => current.likes > max.likes ? current : max, blogs.length > 0 ? blogs[0] : {})
}

module.exports = {
  dummy,
  totalLikes,
}
