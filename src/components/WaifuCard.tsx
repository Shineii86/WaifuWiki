import { motion } from "framer-motion"
import { Star, Heart, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface Waifu {
  slug: string
  name: string
  source: string
  type: string
  image: string
  rating: number
  tags: string[]
  traits: string[]
}

interface WaifuCardProps {
  waifu: Waifu
  index: number
}

export default function WaifuCard({ waifu, index }: WaifuCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 10 }, (_, i) => (
      <Star key={i} className={`w-3 h-3 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-white/10"}`} />
    ))
  }

  const typeColors: Record<string, { bg: string; text: string; border: string }> = {
    Anime: { bg: "bg-pink-500/15", text: "text-pink-300", border: "border-pink-500/25" },
    Manhwa: { bg: "bg-blue-500/15", text: "text-blue-300", border: "border-blue-500/25" },
    "Webtoon/Manhwa": { bg: "bg-emerald-500/15", text: "text-emerald-300", border: "border-emerald-500/25" },
  }

  const typeStyle = typeColors[waifu.type] || typeColors.Anime

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/waifu/${waifu.slug}`}>
        <div className="group relative bg-card border border-border rounded-2xl overflow-hidden card-lift cursor-pointer">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={waifu.image}
              alt={waifu.name}
              className="w-full h-full object-cover img-zoom"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

            <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-medium ${typeStyle.bg} ${typeStyle.text} border ${typeStyle.border} backdrop-blur-sm font-body`}>
              {waifu.type}
            </div>

            <motion.div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" whileHover={{ scale: 1.2 }}>
              <div className="p-2 rounded-full bg-black/40 backdrop-blur-sm">
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
              </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
              <p className="text-[11px] text-white/60 font-body line-clamp-1">{waifu.source}</p>
              <h3 className="font-display text-lg font-bold text-white group-hover:text-pink-300 transition-colors duration-300 line-clamp-1">
                {waifu.name}
              </h3>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center gap-1.5">
              <div className="flex">{renderStars(waifu.rating)}</div>
              <span className="text-[11px] text-muted-foreground ml-1 font-body">{waifu.rating}/10</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {waifu.traits.slice(0, 3).map((trait) => (
                <span key={trait} className="px-2 py-0.5 text-[11px] rounded-md bg-white/[0.05] text-muted-foreground border border-white/[0.06] font-body">
                  {trait}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-1">
              {waifu.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="tag-pill">#{tag}</span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
              <span className="text-[11px] text-muted-foreground font-body">View Profile</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-pink-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
