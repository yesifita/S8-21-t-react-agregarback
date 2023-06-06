import express from 'express'
import axios from 'axios'
import cors from 'cors';

const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())
app.use(cors()); // Permitir solicitudes CORS desde cualquier origen

// Rutas de prueba
app.get('/', (req, res) => {
  res.send('¡Hola desde Express!')
})

const OPENAI_API_KEY = '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'

app.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body
    console.log(req.body)
    const userMessage = messages[0].content // Accede al contenido del mensaje del usuario

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userMessage }],
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
