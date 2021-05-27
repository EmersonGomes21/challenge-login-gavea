import useAuth from './../utils/hooks/useAuth';

export default function Home() {
  const {user, signin}  =  useAuth();
  console.log('user', user);

  return (
    <div>
    <h1>Home</h1>
    <button onClick={() => signin()}> Entrar com github</button>
    </div>
  )
}
