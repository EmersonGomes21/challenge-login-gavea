import Login from 'components/Login'
import useAuth from './../utils/hooks/useAuth'

export default function SigIn() {

  interface PropsUser {

      user:  {
        uid?: string
        email?: string
        name?: string
        token?: string
        provider?: string
        photoUrl?: string
       },
       signin : () => void;


  }
  const { user , signin } = useAuth();
  console.log('user', user);
  return (
    <>
     <Login signin = {signin} />


     </>
  )
}
