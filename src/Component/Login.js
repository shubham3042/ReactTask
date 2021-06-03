import React from 'react'
import Header from './Header';
import {Link} from 'react-router-dom';
function Login() {
    return (
        <div className="wrapper Grofoo-home">
        <Header /> 
        <div class="login_bg">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 login">
                           <div class="col-sm-6  text-center login_left">
                                <i class="ion-person login_icon"></i>
                                <span class="login_text">First Time?</span>
                                <span class="login_text">Create an account to make future <br />purchases easier.</span>
                               <Link to="/register"><p class="btn btn-action btn-gplus wow fadeInDown nomargin" data-wow-delay="0.3s" style={{visibility:'visible',animationDelay:"0.3s",animationName:'facedown'}}>
                                    <span>
                                        <i class="ion-person-stalker"></i>
                                    </span>
                                    <span>Create Account</span>
                                </p>
                                </Link>
                            </div>
                            <div class="col-sm-6 text-center login_form">
                                <p class="l_f_title">First time?</p>
                                <p class="wow fadeInDown l_f_subtext nomargin" data-wow-delay="0.2s">It only takes a minute to login with indexfing.</p>
                                <div class="subform wow fadeInDown " data-wow-delay="0.3s">
                                    <form id="signup" class="formee" action="submit" method="post">
                                        <input name="email" id="email" type="text" placeholder="Email" />
                                        <div class="form_error" style={{display:'none'}}> This field is required</div>
                                        <input name="password" id="password" type="password" placeholder="Password" />
                                    </form>
                                    <a href="search_list_new.html" class="btn btn-action btn-gplus wow fadeInDown" data-wow-delay="0.3s">
                                        <span>
                                            <i class="ion-person-stalker"></i>
                                        </span>
                                        <span>Login</span>
                                    </a>

                                    <span class="l_f_or">or</span>

                                    <div class="f_password">
                                        <a href="forget_password.html">Forgot password? </a>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Login
