import { Link } from "react-router-dom"
import dummyImage from "@/assets/dummy2-image.jpg"

function Dummy2() {
  return (
    <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center text-white gap-8 px-4">
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-green-300">
        Page Two
      </h1>
      <img
        src={dummyImage}
        alt="Dummy screen visual"
        className="w-full max-w-lg rounded-2xl shadow-2xl border border-white/10"
      />
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default Dummy2
