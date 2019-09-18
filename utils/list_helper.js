const _ = require('lodash')

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
const mostBlogs = blogs => {
    const authorCounts = _.countBy(blogs, 'author')
    authorWithMostBlogs = _.max(Object.keys(authorCounts), o => authorCounts[o])
    return blogs.length === 0
    ? {}
    : { author : authorWithMostBlogs, blogs : authorCounts[authorWithMostBlogs]}
}

const mostLikes = blogs => {
    //mitä pitäisi tehdä?
    //1. group by author
    //2. laske authorien liket yhteen
    //3. valitse authori jolla eniten likejä

    //tämän jälkeen muodossa {author:[{blogi},{blogi}]} jne
    const grouped = _.groupBy(blogs, 'author')
    const likesByAuthor = _.mapValues(grouped, arr => arr.map(blog => blog.likes).reduce((total,likes)=>total+likes),0)  
    const authorWithMost = _.maxBy(Object.keys(likesByAuthor), o => likesByAuthor[o])
    return blogs.length === 0
    ? {}
    : {author:authorWithMost, likes:likesByAuthor[authorWithMost]}
}
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
  }
  