import { SignIn } from "@clerk/clerk-react";
import { Link } from "react-router";
import Logo from "../components/logo";

function SignInPage(){
    return (
        <>
            <div className="bg-background py-2 px-5 flex items-center justify-between">
                <Link to="/" className="brand"><Logo/></Link>
            </div>
            <div className="flex justify-center p-5">
                <SignIn/>
            </div>
        </>
    )
}

export default SignInPage;