import CardMejoCV from '../componentes/Apliccants/CardMejoCV'
import CardWelcomePostu from '../componentes/Apliccants/CardWelcomePostu'
import NavLogoPostu from '../componentes/Nav/NavLogoPostu'
import NavMenuPostu from '../componentes/Nav/NavMenuPostu'
import PostulateCardJobsFilter from '../componentes/Sections/PostulateCardJobsFilter'

export default function PostuDashboard() {
  return (
    <div className="relative flex">
      <div className="z-10">
        <NavMenuPostu />
      </div>

      <div className="absolute w-full pl-16">
        <NavLogoPostu />

        <div className='flex flex-wrap w-full px-10 my-8'>
          <div className='flex flex-col w-1/2 pr-4 gap-y-8'>
            <CardWelcomePostu />
            <CardMejoCV/>
          </div>
          <div className='w-1/2 pl-4'>
            <PostulateCardJobsFilter/>
          </div>
        </div>
        
      </div>
    </div>
  )
}
