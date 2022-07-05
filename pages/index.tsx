import { useUser } from '~/services/supabase'
import * as React from 'react'
import Home from '~/screens/Home'
import Landing from '~/screens/Landing'

const Index = () => {
  const { user, error } = useUser()

  return user ? <Home /> : <Landing />
}

export default Index