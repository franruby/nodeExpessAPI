const { request, response } = require('express')
const express = require('express')
const app = express()

const notes = [
    {
        'id': 1,
        'content': 'Contenido item 1',
        'important': true
    },
    {
        'id': 2,
        'content': 'Contenido item 2',
        'important': true
    },
    {
        'id': 3,
        'content': 'Contenido item 3',
        'important': true
    }
]

// Main Route
app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>')
})

// API Route
app.get('/api/notes', (request, response) => {
    response.json(notes)
})

// 404
app.get('*', (request, response) => {
    response.send('<h1>404 Page not found</h1>')
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)