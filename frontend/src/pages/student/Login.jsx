import React, { useContext } from 'react'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
const Login = () => {
    const {email, password , setEmail, setPassword, signin} = useContext(AuthContext)
    let Logo = <svg xmlns="http://www.w3.org/2000/svg" width="100" height="56.66" viewBox="0 0 166 56.66">
        <g id="Group_1" data-name="Group 1" transform="translate(-319 -174.34)">
            <text id="E-BROCKER" transform="translate(376 216)" fill="#000" font-size="20" font-family="SegoeUI-Semibold, Segoe UI" font-weight="600"><tspan x="0" y="0">E-BROCKER</tspan></text>
            <path id="house" d="M52.474,23.284a2.944,2.944,0,0,1-2.916,2.925H46.642l.064,14.6a6.687,6.687,0,0,1-.046.738v1.467a3.644,3.644,0,0,1-3.645,3.645H41.556c-.1,0-.2,0-.3-.009-.128.009-.255.009-.383.009H35.724a3.644,3.644,0,0,1-3.645-3.645v-8.02a2.913,2.913,0,0,0-2.916-2.916H23.33a2.913,2.913,0,0,0-2.916,2.916v8.02a3.644,3.644,0,0,1-3.645,3.645H11.674c-.137,0-.273-.009-.41-.018-.109.009-.219.018-.328.018H9.478a3.644,3.644,0,0,1-3.645-3.645V32.808a2.388,2.388,0,0,1,.009-.255V26.21H2.916A2.881,2.881,0,0,1,0,23.284,2.962,2.962,0,0,1,.911,21.1L24.278.729a2.629,2.629,0,0,1,2-.729A3.027,3.027,0,0,1,28.2.638L51.472,21.1A2.5,2.5,0,0,1,52.474,23.284Z" transform="translate(319 174.34)" fill="#000" />
            <rect id="Rectangle_1" data-name="Rectangle 1" width="162" height="5" rx="2.5" transform="translate(323 226)" fill="#000" />
        </g>
    </svg>
  return (
    <div className='fullpage d-flex align-items-center  justify-content-center'>
      <div className="py-4 login-container px-5 custom-shadow-left d-flex flex-column">
        <span style={{alignSelf: 'center'}}>{Logo}</span>
       <Input label={'Email'} inputType={'email'} placeholder={'enter your email'} value={email} setter={setEmail}/>
       <Input label={'password'} inputType={'password'} placeholder={'enter your password'} value={password} setter={setPassword}/>
        <button className="btn btn-dark w-100 mb-4" onClick={signin}>
            Log in
        </button>
      <Link className='text-center nav-link' to={'signup'}><small><u className="text-primary">Sign up</u> if you don't have an account</small></Link>
      </div>
    </div>
  )
}

export default Login
