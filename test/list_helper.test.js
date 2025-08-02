const { test, describe } = require('node:test')
const assert = require('node:assert')
const { totalLikes } = require('../utils/list_helper')

describe('total likes', () => {
    test('of empty lists is zero', () => {
        const blogs = []
        const result = totalLikes(blogs)
        assert.strictEqual(result, 0)
    })

    test('when list has only one blog, equals the likes of that', () => {
        const listWithOneBlog = [
            {
                _id: '5a422aa71b54a676234d17f8',
                title: 'Go To Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
                likes: 5,
                __v: 0
            }
        ]
        const result = totalLikes(listWithOneBlog)
        assert.strictEqual(result, 5)
    })

    test('of a bigger list is calculated right', () => {
        const listWithMoreThanOneBlog = [
            {
                _id: '5a422aa71b54a676234d17f8',
                title: 'Go To Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
                likes: 3,
                __v: 0
            },
            {
                _id: '5a422aa71b54a676234d17f8',
                title: 'Go To Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
                likes: 5,
                __v: 0
            },
            {
                _id: '5a422aa71b54a676234d17f8',
                title: 'Go To Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
                likes: 5,
                __v: 0
            }
        ]
        const result = totalLikes(listWithMoreThanOneBlog)
        assert.strictEqual(result, 13)
    })
})
