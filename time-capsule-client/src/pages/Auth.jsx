import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/Auth'
import Login from '../components/Login'
import Signup from '../components/Signup'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Wrapper>
        <div className="auth-container">
            <div className={`auth-img ${isLogin ? "" : 'signup-mode-img'}`}>
                <h1>{isLogin ? "Welcome Back" : "Create your Account"}</h1>
                <p>{isLogin ? "Access your capsules and relive your preserved memories." : "Start preserving your memories for the future."}</p>
            </div>

            <div className={`auth-content ${isLogin ? "" : 'signup-mode-content'}`}>
                {
                    isLogin ? <Login isLogin = {isLogin} setIsLogin = {setIsLogin}  /> : <Signup  isLogin = {isLogin} setIsLogin = {setIsLogin} />
                }
            </div>
        </div>
    </Wrapper>
  )
}

export default Auth