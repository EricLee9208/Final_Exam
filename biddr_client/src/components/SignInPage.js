import { Session } from "../requests";
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from "react"

function SignInPage(props) {
    const { onSignIn } = props
    const navigate = useNavigate()

    function handleSubmit(event){
        
        event.preventDefault()
        const {currentTarget} = event;
        const formData = new FormData(currentTarget)
        const params = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        Session.create(params).then(data => {
            if (data.id){
                onSignIn()
                navigate('/auctions')
            }
        })
    }

    return(
        <div style={{marginLeft:'25vw', textAlign:'center', width: '100vh'}}>
       <h1>Sign In</h1>
       <br/>
        <form onSubmit={handleSubmit}>
            <div class="mb-3" >
                    <label htmlFor='email' class="form-label"> Email</label>
                   <input type="text" name="email" class="form-control"/>
            </div>
            <div class="mb-3">
                    <label htmlFor='password' class="form-label"> Password</label>
                    <input type="text" name="password" class="form-control" />
            </div>
            <div class="mb-3">
                <input type="submit" value="Sign In" class="btn btn-secondary" style={{width: '100vh'}}/>
            </div>
            
        </form>
    </div> 
    )

}

export default SignInPage