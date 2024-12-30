import CreateRoomForm from "../components/createRoomForm";
import Footer from "../components/footer";
import TopNav from "../components/topnav";

function CreateRoomPage() {

  return (
    <>
      <div className="container mx-auto">
        <TopNav />
        <main className="flex lg:grid lg:grid-cols-3 gap-4 h-screen flex-grow">
          <div className="relative hidden lg:block">
            <div className="absolute top-0 bottom-0 mx-auto left-1/2 transform -translate-x-1/2 w-full max-w-screen z-[-1]">
              <img height={100} width={100} src={"https://www.letsjive.io/images/shapes/jive-shapes-left.svg"} className="w-full h-full object-cover object-top" alt="background icons" />
            </div>
          </div>
          <div className="flex flex-col m-4 p-4 md:pt-10">
            <h1 className="max-w-screen-sm font-bold text-2xl md:text-4xl text-center mb-5">Collaborate, Create,<br/>& Stream Music Together</h1>
            <p className="max-w-screen-sm text-sm text-center mb-2">Transform your space into a hub of creativity and rhythm. With Beatshare, design your perfect Beat Room where ideas flow freely, music unites, and every beat brings people closer together.</p>
            <CreateRoomForm />
            <div className="fixed bottom-0 left-0 right-0 ">
              <Footer />
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute top-0 bottom-0 mx-auto left-1/2 transform -translate-x-1/2 w-full max-w-screen z-[-1]">
              <img height={100} width={100} src={"https://www.letsjive.io/images/shapes/jive-shapes-right.svg"} className="w-full h-full object-cover object-top" alt="background icons" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default CreateRoomPage;