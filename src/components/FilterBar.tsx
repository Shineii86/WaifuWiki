import { motion } from "framer-motion"
import { Filter, X, SlidersHorizontal, Tag } from "lucide-react"
import { useState } from "react"

interface FilterBarProps {
  selectedType: string
  onTypeChange: (type: string) => void
  selectedTag: string
  onTagChange: (tag: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
  allTags: string[]
  allTypes: string[]
  resultCount: number
}

export default function FilterBar({
  selectedType, onTypeChange, selectedTag, onTagChange,
  sortBy, onSortChange, allTags, allTypes, resultCount,
}: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false)
  const hasActiveFilters = selectedType !== "All" || selectedTag !== "All"

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-primary" />
          <div className="flex gap-1.5">
            {allTypes.map((type) => (
              <button key={type} onClick={() => onTypeChange(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium font-body transition-all duration-200 ${
                  selectedType === type
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20"
                    : "bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] hover:text-foreground border border-white/[0.06]"
                }`}>
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <SlidersHorizontal className="w-4 h-4 text-secondary" />
          <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}
            className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer font-body appearance-none">
            <option value="rating">Highest Rated</option>
            <option value="name">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="type">Type</option>
          </select>
        </div>

        {hasActiveFilters && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => { onTypeChange("All"); onTagChange("All") }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors border border-destructive/20 font-body"
          >
            <X className="w-3 h-3" /> Clear
          </motion.button>
        )}

        <button onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium font-body transition-all duration-200 ${
            showFilters
              ? "bg-accent/20 text-accent-foreground border border-accent/30"
              : "bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] border border-white/[0.06]"
          }`}>
          <Tag className="w-3.5 h-3.5" />
          Tags
          <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded-full">{allTags.length}</span>
        </button>
      </div>

      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]"
        >
          <button onClick={() => onTagChange("All")}
            className={`px-2.5 py-1 rounded-md text-xs font-body transition-all ${
              selectedTag === "All" ? "bg-secondary/30 text-secondary-foreground border border-secondary/40" : "bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] border border-white/[0.06]"
            }`}>
            All Tags
          </button>
          {allTags.map((tag) => (
            <button key={tag} onClick={() => onTagChange(tag === selectedTag ? "All" : tag)}
              className={`px-2.5 py-1 rounded-md text-xs font-body transition-all ${
                selectedTag === tag ? "bg-primary/30 text-primary-foreground border border-primary/40" : "bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] border border-white/[0.06]"
              }`}>
              #{tag}
            </button>
          ))}
        </motion.div>
      )}

      <p className="text-xs text-muted-foreground font-body">
        Showing <span className="text-primary font-medium">{resultCount}</span> character{resultCount !== 1 ? "s" : ""}
      </p>
    </motion.div>
  )
}
