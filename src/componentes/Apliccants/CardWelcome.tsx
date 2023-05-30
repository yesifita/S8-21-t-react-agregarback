import { useUser } from '../../context/UserProvider'
import photoProfile from '../../assets/images/photoProfile.png'

function CardWelcome() {
    const authUser = useUser();
    const { displayName } = authUser.user;

    return (
        <div className="bg-secundaryGreyLight h-72 rounded-xl overflow-hidden">
            <div className="flex justify-between items-center h-full gap-x-8">

                <div>
                    <p className="text-2xl text-primaryBlueDark mb-4 pl-8">Bienvenido,</p>
                    {displayName && <h2 className="text-4xl text-primaryBlueDark font-extrabold mb-4 pl-8">{displayName}</h2>}
                    <p className="text-2xl bg-secundaryViolet text-white py-2 px-8">Un gusto tenerte aquí</p>
                </div>

                <div className="relative">
                    <img src={photoProfile} alt="photo profile" className="w-48 h-60 rounded-xl" />
                </div>

            </div>
        </div>
    )
}

export default CardWelcome;
