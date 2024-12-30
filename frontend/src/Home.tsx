import Footer from "./components/footer";
import TopNav from "./components/topnav";

export default function Home() {
  const rooms = [
    {
      "roomName" : "this-is-room",
      "isPublic" : true,
      "audience" : 10
    },
    {
      "roomName" : "this-is-room",
      "isPublic" : true,
      "audience" : 10
    },
    {
      "roomName" : "this-is-room",
      "isPublic" : true,
      "audience" : 10
    },
    {
      "roomName" : "this-is-room",
      "isPublic" : true,
      "audience" : 10
    },
    {
      "roomName" : "this-is-room",
      "isPublic" : true,
      "audience" : 10
    },
    {
      "roomName" : "this-is-room",
      "isPublic" : true,
      "audience" : 10
    },
  ];
  return (
    <>
      <main className="relative">
        <TopNav />
        <div className="relative flex flex-col h-screen container px-3">
          <div className="absolute top-0 bottom-0 mx-auto left-1/2 transform -translate-x-1/2 w-full max-w-screen z-[-1]">
            <img height={100} width={100} src={"https://www.letsjive.io/images/marketing/home-shapes-tablet.svg"} className="hidden sm:block w-full h-full object-cover object-top" alt="background icons" />
          </div>
          <div className="flex-grow flex justify-center items-center flex-col gap-10">
            <h1 className="max-w-screen-sm font-bold text-4xl sm:text-5xl md:text-6xl text-center">
              Bring People Together, <br /> One Track at a Time
            </h1>
            <p className="max-w-screen-md px-3 md:px-0 text-center text-xl md:text-2xl">Say goodbye to awkward pauses and playlist confusion. Beatshare lets you seamlessly share and control the music, keeping the vibe flowing and everyone in sync—without missing a beat.</p>
            <button className="px-4 py-2 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-slate-400 active:bg-orange-900">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center container px-3 pb-20 bg-white/5 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm">
          <h2 className="my-5 mb-10 text-foreground text-3xl font-bold">Explore Rooms</h2>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse border border-gray-300">
              <thead className="text-xs text-orange-500 uppercase">
                <tr>
                  <th scope="col" className="border border-gray-300 px-6 py-3">Room Name</th>
                  <th scope="col" className="border border-gray-300 px-6 py-3">Is Public</th>
                  <th scope="col" className="border border-gray-300 px-6 py-3">Audience</th>
                  <th scope="col" className="border border-gray-300 px-6 py-3">Join Room</th>
                </tr>
              </thead>
              <tbody>
                {
                  rooms.map((room,index) => (
                    <tr key={room.roomName + index} className=" dark:border-gray-700">
                      <td scope="row" className="border border-gray-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {room.roomName.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase())}
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        {
                          room.isPublic ? 
                          <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                          </svg>
                          : <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                        }
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        {room.audience}
                      </td>
                      <td className="border border-gray-300 px-6 py-4">
                        <button className="py-2 px-10 border-2 border-orange-800 rounded-full bg-transparent hover:bg-orange-800 text-foreground transition duration-300 focus:ring-orange-800">
                          Join Room
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <Footer/>
      </main>
    </>
  );
}