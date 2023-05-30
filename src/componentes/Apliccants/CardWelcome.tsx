import { useUser } from '../../context/UserProvider'

import photoProfile from '../../assets/images/photoProfile.png'

function CardWelcome() {
    const authUser=useUser();
    const {displayName}= authUser.user;
    return (
        <div className="flex items-center justify-between bg-zinc-200 h-72 rounded-xl gap-x-8">
            <div>
                <p className="pl-8 mb-4 text-2xl">Bienvenido,</p>
                <h2 className="pl-8 mb-4 text-4xl font-extrabold">{displayName}</h2>
                <p className="py-2 pl-8 text-2xl bg-zinc-300 rounded-r-xl">Un gusto tenerte aquí</p>
            </div>
            <div className='pr-6'>
                <img src={photoProfile} alt="photo profile" className='w-48 h-60 rounded-xl'/>
            </div>
        </div>        
    )
}

export default CardWelcome


