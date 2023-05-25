import { createSlice } from '@reduxjs/toolkit'
import { IItemApliccant } from '../../interfaces/IItemApliccants'

interface IApliccantsInitialState {
  [key: string]: IItemApliccant[]
}

const initialState: IApliccantsInitialState = {
  guardados: [
    {
      id: '1s',
      fullName: 'Carlos',
    },
    {
      id: '2s',
      fullName: 'Juan',
    },
  ],

  enProceso: [
    {
      id: 'En proceso',
      fullName: 'Pedro',
    },
  ],

  entrevista: [
    {
      id: 'Entrevista',
      fullName: 'Carlos',
    },
  ],

  contratado: [
    {
      id: '4',
      fullName: 'Carlos',
    },
  ],

  noSeleccionado: [
    {
      id: '5',
      fullName: 'Carlos',
    },
  ],
}

export const apliccantsSlice = createSlice({
  name: 'apliccants',
  initialState,
  reducers: {
    setContainers: (state, action) => {
      state.guardados = action.payload.guardados
      state.enProceso = action.payload.enProceso
      state.entrevista = action.payload.entrevista
      state.contratado = action.payload.contratado
      state.noSeleccionado = action.payload.noSeleccionado
    },
  },
})

export const { setContainers } = apliccantsSlice.actions
