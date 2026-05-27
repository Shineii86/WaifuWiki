import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Heart, ArrowLeft } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center animated-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb w-64 h-64 bg-primary/10 top-1/4 left-1/4" />
        <div className="orb w-48 h-48 bg-secondary/10 bottom-1/4 right-1/4" style={{ animationDelay: "-8s" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center space-y-6 px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Heart className="w-20 h-20 text-muted/50 mx-auto" />
        </motion.div>

        <h1 className="font-display text-6xl sm:text-8xl font-extrabold gradient-text">404</h1>

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-muted-foreground">
          This waifu doesn't exist... yet!
        </h2>

        <p className="text-sm text-muted-foreground/70 max-w-md mx-auto font-body leading-relaxed">
          The page you're looking for might have been moved, deleted, or never existed.
          Don't worry — there are plenty of other characters to discover!
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium font-body hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
