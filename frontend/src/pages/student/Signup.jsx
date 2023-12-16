import React, { useContext, useState } from 'react'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { Register } from '../../EXtras/PostFunctions'
import AuthContext from '../../context/AuthContext'
import { DisplayLoader } from '../../EXtras/DislayLoader'
const Signup = () => {
  const navigate = useNavigate()
  const { SERVER_URL, setEmail, setPassword } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPassword2, setNewPassword2] = useState('')
  const [accountType, setAccountType] = useState('')



  let Logo = <svg xmlns="http://www.w3.org/2000/svg" width="100" height="56.66" viewBox="0 0 166 56.66">
    <g id="Group_1" data-name="Group 1" transform="translate(-319 -174.34)">
      <text id="E-BROCKER" transform="translate(376 216)" fill="#000" font-size="20" font-family="SegoeUI-Semibold, Segoe UI" font-weight="600"><tspan x="0" y="0">E-BROCKER</tspan></text>
      <path id="house" d="M52.474,23.284a2.944,2.944,0,0,1-2.916,2.925H46.642l.064,14.6a6.687,6.687,0,0,1-.046.738v1.467a3.644,3.644,0,0,1-3.645,3.645H41.556c-.1,0-.2,0-.3-.009-.128.009-.255.009-.383.009H35.724a3.644,3.644,0,0,1-3.645-3.645v-8.02a2.913,2.913,0,0,0-2.916-2.916H23.33a2.913,2.913,0,0,0-2.916,2.916v8.02a3.644,3.644,0,0,1-3.645,3.645H11.674c-.137,0-.273-.009-.41-.018-.109.009-.219.018-.328.018H9.478a3.644,3.644,0,0,1-3.645-3.645V32.808a2.388,2.388,0,0,1,.009-.255V26.21H2.916A2.881,2.881,0,0,1,0,23.284,2.962,2.962,0,0,1,.911,21.1L24.278.729a2.629,2.629,0,0,1,2-.729A3.027,3.027,0,0,1,28.2.638L51.472,21.1A2.5,2.5,0,0,1,52.474,23.284Z" transform="translate(319 174.34)" fill="#000" />
      <rect id="Rectangle_1" data-name="Rectangle 1" width="162" height="5" rx="2.5" transform="translate(323 226)" fill="#000" />
    </g>
  </svg>



  return (
    <>
    {
      loading ? DisplayLoader():<div className='fullpage d-flex align-items-center  justify-content-center'>
      <div className="py-4 login-container px-5 custom-shadow-left d-flex flex-column">
        <span style={{ alignSelf: 'center' }}>{Logo}</span>
        <Input label={'Email'} inputType={'email'} placeholder={'enter your email'} value={newEmail} setter={setNewEmail} />
        <Input label={'password'} inputType={'password'} placeholder={'enter your password'} value={newPassword} setter={setNewPassword} />
        <Input label={'Confirm password'} inputType={'password'} placeholder={'enter your password again'} value={newPassword2} setter={setNewPassword2} />
        <select name="" id="" className='bg-none form-control' onChange={(e) => setAccountType(e.target.value)}>
          <option value="">Select account type</option>
          <option value="student">student</option>
          <option value="manager">manager</option>
        </select>
        <button className="btn btn-dark w-100 my-4" onClick={() => Register(setLoading, SERVER_URL, setEmail, setPassword, newEmail, newPassword, navigate, accountType, newPassword2)}>
          Sign up
        </button>
        <Link className='text-center nav-link' to={'/'}><small><u className="text-primary">Sign in</u> if you already have an account</small></Link>
      </div>
    </div>
    }
    </>
  )
}

export default Signup
