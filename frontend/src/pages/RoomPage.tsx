import Footer from "../components/footer";
import JoinRoomForm from "../components/joinRoomForm";
import TopNav from "../components/topnav";

function RoomPage() {

    return (
        <>
            <div className="flex flex-col h-screen container">
                <TopNav />
                <main className="relative grid grid-cols-3 gap-4 flex-grow">
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-white/10 backdrop-blur-sm z-[-1]"></div>
                    <div className="relative">
                        <div className="absolute top-0 bottom-0 mx-auto left-1/2 transform -translate-x-1/2 w-full max-w-screen z-[-2]">
                            <img height={100} width={100} src={"https://www.letsjive.io/images/shapes/jive-shapes-left.svg"} className="hidden sm:block w-full h-full object-cover object-top" alt="background icons" />
                        </div>
                    </div>
                    <div className="flex flex-col m-4 p-4 z-3">
                        {/* page components here */}
                        <JoinRoomForm />
                        {/* page components here */}
                        <div className="fixed bottom-0 left-0 right-0 ">
                            <Footer />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute top-0 bottom-0 mx-auto left-1/2 transform -translate-x-1/2 w-full max-w-screen z-[-2]">
                            <img height={100} width={100} src={"https://www.letsjive.io/images/shapes/jive-shapes-right.svg"} className="hidden sm:block w-full h-full object-cover object-top" alt="background icons" />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default RoomPage;