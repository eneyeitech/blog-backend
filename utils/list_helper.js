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
    const highest = Math.max(...blogs.map((blog) => { return blog.likes }))
    console.log('high', highest)
    return blogs.find((blog) => blog.likes === highest)
}

const mostBlogs = (blogs) => {
    const authors = blogs.map((blog) => blog.author)
    console.log('author', authors)
    const authorsBlogCount = authors.reduce((arr, author) => {
        const index = arr.findIndex(o => o.author === author)
        if (index === -1) {
            arr.push({
                "author": author,
                blogs: 1
            })
        } else {
            arr[index].blogs = arr[index].blogs + 1;
            console.log('jj', index, arr)
        }
        return arr;
    }, [])

    const highest = Math.max(...authorsBlogCount.map((a) => a.blogs ))
    console.log('high', highest)
    return authorsBlogCount.find((a) => a.blogs === highest)
    
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}