import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Heart, Search, Home, Menu, X } from "lucide-react"
import { useState } from "react"

interface NavbarProps {
  searchQuery?: string
  onSearchChange?: (query: string) => void
  showSearch?: boolean
}

export default function Navbar({ searchQuery = "", onSearchChange, showSearch = true }: NavbarProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Heart className="w-7 h-7 text-pink-500 fill-pink-500 heartbeat" />
            </motion.div>
            <span className="font-display text-xl font-bold tracking-tight gradient-text">
              WaifuWiki
            </span>
          </Link>

          {showSearch && onSearchChange && (
            <div className="hidden sm:flex flex-1 max-w-sm mx-8">
              <div className={`relative w-full transition-all duration-300 ${isFocused ? "scale-[1.02]" : ""}`}>
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search waifus..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="w-full pl-10 pr-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all font-body"
                />
              </div>
            </div>
          )}

          <nav className="hidden sm:flex items-center gap-1">
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.05] transition-all font-body"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 rounded-lg hover:bg-white/[0.05] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="sm:hidden pb-4 space-y-3"
          >
            {showSearch && onSearchChange && (
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search waifus..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all font-body"
                />
              </div>
            )}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.05] transition-all font-body"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
