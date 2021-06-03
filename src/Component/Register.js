import React from 'react'
import Header from '../Component/Header';
function Register() {
    return (
        <div className="wrapper Grofoo-home">
         <Header /> 
         <div class="login_bg">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2 login">


                            <div class="col-sm-6  text-center login_left">
                                <i class="ion-person login_icon"></i>
                                <span class="login_text">Already Registered?</span>
                                <span class="login_text">Sign In for quick Checkout.</span>
                                <a href="login.html" class="btn btn-action btn-gplus wow fadeInDown nomargin" data-wow-delay="0.3s" style={{visibility:'visible',animationDelay:"0.3s",animationName:'facedown'}}>
                                    <span>
                                        <i class="ion-person-stalker"></i>
                                    </span>
                                    <span>Have An Account?</span>
                                </a>
                            </div>
                            <div class="col-sm-6 text-center login_form">
                                <p class="l_f_title">Already Registered on indexfing?</p>
                                <p class="wow fadeInDown l_f_subtext nomargin" data-wow-delay="0.2s">It only takes a minute to register with indexfing.</p>
                                <div class="subform wow fadeInDown " data-wow-delay="0.3s">
                                    <form id="signup" class="formee" action="submit" method="post">
                                        <input name="email" id="email" type="text" placeholder="Email" />
                                        <div class="form_error"style={{display:'none'}}> This field is required</div>
                                        <input name="password" id="password" type="password" placeholder="Password" />
                                        <input name="password" id="password" type="password" placeholder="Password Again" />
                                    </form>
                                    <a href="#" class="btn btn-action btn-gplus wow fadeInDown" data-wow-delay="0.3s">
                                        <span>
                                            <i class="ion-person-stalker"></i>
                                        </span>
                                        <span>Register</span>
                                    </a>


                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
