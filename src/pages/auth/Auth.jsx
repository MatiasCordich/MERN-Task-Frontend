import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Login from '../../components/Login/Login'
import useAuth from '../../hooks/useAuth'
import './auth.css'

const Auth = () => {

  const { auth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (auth) {
      navigate('/')
    }
  }, [auth, navigate])
  
  return (
    <Layout>
      <div className='box'>
      <Toaster
              position="bottom-center"
              reverseOrder={false}
            />
        <Login/>
      </div>
    </Layout>
  )
}

export default Auth