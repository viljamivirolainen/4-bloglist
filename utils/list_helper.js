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
        return Math.max(largest, item)
    }
}
  module.exports = {
    dummy,
    totalLikes
  }
  