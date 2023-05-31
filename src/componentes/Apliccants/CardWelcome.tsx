import { useUser } from '../../context/UserProvider'
import photoProfile from '../../assets/images/photoProfile.png'

function CardWelcome() {
    const authUser = useUser();
    const { displayName } = authUser.user;

    return (
        <div className="overflow-hidden bg-secundaryGreyLight h-72 rounded-xl">
            <div className="flex items-center justify-between h-full gap-x-8">

                <div>
                    <p className="pl-8 mb-4 text-2xl text-primaryBlueDark">Bienvenido,</p>
                    {displayName && <h2 className="pl-8 mb-4 text-4xl font-extrabold text-primaryBlueDark">{displayName}</h2>}
                    <p className="px-8 py-2 text-2xl text-white bg-secundaryViolet">Un gusto tenerte aquí</p>
                </div>

                <div className="relative">
                    <img src={photoProfile} alt="photo profile" className="w-48 h-60 rounded-xl" />
                </div>

            </div>
        </div>
    )
}

export default CardWelcome;
