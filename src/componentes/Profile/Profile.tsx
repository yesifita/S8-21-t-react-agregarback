import { useState } from 'react';
import EditIcon from '../../assets/icons/edit.svg';
import NavMenu from '../navMenu';
import { Link } from 'react-router-dom';
import NavLogo from '../Nav/NavLogo';

interface Dates {
    nombre: string;
    ruc: string;
    direccion: string;
    rubro: string;
  }

export default function Profile() {

    const [edit, setEdit] = useState(false)
    const [newDates, setNewDates] = useState<Dates>({
        nombre: "Tienda Nova C.A",
        ruc: "J200207-8",
        direccion: "Calle 12. Av 27-28 #51",
        rubro: "Diseño de productos"
    })

    function handlEdit (){
        setEdit(!edit)
    }

    function handleInput (e: React.ChangeEvent<HTMLInputElement>): void {
        console.log(e.target.name)
        console.log(e.target.value)
        console.log(newDates)
        setNewDates((prevState: Dates) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }));
        console.log("nuevos dates" , newDates)
    }

    const containerClasses = `flex items-center ${!edit ? 'justify-center' : 'justify-end'} w-[30rem] h-44 rounded-xl mt-10`;

  return (
    <>
      <div className="absolute w-full h-full flex">
        <div className="w-[5.3rem]"><NavMenu/> </div>

        <div className="w-full h-full">

        <NavLogo/>

          <div className="flex justify-around h-[54rem]">

            <div className=" ml-14">

            <div className={containerClasses}>
                
                <div className="flex space-x-4">

                    <img className="w-28 h-28" src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" alt="Imagen"/>
                    
                    <div className="flex flex-col justify-center">
                        <h1 className="text-negroOscuro font-extrabold text-3xl leading-10 not-italic">Eduardo Vargas</h1>
                        <p className="text-negroOscuro font-medium text-xs leading-6">Reclutador de Tiendas Nova</p>
                    </div>

                </div>

                {edit && (
                    <button className="self-start text-center text-white bg-celeste p-4 rounded-lg w-[3.7rem] h-auto transform -translate-x-2 translate-y-2">
                    <img src={EditIcon}/>
                    </button>
                )}

            </div>

            <div>
                <h1 className="text-negroOscuro font-extrabold text-3xl leading-10 mt-[3.5rem]">Datos de recuperación</h1>
                <div className="mt-[1.5rem]">
                <p>Tu empresa está registrada con el e-mail</p>
                <p className='font-bold'>vargas@nova.com</p>
                </div>
                <div className="w-96 mt-[1.5rem]">
                <p>A esta dirección te enviaremos las notificaciones sobre el estado de tus empleos publicados, y recuperación de datos.</p>
                </div>
                <button className="bg-celeste text-blanco text-center rounded-xl p-4 w-52 h-auto mt-[2.5rem]">
                <p>Modificar clave y correo</p>
                </button>
            </div>

            </div>

                <div className="flex flex-col items-center bg-grisClaro w-[32rem] h-[50rem] rounded-xl mt-10 ml-14">
                <h1 className="text-negroOscuro font-extrabold text-3xl leading-10 mt-[3.5rem]">Datos de la Empresa</h1>
                
                <div className="flex items-center justify-between space-x-5 mt-[3.5rem] w-96">
                <h6 className="text-negroOscuro font-bold text-lg leading-5">Nombre</h6>
                <div className="bg-blanco text-center w-64 rounded-xl p-4">
                {edit ? 
                    
                    <input type="text" name='nombre' value={newDates.nombre} onChange={(e)=>handleInput(e)}/>
                    
                : <p>{newDates.nombre}</p>
                }
                </div>
                </div>

                <div className="flex items-center justify-between space-x-5 mt-[1.5rem] w-96">
                <h6 className="text-negroOscuro font-bold text-lg leading-5">RUC</h6>
                <div className="bg-blanco text-center w-64 rounded-xl p-4">
                {edit ? 
                    
                    <input type="text" name='ruc' value={newDates.ruc} onChange={(e)=>handleInput(e)}/>
                    
                : <p>{newDates.ruc}</p>
                }
                </div>
                </div>

                <div className="flex items-center justify-between space-x-5 mt-[1.5rem] w-96">
                <h6 className="text-negroOscuro font-bold text-lg leading-5">Dirección</h6>
                <div className="bg-blanco text-center w-64 rounded-xl p-4">
                {edit ? 
                    
                    <input type="text" name='direccion' value={newDates.direccion} onChange={(e)=>handleInput(e)}/>
                    
                : <p>{newDates.direccion}</p>
                }
                </div>
                </div>

                <div className="flex items-center justify-between space-x-5 mt-[1.5rem] w-96">
                <h6 className="text-negroOscuro font-bold text-lg leading-5">Rubro</h6>
                <div className="bg-blanco text-center w-64 rounded-xl p-4">
                {edit ? 
                    
                    <input type="text" name='rubro' value={newDates.rubro} onChange={(e)=>handleInput(e)}/>
                    
                : <p>{newDates.rubro}</p>
                }
                </div>
                </div>

                <h1 className="text-negroOscuro font-extrabold text-3xl leading-10 mt-[2rem]">Descripción</h1>

                <div className="bg-blanco w-[28rem] rounded-xl p-5 mt-[1rem]">
                <p>Aca una breve descripción de la empresa, que solamente se muestren 3 líneas y el resto de la información se observe cuando la persona vaya a editar esta parte...</p>
                </div>

                <button className="bg-celeste text-blanco text-center rounded-xl p-4 w-52 h-auto mt-[2.5rem]" onClick={()=>handlEdit()}>
                <p>Modificar información</p>
                </button>

                </div>

          </div>
        </div>
      </div>
    </>
  );
}
