export interface User {
 email: string;
  password: string | number;

}
export interface Job{
  // imagen: string;
  empresa: string
  puesto :string
  experiencia: boolean
  modo:boolean
  ciudades:boolean
  salario:boolean
  textarea: string
  requerimientos:boolean
  ingles: boolean
  beneficios : boolean
  acuerdo :boolean

}

interface Props{
  children: ReactNode
}


export interface FormState {
  inputValues: User;
}
export interface FormProps {
  onNewUser: React.Dispatch<React.SetStateAction<Array<User>>>;
}
 export interface FormJob{
  inputValues: Job
 }
// export interface INITIAL_FORM{
//   values:Job
// }

export type UserContextType={
signUp:Array<User>,
user:Array<User>,
setUser:(value:Array<User>)=>void
}