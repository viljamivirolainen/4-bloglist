const dummy = (blogs) => {
    return 1
  }

const totalLikes = blogs => {
    const reducer = (sum, item) => {
        return sum + item
    }
    return blogs.length === 0
        ? 0
        : blogs.map(blog => blog.likes).reduce(reducer, 0)
}

const favoriteBlog = blogs => {
    const reducer = (largest, item) => {
        return largest.likes >= item.likes ? largest : item
    }
    return blogs.length === 0
    ? {}
    : blogs.reduce(reducer, blogs[0])

}
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }
  