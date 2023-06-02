import BtnQuestion from "../componentes/Buttons/BtnQuestion";
import InputSearch from "../componentes/Inputs/InputSearch";
import NavLogo from "../componentes/Nav/NavLogo";
import NavMenu from "../componentes/Nav/NavMenu";
import { MdQuiz } from "react-icons/md";


export default function RecAyuda() {

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
        answer: ''
    };
    const question5 = {
        question: '¿Qué es Mejorar el CV y cómo funciona?',
        answer: ''
    };
    const question6 = {
        question: '¿Dónde puedo encontrar las nuevas ofertas publicadas?',
        answer: ''
    };
    const question7 = {
        question: '¿Puedo actualizar mi curriculum una vez adjuntado?',
        answer: ''
    };
    const question8 = {
        question: '¿Cómo recupero mi contraseña si la olvidé?',
        answer: ''
    };


    return (
        <div className="flex relative">
            <div className="z-10">
                <NavMenu/>
            </div>


            <div className="absolute pl-16 w-full">

                <NavLogo/>

                <div className="mx-10">
                    <div className="flex justify-between mt-6 mb-10">
                        <div className="flex items-center text-xl">
                            <MdQuiz/>
                            <h2 className="text-xl ml-2"> Preguntas frecuentes</h2>
                        </div>
                        <InputSearch/>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="flex flex-col w-1/2 pr-5">
                            <BtnQuestion question={question1.question} answer={question1.answer}/>
                            <BtnQuestion question={question2.question} answer={question2.answer}/>
                            <BtnQuestion question={question3.question} answer={question3.answer}/>
                            <BtnQuestion question={question4.question} answer={question4.answer}/>
                        </div>
                        <div className="flex flex-col w-1/2 pl-5">
                            <BtnQuestion question={question5.question} answer={question5.answer}/>
                            <BtnQuestion question={question6.question} answer={question6.answer}/>
                            <BtnQuestion question={question7.question} answer={question7.answer}/>
                            <BtnQuestion question={question8.question} answer={question8.answer}/>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
