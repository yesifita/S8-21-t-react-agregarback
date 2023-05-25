export interface User {
  // id:number
 email: string;
  password: string | number;
  // rol: string;
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

export type UserContextType={
signUp:Array<User>,
user:Array<User>,
setUser:(value:Array<User>)=>void
}