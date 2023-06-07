import { useUser } from '../../context/UserProvider'
import photoProfile from '../../assets/images/photoProfile2.png'

export default function CardWelcomePostu() {
    const authUser = useUser();
    const { displayName,email } = authUser.user;

    return (
        <div className="bg-secundaryGreyLight h-72 rounded-xl">
            <div className="flex items-center h-full">

                <div className='w-full'>
                    <p className="pl-8 mb-4 text-2xl text-primaryBlueDark">Bienvenido,</p>
                   <h2 className="pl-8 mb-4 text-4xl font-extrabold text-primaryBlueDark">{displayName ? displayName : email}</h2>
                    <p className="px-8 py-2 text-2xl text-white bg-secundaryViolet">Un gusto tenerte aquí</p>
                </div>
                <div className="relative z-10 mr-6">
                    <div className="bg-center bg-no-repeat bg-cover rounded-xl" style={{ backgroundImage: `url(${photoProfile})`, height: '240px', width: '220px'}}>
                    </div>
                </div>
            </div>
        </div>
    )
}