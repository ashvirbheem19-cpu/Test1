import { Link } from "react-router-dom"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"

function Home() {
  return (
    <div className="relative">
      <HeroGeometric
        badge="Evergreen Labs"
        title1="Build for Tomorrow"
        title2="Rooted in Excellence"
      />

      <Link
        to="/dummy1"
        className="fixed left-4 top-1/2 -translate-y-1/2 z-30 inline-flex items-center gap-2 px-6 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-lg transition-all shadow-lg shadow-emerald-500/25"
      >
        <ArrowLeft className="h-5 w-5" />
        Get Started
      </Link>

      <Link
        to="/dummy2"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-30 inline-flex items-center gap-2 px-6 py-4 rounded-full border border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 font-semibold text-lg transition-all"
      >
        Learn More
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  )
}

export default Home
