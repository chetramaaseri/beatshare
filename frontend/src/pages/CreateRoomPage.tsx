import CreateRoomForm from "../components/createRoomForm";
import Footer from "../components/footer";
import TopNav from "../components/topnav";

function CreateRoomPage() {

  return (
    <>
      <div className="flex flex-col h-screen container">
        <TopNav />
        <main className="grid grid-cols-3 gap-4 flex-grow">
          <div className="relative">
            <div className="absolute top-0 bottom-0 mx-auto left-1/2 transform -translate-x-1/2 w-full max-w-screen z-[-1]">
                <img height={100} width={100} src={"https://www.letsjive.io/images/shapes/jive-shapes-left.svg"} className="hidden sm:block w-full h-full object-cover object-top" alt="background icons"/>
            </div>
          </div>
          {/* <div className="flex flex-col gap-5 bg-white/5 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm m-4 p-4"> */}
          <div className="flex flex-col m-4 p-4">
            <h1 className="max-w-screen-sm font-bold text-2xl md:text-4xl text-center mb-5">Collaborate, Create,<br/>& Stream Music Together</h1>
            <p className="max-w-screen-sm text-sm text-center mb-2">Transform your space into a hub of creativity and rhythm. With Beatshare, design your perfect Beat Room where ideas flow freely, music unites, and every beat brings people closer together.</p>
            <CreateRoomForm/>
            <div className="fixed bottom-0 left-0 right-0 ">
              <Footer/>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 bottom-0 mx-auto left-1/2 transform -translate-x-1/2 w-full max-w-screen z-[-1]">
                <img height={100} width={100} src={"https://www.letsjive.io/images/shapes/jive-shapes-right.svg"} className="hidden sm:block w-full h-full object-cover object-top" alt="background icons"/>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default CreateRoomPage;