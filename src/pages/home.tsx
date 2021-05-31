import HomeList from 'components/HomeList'
import { useEffect, useState } from 'react'
import api from 'utils/lib/api'
export default function Home() {
  const [pageEmpty, setPageEmpty] = useState(false)

  useEffect(() => {
    //Verifica se o usuario está autenticado e faz o redirecionamento
    const verificaUser = async () => {
      let res = await api.authStateListener('/home', '/')
       console.log('resposta', res);
      if (res == null) {
        setPageEmpty(false)
      }
    }

    verificaUser()
  }, [])


  if(pageEmpty){
    return <h1>Loading</h1>
  }
  else{
    return <HomeList />
  }
}
