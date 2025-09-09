const Blog = require('../models/blog')

const initialBlogs = [
 {
  "title": "My way",
  "author": "Eneye.",
  "url": "meme/me",
  "likes": 1
},
 {
  "title": "Tinubu Hope of a Nation",
  "author": "Bayo M.",
  "url": "aso/me",
  "likes": 1
}
]

const nonExistingId = async () => {
  const blog = new Blog({ content: 'willremovethissoon' })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb
}