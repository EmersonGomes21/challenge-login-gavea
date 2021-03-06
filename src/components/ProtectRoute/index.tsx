import React, {  ReactChildren, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import api from 'utils/lib/api'

interface Props {
  children: JSX.Element[] | JSX.Element
}
const ProtectRoute =  ({ children } : Props) => {
  //verifica se está logado
  api.authStateListener()

  const router = useRouter()
  const [enabled, setEnabled] = useState(false)
  const [logado, setlogado] = useState<string | null>('')

  useEffect(() => {
    let logado = window.localStorage.getItem('@gavea-logado')
    setlogado(logado)
    if (!logado) {
      router.push('/signin')
    }
    setEnabled(true)
  }, [logado])

  if (logado && logado !== '') {
  if (enabled) return <> {children}</>
    else return <> </>
  } else return <> </>
}

export default ProtectRoute
