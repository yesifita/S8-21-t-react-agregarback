import { Waveform } from '@uiball/loaders'
import close from '../../assets/icons/close X.svg'

const Loader = () => {
  return (
    <div id="conteiner_loader" className="z-50 flex flex-col items-center justify-center w-screen h-screen bg-slate-800">
      <div id='content_loader' className='w-4/12 bg-orange-100 h-2/5' >
<div className='w-8 h-8 bg-slate-100 ml-450'>
<img src={close} className='p-2 '></img>
</div>
<div className='px-64 py-20 '>

      <Waveform />
</div>
      </div>
    </div>
  )
}

export default Loader
