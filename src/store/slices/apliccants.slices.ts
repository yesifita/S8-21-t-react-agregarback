import { createSlice } from '@reduxjs/toolkit'
import { IItemApliccants } from '../../interfaces/IItemApliccants'

interface IContainer {
  name: string
  items: IItemApliccants[]
}
interface IApliccantsInitialState {
  containers: IContainer[]
}

const initialState: IApliccantsInitialState = {
  containers: [
    {
      name: 'Guardados',
      items: [
        {
          id: '1',
          fullName: '2',
        },
      ],
    },
    {
      name: 'En proceso',
      items: [],
    },
    {
      name: 'Entrevista',
      items: [
        {
          id: '4',
          fullName: '5',
        },
      ],
    },

    {
      name: 'Contratado',
      items: [],
    },

    {
      name: 'No seleccionado',
      items: [],
    },
  ],
}

export const apliccantsSlice = createSlice({
  name: 'apliccants',
  initialState,
  reducers: {},
})
