import { motion } from "framer-motion"
import { Heart, Github, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="border-t border-white/[0.04] glass mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-pink-500 fill-pink-500 heartbeat" />
            <span className="font-display font-bold gradient-text text-lg">WaifuWiki</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-pink-400 transition-colors font-body">
              Home
            </Link>
            <a
              href="https://github.com/Shineii86/WaifuWiki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              <Github className="w-4 h-4" />
              Source
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground/60 font-body">
            Crafted with <Heart className="w-3 h-3 inline text-pink-500 fill-pink-500 heartbeat" /> by{" "}
            <a href="https://github.com/Shineii86" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pink-400 transition-colors">
              Shineii86
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
