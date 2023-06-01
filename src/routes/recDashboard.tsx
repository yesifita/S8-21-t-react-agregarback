import CardWelcome from '../componentes/Apliccants/CardWelcome'
import CardNewJob from '../componentes/Apliccants/CardNewJob'
import CardNewPostulates from '../componentes/Apliccants/CardNewPostulates'
import CardNewTotals from '../componentes/Apliccants/CardNewTotals'
import NavLogo from '../componentes/Nav/NavLogo'
import NavMenu from '../componentes/Nav/NavMenu'

export default function RecDashboard() {
  return (
    <div className="relative flex">
      <div className="z-10">
        <NavMenu />
      </div>

      <div className="absolute w-full pl-16">
        <NavLogo />

        <div className="flex flex-col items-center mx-10">
          <div className="flex flex-wrap w-full my-8">
            <div className="w-1/2 pr-4">
              <CardWelcome />
            </div>

            <div className="w-1/2 pl-4">
              <CardNewTotals />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2 pr-4">
              <CardNewJob />
            </div>
            <div className="w-1/2 pl-4">
              <CardNewPostulates />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
