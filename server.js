const express = require('express')
const cors = require('cors')
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(cors())

app.use('/login', async (req, res) => {
   res.send({
      token: uuidv4(),
   })
})

app.listen(8080, () =>
   console.log('API is running on http://localhost:8080/login'),
)
