import React from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import {auth, signInWithGoogle} from '../../firebase/firebase.util'



import './sign-in.scss'

class SignIn extends React.Component {
    constructor () {
        super() 

        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target

        this.setState({[name]:value})

    }
    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        } catch (error) {
            console.error(error)
        }

        
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Already have an account</h2>
                <h3>Sign in with your email</h3>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='Email'
                        required />
                  
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Password'
                        required />
                   
                    <div className='buttons'>
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with google</CustomButton>
                    </div>
                     
                </form>
            
            </div>

        )

    }

}

export default SignIn
