import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../service/firebase'
import axios from 'axios'

const IA = () => {
  const [messages, setMessages] = useState<string[]>([])

  const handleSendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:3000/chat', {
        messages: [{ content: cv }],
      })
      console.log(response)

      const botMessage = response.data.choices[0].message.content
      setMessages(botMessage)
    } catch (error) {
      console.error(error)
    }
  }

  const [cv, setCv] = useState({})

  const dataCollection = collection(db, 'perfilUsuario')

  const getData = async () => {
    const data: any = await getDocs(dataCollection);
    const cvTest: string = data.docs[0]._document.data.value.mapValue.fields.cv.stringValue;
    setCv(cvTest);
    console.log(cv);
  };

  const handleSaveCv = async e => {
    e.preventDefault()
    //await addDoc(dataCollection, { cv: cv })
  }

  const handleFileChange = event => {
    setCv(event.target.files[0])
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSaveCv}>GUARDAR</button>
      <div>
        {/* <img src={file} alt="file" />
        {convertedText} */}
      </div>
      <div className="flex bg-rojo justify-center">
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <div className="flex bg-primaryGreen justify-center items-center p-4">
        <div>{messages}</div>
      </div>
    </div>
  )
}

export default IA
