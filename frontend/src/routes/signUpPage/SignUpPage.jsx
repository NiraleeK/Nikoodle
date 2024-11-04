import './signUpPage.css'
import { SignUp } from '@clerk/clerk-react'

const SignUppage = () => {
    return (< div className='signUpPage' >
        <SignUp path="/sign-up" signInUrl = "/sign-in" />
    </div>
    )
        
    

}

export default SignUppage;