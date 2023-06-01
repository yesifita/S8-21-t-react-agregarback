import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IApliccant } from '../../interfaces/IItemApliccants'

export interface IApliccantsInitialState {
  [key: string]: IApliccant[]
}

const initialState: IApliccantsInitialState = {
  guardados: [],
  enProceso: [],
  entrevista: [],
  contratado: [],
  noSeleccionado: [],
}

export const apliccantsSlice = createSlice({
  name: 'apliccants',
  initialState,
  reducers: {
    setContainers: (state, action: PayloadAction<IApliccantsInitialState>) => {
      state.guardados = action.payload.guardados
      state.enProceso = action.payload.enProceso
      state.entrevista = action.payload.entrevista
      state.contratado = action.payload.contratado
      state.noSeleccionado = action.payload.noSeleccionado
    },
  },
})

export const { setContainers } = apliccantsSlice.actions
