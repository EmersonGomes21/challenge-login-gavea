import Login from 'components/Login'
import useAuth from './../utils/hooks/useAuth'


export default function SigIn() {
  const { user, signin } = useAuth();

  console.log('user', user);
  return (
    <>
     <Login signin = {signin} />


     </>
  )
}
