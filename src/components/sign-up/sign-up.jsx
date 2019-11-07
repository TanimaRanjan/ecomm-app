import React from 'react' 

import './sign-up.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import {auth,createUserProfileDocument} from '../../firebase/firebase.util'

class SignUp extends React.Component {

    constructor() {
        super()
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert('Passwords dont match')
            return;
        } 

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState( {
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })

        } catch (error) {
            console.error(error)
        }

    }

    handleChange = (event) =>  {
        const {name, value} = event.target

        this.setState({[name]:value})
    }

    render() {

        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2>Do not have an account</h2> 
                <h3>Sign up with email and password</h3> 
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput 
                    type="text" 
                    name="displayName" 
                    value={displayName} 
                    handleChange={this.handleChange}
                    label='Display Name'
                    required />
            
                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={this.handleChange}
                    label='Email'
                    required />

                <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    handleChange={this.handleChange}
                    label='Password'
                    required />

                <FormInput 
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    handleChange={this.handleChange}
                    label='Confirm Password'
                    required />

                <div className='buttons'>
                    <CustomButton type="submit" >Sign Up</CustomButton>
                </div>
                
            </form>
            </div>
        )
    }
}

export default SignUp;