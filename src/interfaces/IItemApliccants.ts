export interface IApliccant {
  id: string
  fullName: string
  state?: 'guardados' | 'enProceso' | 'entrevista' | 'contratado' | 'noSeleccionado'
  avatar: string
  experience: 'Sin Experiencia' | 'Junior' | 'SemiSenior' | 'Senior'
  rol: string
  createdAt: string
  active: boolean
}
