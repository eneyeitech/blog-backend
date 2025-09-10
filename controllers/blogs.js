const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogsRouter.get('/', async (request, response) => {
   const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs)
})

/**blogsRouter.get('/', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})*/

blogsRouter.post('/', async (request, response) => {
  const body = request.body;

  if(!body.title || !body.url){
    return response.status(400).end();
  }

 //const user = await User.findById(body.userId)
  const user = await User.findOne()

  if (!user) {
    return response.status(400).json({ error: 'userId missing or not valid' })
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
    user: user._id
  })

  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()

  response.status(201).json(savedBlog);
})

/**blogsRouter.post('/', (request, response) => {

  const blog = new Blog(request.body)

  blog.save().then((result) => {
    response.status(201).json(result)
  })
})*/

blogsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params

  await Blog.findByIdAndDelete(id)
  response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
  const { id } = request.params
  const { title, author, url, likes } = request.body

  const updatedBlog = await Blog.findByIdAndUpdate(
    id,
    { title, author, url, likes },
    { new: true, runValidators: true, context: 'query' }
  )

  if (updatedBlog) {
    response.json(updatedBlog)
  } else {
    response.status(404).end()
  }
})


module.exports = blogsRouter