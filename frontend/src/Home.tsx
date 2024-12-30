import Footer from "./components/footer";
import TopNav from "./components/topnav";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <TopNav />
        <div className="absolute top-0 bottom-0 left-0 right-0 z-[-1]">
          <img src={"https://www.letsjive.io/images/marketing/home-shapes-full.svg"} className="hidden sm:block w-full h-full object-cover object-top" alt="background icons" />
        </div>
        <div className="flex flex-col py-10 sm:py-2 justify-start sm:justify-center items-center gap-10 sm:h-screen">
          <h1 className="max-w-screen-sm font-bold text-4xl sm:text-5xl md:text-6xl text-center">
            Bring People Together, <br /> One Track at a Time
          </h1>
          <p className="max-w-screen-md px-3 md:px-0 text-center text-xl md:text-2xl">Say goodbye to awkward pauses and playlist confusion. Beatshare lets you seamlessly share and control the music, keeping the vibe flowing and everyone in sync—without missing a beat.</p>
          <button className="px-4 py-2 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-slate-400 active:bg-orange-900">
            Get Started
          </button>
          <Footer/>
        </div>
      </div>
    </>
  )
}