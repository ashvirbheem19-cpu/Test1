import { Link } from "react-router-dom"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"

function Home() {
  return (
    <div className="relative">
      <HeroGeometric
        badge="Evergreen Labs"
        title1="Build for Tomorrow"
        title2="Rooted in Excellence"
      />
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-6 px-4">
        <Link
          to="/dummy1"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-lg transition-all shadow-lg shadow-emerald-500/25"
        >
          Get Started
        </Link>
        <Link
          to="/dummy2"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 font-semibold text-lg transition-all"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default Home
