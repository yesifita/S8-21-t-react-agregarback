import BtnQuestion from "../componentes/Buttons/BtnQuestion";
import { MdQuiz } from "react-icons/md";

import { BsSearch } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import NavMenuPostu from "../componentes/Nav/NavMenuPostu";
import NavLogoPostu from "../componentes/Nav/NavLogoPostu";

export default function PostuAyuda() {
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda
  const inputRef = useRef<HTMLInputElement>(null);

  const SearchIcon = (
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
      <BsSearch />
    </div>
  );

  const handleInputClick = () => {
    setExpanded(true);
  };

  const handleDocumentClick = (event: any) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  
  const question1 = {
    question: '¿Cómo usar el tablero de forma efectiva?',
    answer: 'Por defecto, al ingresar a tu tablero de proceso por primera vez, encontrarás 4 columnas predefinidas: Invitaciones, Postulantes, Descartados y Contratados. Cuando las y los profesionales postulan a tu empleo, éstos llegan automáticamente a la columna "Postulantes". Ahí podrás filtrar postulantes y moverlos a diferentes fases arrastrándolos, o bien, haciendo click en su tarjeta y seleccionando la opción "Mover a" y seleccionar la fase a la que deseas moverlos'
  };
  const question2 = {
    question: '¿Qué puedo hacer si tengo un error en la plataforma?',
    answer: 'Si estas presentando algún inconveniente con nuestra plataforma te recomendamos contactarte con nuestra área de soporte: reclutando.arg@gmail.com.'
  };
  const question3 = {
    question: '¿Cómo compartir un empleo con enlace público?',
    answer: 'Los empleos compartidos de Reclutando, sólo serán visibles para usuarios registrados en el sitio. De modo que, si compartes un enlace y el usuario no está registrado, no podrá verlo.'
  };
  const question4 = {
    question: '¿Cada cuanto se actualizan las ofertas de empleo?',
    answer: 'Dentro de Reclutando, las ofertas de empleo se actualizan todos los días. De modo que si visitas de forma seguida nuestro sitio, podrás ver nuevas publicaciones y tener más empleos donde postularte.'
  };
  const question5 = {
    question: '¿Qué es Mejorar el CV y cómo funciona?',
    answer: 'Mejorar el CV, es una herramienta dentro de Reclutando para optimizar tu Currículum Vitae. La misma funciona de la siguiente forma, El primer paso es que adjuntes tu Currículum Vitae. Desde el botón, "Mejorar Curriculum" se abrirá una ventana emergente donde podrás adjuntarlo. Luego, mediante el uso de IA "Inteligencia Artificial", se te propondrán una serie de recomendaciones y mejoras para que puedas optimizarlo.  Finalmente, tendrás recomendaciones y herramientas web de referencia para llevar tu Currículum a su mejor estado y así conseguir el empleo que sueñas.'
  };
  const question6 = {
    question: '¿Dónde puedo encontrar las nuevas ofertas publicadas?',
    answer: 'Las ofertas publicadas más recientes, podrás verlas en la sección "Vacantes". Puedes acceder a ella desde el panel izquierdo. '
  }
  const question7 = {
    question: '¿Puedo actualizar mi curriculum una vez adjuntado?',
    answer: 'Puedes actualizar tu currículum las veces que desees. Puedes actualizarlo desde tu perfil o desde la sección Mejorar CV haciendo click en "Actualizar CV".'
  };
  const question8 = {
    question: '¿Cómo recupero mi contraseña si la olvidé?',
    answer: 'Si olvidaste tu contraseña, te recomendamos hacer click en "¿Olvidaste tu contraseña?". Se encuentra en nuestra pantalla de iniciar sesión.'
  };


  const filteredQuestions = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8
  ].filter((question) =>
    question.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
    <div className="flex relative">
      <div className="z-10">
        <NavMenuPostu/>
      </div>

      <div className="absolute pl-16 w-full">
        <NavLogoPostu/>
        <div className="mx-10">
          <div className="flex justify-between mt-6 mb-10">
            <div className="flex items-center text-xl">
              <MdQuiz/>
              <h2 className="text-xl ml-2"> Preguntas frecuentes</h2>
            </div>
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                placeholder="Buscar en preguntas frecuentes"
                className={`
                  h-14 pl-10 pr-6 bg-secundaryGreyLight rounded-xl 
                  ${expanded ? "w-450 border focus:border-primaryGreen" : "w-10"}
                `}
                style={{ transition: "width 0.3s" }}
                onClick={handleInputClick}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {SearchIcon}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10">
            {filteredQuestions.map((question, index) => (
              <BtnQuestion
                key={index}
                question={question.question}
                answer={question.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

















