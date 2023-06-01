

import photoProfile from '../../assets/images/photoProfile.png'

function CardWelcome() {
    return (
        <div className="flex justify-between items-center bg-zinc-200 h-72 rounded-xl gap-x-8">
            <div>
                <p className="text-2xl mb-4 pl-8">Bienvenido,</p>
                <h2 className="text-4xl font-extrabold mb-4 pl-8">Eduardo Vargas</h2>
                <p className="text-2xl bg-zinc-300 py-2 rounded-r-xl pl-8">Un gusto tenerte aquí</p>
            </div>
            <div className='pr-6'>
                <img src={photoProfile} alt="photo profile" className='w-48 h-60 rounded-xl'/>
            </div>
        </div>        
    )
}

export default CardWelcome


