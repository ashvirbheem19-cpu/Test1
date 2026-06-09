import { Link } from "react-router-dom"

function Dummy1() {
  return (
    <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center text-white gap-8 px-4">
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-green-300">
        Page One
      </h1>
      <p className="text-white/60 text-lg max-w-md text-center">
        This is the first dummy screen. Minimal content for testing.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default Dummy1
