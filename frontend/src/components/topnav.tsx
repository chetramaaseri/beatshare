import Logo from "./logo";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router";

function TopNav() {
    const { user, isLoaded } = useUser()
    const [topNavToggle,setTopNavToggle] = useState(false);
    return (
        <div className="bg-background py-2 px-5 flex items-center justify-between">
            <Link to="/" className="brand"><Logo/></Link>
            <ul className="hidden md:flex items-center gap-5">
                <li className="text-foreground font-bold hover:text-orange-700 hover:underline underline-offset-8 transition ease-in-out delay-100"><Link to="/">Home</Link></li>
                <SignedIn>
                    <li className="text-foreground font-bold hover:text-orange-700 hover:underline underline-offset-8 transition ease-in-out delay-100"><Link to="/create-room">Create Room</Link></li>
                    <li className="text-foreground font-bold hover:text-orange-700 hover:underline underline-offset-8 transition ease-in-out delay-100"><Link to="/join-room">Join Room</Link></li>
                    {
                        isLoaded && 
                        <li className="text-foreground p-2 text-start font-bold hover:text-orange-700 hover:underline underline-offset-8 transition ease-in-out delay-100"><div className="flex items-center gap-4">{user?.username} <UserButton /></div></li>
                    }
                </SignedIn>
                <SignedOut>
                    <li className="text-foreground font-bold hover:text-orange-700 hover:underline underline-offset-8 transition ease-in-out delay-100"><Link to="/sign-in">Sign In</Link></li>
                </SignedOut>
            </ul>
            <button onClick={()=>setTopNavToggle(!topNavToggle)} className="block md:hidden p-2">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className={`absolute top-0 left-0 z-10 w-full h-screen bg-white/20 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-white/30 transform transition-transform duration-300 ease-in-out ${
                topNavToggle ? "translate-x-0" : "-translate-x-full"
            }`}>
                <div className="py-2 px-5 flex items-center justify-between">
                    <Link to="/" className="brand"><Logo/></Link>
                    <button onClick={()=>setTopNavToggle(!topNavToggle)} className="p-2">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                        </svg>
                    </button>
                </div>
                <ul className="flex justify-start items-start flex-col ps-5">
                    <li className="text-foreground p-2 text-start font-bold hover:text-orange-700 hover:underline underline-offset-8 transition ease-in-out delay-100"><Link to="/">Home</Link></li>
                    <SignedIn>
                        <li className="text-foreground p-2 text-start font-bold hover:text-orange-700 hover:underline underline-offset-8 transition ease-in-out delay-100"><Link to="/create-room">Create Room</Link></li>
                        <li className="text-foreground p-2 text-start font-bold hover:text-orange-700 hover:underline underline-offset-8 transition ease-in-out delay-100"><Link to="/join-room">Join Room</Link></li>
                        {
                            isLoaded && 
                            <li className="text-foreground p-2 text-start font-bold hover:text-orange-700 hover:underline underline-offset-8 transition ease-in-out delay-100"><div className="flex items-center gap-4">{user?.username} <UserButton /></div></li>
                        }
                    </SignedIn>
                    <SignedOut>
                        <li className="text-foreground p-2 text-start font-bold hover:text-orange-700 hover:underline underline-offset-8 transition ease-in-out delay-100"><Link to="/sign-in">Sign In</Link></li>
                    </SignedOut>
                </ul>
            </div> 
        </div>
    )
}

export default TopNav;