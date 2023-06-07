import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MultipleContainers } from './MultipleContainers'
import { IApliccant } from '../../interfaces/IItemApliccants'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../../service/firebase'
import { IApliccantsInitialState, setContainers } from '../../store/slices/apliccants.slices'
import { SearchApliccants } from './SearchApliccants'
import Swal from 'sweetalert2'
import NavMenu from '../Nav/NavMenu'
import NavLogo from '../Nav/NavLogo'

export const Apliccants = () => {
  const [apliccants, setApliccants] = useState<IApliccant[]>([])
  const dispatch = useDispatch()

  const getApliccants = async () => {
    const tempApplicants: IApliccant[] = []

    const response = await getDocs(collection(db, 'Apliccants'))
    response.forEach(doc => {
      const apliccant: IApliccant = { id: doc.id, ...doc.data() } as IApliccant
      if (apliccant.active === true) {
        tempApplicants.push(apliccant)
      }
    })
    setApliccants(tempApplicants)
  }

  const getApliccantsByFilter = async (key: string, value: string) => {
    setApliccants([])
    const tempApplicants: IApliccant[] = []

    const response = await getDocs(collection(db, 'Apliccants'))
    response.forEach(doc => {
      const apliccant: IApliccant = { id: doc.id, ...doc.data() } as IApliccant
      console.log(apliccant[key], value)
      if (
        apliccant[key] &&
        apliccant[key].toLocaleLowerCase().includes(value.toLocaleLowerCase())
      ) {
        tempApplicants.push(apliccant)
      }
    })
    setApliccants(tempApplicants)
    if (tempApplicants.length === 0) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'No se encontraron postulantes',
        showConfirmButton: false,
        timer: 2000,
      })
    }
  }

  const loadContainers = () => {
    const containerGuardados: IApliccant[] = apliccants.filter(
      applicant => applicant.state === 'guardados'
    )
    const containerEnProceso: IApliccant[] = apliccants.filter(
      applicant => applicant.state === 'enProceso'
    )
    const containerEntrevista: IApliccant[] = apliccants.filter(
      applicant => applicant.state === 'entrevista'
    )
    const containerContratado: IApliccant[] = apliccants.filter(
      applicant => applicant.state === 'contratado'
    )
    const containerNoSeleccionado: IApliccant[] = apliccants.filter(
      applicant => applicant.state === 'noSeleccionado'
    )

    const containers: IApliccantsInitialState = {
      guardados: containerGuardados ?? [],
      enProceso: containerEnProceso ?? [],
      entrevista: containerEntrevista ?? [],
      contratado: containerContratado ?? [],
      noSeleccionado: containerNoSeleccionado ?? [],
    }
    dispatch(setContainers(containers))
  }

  useEffect(() => {
    getApliccants()
  }, [])

  useEffect(() => {
    loadContainers()
  }, [apliccants])

  return (
    <div className="relative flex">
      <div className="z-10">
        <NavMenu />
      </div>
      <div className="absolute w-full pl-16">
        <NavLogo />
        <div style={{ width: '95vw' }} className="w-x-10">
          <SearchApliccants getApliccantsByFilter={getApliccantsByFilter} />
          <MultipleContainers />
        </div>
      </div>
    </div>
  )
}
