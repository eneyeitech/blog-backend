const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    const reducer = (sum, blog) => {
        return sum + blog.likes;
    }

    return blogs.length === 0
      ? 0
      : blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    const highest = Math.max(...blogs.map((blog) => {return blog.likes}))
    console.log('high', highest)
    return blogs.find((blog) => blog.likes === highest)
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}