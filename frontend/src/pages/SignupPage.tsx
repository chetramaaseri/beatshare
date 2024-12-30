import { SignUp } from "@clerk/clerk-react";

function SignupPage(){
    return (
        <div className="flex justify-center p-5">
            <SignUp/>
        </div>
    )
}

export default SignupPage;