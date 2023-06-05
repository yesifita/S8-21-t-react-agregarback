import CardMejoCV from '../componentes/Apliccants/CardMejoCV'
import CardWelcome from '../componentes/Apliccants/CardWelcome'
import NavLogo from '../componentes/Nav/NavLogo'
import NavMenu from '../componentes/Nav/NavMenu'

export default function PostuDashboard() {
  return (
    <div className="relative flex">
      <div className="z-10">
        <NavMenu />
      </div>

      <div className="absolute w-full pl-16">
        <NavLogo />

        <div>
          <CardWelcome />
          <CardMejoCV/>
        </div>
        
      </div>
    </div>
  )
}
