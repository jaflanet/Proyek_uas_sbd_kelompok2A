import React from 'react'
import FMLogo from "../../assets/LoginAsset/Component_1.png"
import "./index.css"

const Login = ({setLogin}) => {
    return (
        <><div className="Container">
            <div className="Wrapper">
            <div class="split left">
                <div class="centered">
                    <span className="LOGO_FM">
                    <img src={FMLogo} alt ="gambar logo"   className="LOGO_FM"/>
                    </span>
                    <span className="InfoText">
                        FINDMATES is an online third party website dedicated<br />
                        to help gamers find teamates, and maybe a soulmate too.
                    </span>
                </div>
            </div>
            <div class="split right">
                <div class="centered2">
                    <div className="LoginPop">
                        <h1>SIGN IN</h1>
                        <form method="post">
                            <div class="txt_field">
                                <input type="text" required />
                                <label>USERNAME</label>
                            </div>
                            <div class="txt_field">
                                <input type="password" required />
                                <label>PASSWORD</label> 
                            </div>
                            <div class="pass">Don't have an account?</div>
                            <div className="submitButton">
                                <input type="image" src="https://i.ibb.co/M8bpJzM/Component-2.png" alt="submit"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="aboutUs">
                about us
            </div>
            </div>
        </div>
        </>
    )
}

export default Login;
