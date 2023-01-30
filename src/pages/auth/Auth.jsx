import { Toaster } from 'react-hot-toast'
import Layout from '../../components/layout/Layout'
import Login from '../../components/Login/Login'
import './auth.css'

const Auth = () => {
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