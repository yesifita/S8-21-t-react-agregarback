export interface IApliccant {
  id: string
  fullName: string
  state?: 'guardados' | 'enProceso' | 'entrevista' | 'contratado' | 'noSeleccionado'
  avatar: string
  profesion: string
  rol: string
  createdAt: string
}
