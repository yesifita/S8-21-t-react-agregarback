import { useState, useRef, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../service/firebase'
import axios from 'axios'

export default function BtnSubirCV({ setOpen, open, setResponse, setLoading }) {
  const fileInputRef: React.MutableRefObject<null> = useRef(null)
  const [fileName, setFileName] = useState('')
  const [messages, setMessages] = useState<string[]>([])
  const [cv, setCv] = useState({})
  
  const handleSendMessage = async () => {
      try {
          setLoading(true)
          setOpen(!open)
          const response = await axios.post('http://localhost:3000/chat', {
        messages: [{ content: cv }],
      })

      const botMessage = response.data.choices[0].message.content
      setMessages(botMessage)
      setResponse(botMessage)
      console.log(messages)
    } catch (error) {
      console.error(error)
    }  finally {
        setLoading(false);
      }
  }

  const dataCollection = collection(db, 'perfilUsuario')

  const getData = async () => {
    const data: any = await getDocs(dataCollection);
    const cvTest: string = data.docs[0]._document.data.value.mapValue.fields.cv.stringValue;
    setCv(cvTest);
    console.log(cv);
  };
  

  const handleClick = () => {
    (fileInputRef.current as any)?.click();
  };
  

  const handleFileChange = event => {
    const file = event.target.files[0]
    if (file) {
      setFileName(file.name)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col justify-between bg-white p-4 w-2/4 h-[70%] rounded-xl border-2 border-primaryBlueDark">
        <div className="flex flex-col items-left h-full p-4">
          <div className="font-black text-3xl leading-10">
            Genera sugerencias para tu curriculum vitae
          </div>
          <div className="flex flex-col justify-center w-full gap-5 mt-8">
            <div className="flex justify-center w-full">
              <div className="flex flex-col w-[50%] font-semibold text-base leading-5 mt-5">
                <div className="text-left font-medium text-base leading-5">
                  <p>Nombre</p>
                </div>
                <div className="flex justify-center mt-5">
                  <input
                    className="w-[90%] bg-secundaryGreyLight rounded-xl p-4"
                    type="text"
                    placeholder="Escribe tu nombre"
                  />
                </div>
              </div>

              <div className="w-[50%] mt-5">
                <div className="text-left font-medium text-base leading-5">
                  <p>Área de experiencia</p>
                </div>
                <div className="flex justify-center mt-5">
                  <select className="w-[90%] bg-secundaryGreyLight rounded-xl p-4" name="" id="">
                    <option value="">Selecciona una opción</option>
                    <option value="">Productos digitales/Desarrollo web</option>
                    <option value="">Administración/Contaduría</option>
                    <option value="">Marketing/Social Media</option>
                    <option value="">Abogado/Juez</option>
                    <option value="">Consultor empresarial</option>
                    <option value="">Otro</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-secundaryGreyLight border-black border-2 border-dashed rounded-xl">
              <div className="w-full rounded-xl cursor-pointer p-4" onClick={handleClick}>
                Sube tu documento desde esta área
                <input
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
              <div className="w-full rounded-xl p-4">{fileName}</div>
            </div>

            <div className="flex flex-col font-semibold text-base leading-5 mt-5">
              <div className="text-left font-medium text-base leading-5">
                <p>Nivel de experiencia</p>
              </div>
              <div className="flex justify-center">
                <input
                  className="w-full bg-secundaryGreyLight rounded-xl p-4 mt-5"
                  type="text"
                  placeholder="Senior"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-x-6">
          <button
            className="hover:bg-rojo hover:text-blanco hover:border-none text-secondary font-bold border-2 border-secondary rounded-xl w-4/5 h-12"
            onClick={() => setOpen(!open)}
          >
            Cancelar
          </button>
          <button
            className="bg-primaryGreen hover:bg-botonesHover text-white text-center font-bold rounded-xl w-4/5 h-12"
            id="PERSONALES"
            onClick={() => handleSendMessage()}
          >
            Mejorar curriculum
          </button>
        </div>
      </div>
    </div>
  )
}
