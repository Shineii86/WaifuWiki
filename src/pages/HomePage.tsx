import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Heart, Sparkles, TrendingUp, Users, Star } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WaifuCard from "@/components/WaifuCard"
import FilterBar from "@/components/FilterBar"
import waifusData from "@/data/waifus.json"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedTag, setSelectedTag] = useState("All")
  const [sortBy, setSortBy] = useState("rating")

  const allTypes = useMemo(() => {
    const types = new Set(waifusData.map((w) => w.type))
    return ["All", ...Array.from(types).sort()]
  }, [])

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    waifusData.forEach((w) => w.tags.forEach((t) => tags.add(t)))
    return Array.from(tags).sort()
  }, [])

  const filteredWaifus = useMemo(() => {
    let filtered = waifusData.filter((waifu) => {
      const matchesSearch = searchQuery === "" ||
        waifu.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        waifu.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
        waifu.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesType = selectedType === "All" || waifu.type === selectedType
      const matchesTag = selectedTag === "All" || waifu.tags.includes(selectedTag)
      return matchesSearch && matchesType && matchesTag
    })

    switch (sortBy) {
      case "rating": filtered.sort((a, b) => b.rating - a.rating); break
      case "name": filtered.sort((a, b) => a.name.localeCompare(b.name)); break
      case "name-desc": filtered.sort((a, b) => b.name.localeCompare(a.name)); break
      case "type": filtered.sort((a, b) => a.type.localeCompare(b.type)); break
    }
    return filtered
  }, [searchQuery, selectedType, selectedTag, sortBy])

  const stats = useMemo(() => {
    const total = waifusData.length
    const anime = waifusData.filter((w) => w.type === "Anime").length
    const manhwa = waifusData.filter((w) => w.type === "Manhwa" || w.type === "Webtoon/Manhwa").length
    const avgRating = (waifusData.reduce((sum, w) => sum + w.rating, 0) / total).toFixed(1)
    return { total, anime, manhwa, avgRating }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} showSearch={true} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="orb w-72 h-72 bg-primary/10 top-10 left-[10%]" />
            <div className="orb w-96 h-96 bg-secondary/8 bottom-10 right-[10%]" style={{ animationDelay: "-7s" }} />
            <div className="orb w-48 h-48 bg-accent/10 top-1/2 left-1/2 -translate-x-1/2" style={{ animationDelay: "-14s" }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-center space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-pink-300 text-sm font-body"
              >
                <Sparkles className="w-4 h-4" /> Your Personal Waifu Collection <Sparkles className="w-4 h-4" />
              </motion.div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                Welcome to <span className="gradient-text">WaifuWiki</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
                A curated encyclopedia of beloved characters from anime, manhwa, and webtoons.
                Discover detailed profiles, ratings, and more.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap justify-center gap-3 sm:gap-5 pt-6"
              >
                <StatCard icon={<Users className="w-5 h-5 text-primary" />} value={stats.total} label="Characters" />
                <StatCard icon={<Heart className="w-5 h-5 text-pink-400 fill-pink-400" />} value={stats.anime} label="Anime" />
                <StatCard icon={<TrendingUp className="w-5 h-5 text-blue-400" />} value={stats.manhwa} label="Manhwa" />
                <StatCard icon={<Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />} value={stats.avgRating} label="Avg Rating" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Collection Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <FilterBar
              selectedType={selectedType} onTypeChange={setSelectedType}
              selectedTag={selectedTag} onTagChange={setSelectedTag}
              sortBy={sortBy} onSortChange={setSortBy}
              allTags={allTags} allTypes={allTypes} resultCount={filteredWaifus.length}
            />

            <div className="section-divider" />

            {filteredWaifus.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWaifus.map((waifu, index) => (
                  <WaifuCard key={waifu.slug} waifu={waifu} index={index} />
                ))}
              </div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <Heart className="w-12 h-12 text-muted mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-muted-foreground mb-2">No characters found</h3>
                <p className="text-sm text-muted-foreground font-body">Try adjusting your search or filters</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string | number; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border"
    >
      {icon}
      <div className="text-left">
        <p className="font-display text-lg font-bold">{value}</p>
        <p className="text-[11px] text-muted-foreground font-body">{label}</p>
      </div>
    </motion.div>
  )
}
