const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

const OPENAI_API_KEY = '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'

app.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body

    const userMessage = messages[0].content // Accede al contenido del mensaje del usuario

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Eres una IA reclutadora de TI. Analiza el currículum proporcionado y ofrece feedback para mejorarlo en términos de resaltar habilidades relevantes, organizar la información de manera efectiva y brindar sugerencias adicionales para aumentar las posibilidades de conseguir un empleo en la industria de TI. Sé constructivo y específico en tu feedback. ${userMessage}`,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    )

    res.json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error en la solicitud de completado de chat' })
  }
})

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})
