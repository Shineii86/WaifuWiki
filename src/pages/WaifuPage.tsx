import { useParams, Link, Navigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Star, Heart, Calendar, Mic, BookOpen, ThumbsUp, ThumbsDown, Tag, Sparkles, Swords } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ImageGallery from "@/components/ImageGallery"
import waifusData from "@/data/waifus.json"

export default function WaifuPage() {
  const { slug } = useParams<{ slug: string }>()
  const waifu = waifusData.find((w) => w.slug === slug)

  if (!waifu) {
    return <Navigate to="/404" replace />
  }

  const typeColors: Record<string, { bg: string; text: string; border: string }> = {
    Anime: { bg: "bg-pink-500/15", text: "text-pink-300", border: "border-pink-500/25" },
    Manhwa: { bg: "bg-blue-500/15", text: "text-blue-300", border: "border-blue-500/25" },
    "Webtoon/Manhwa": { bg: "bg-emerald-500/15", text: "text-emerald-300", border: "border-emerald-500/25" },
  }

  const typeStyle = typeColors[waifu.type] || typeColors.Anime

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar showSearch={false} />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            <ArrowLeft className="w-4 h-4" /> Back to Collection
          </Link>
        </div>

        <section className="relative py-8 sm:py-12">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="orb w-96 h-96 bg-primary/5 top-0 left-1/4" />
            <div className="orb w-80 h-80 bg-secondary/5 bottom-0 right-1/4" style={{ animationDelay: "-10s" }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left: Image & Meta */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-1"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.08] glow-pink">
                  <img src={waifu.image} alt={waifu.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-medium ${typeStyle.bg} ${typeStyle.text} border ${typeStyle.border} backdrop-blur-sm font-body`}>
                    {waifu.type}
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <InfoCard
                    icon={<Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />}
                    label="Rating"
                  >
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 10 }, (_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < waifu.rating ? "text-yellow-400 fill-yellow-400" : "text-white/10"}`} />
                      ))}
                      <span className="ml-2 text-sm font-bold font-display text-yellow-400">{waifu.rating}/10</span>
                    </div>
                  </InfoCard>

                  <InfoCard icon={<Calendar className="w-5 h-5 text-pink-400" />} label="First Appearance">
                    <p className="text-sm font-medium font-body mt-1">{waifu.firstAppearance}</p>
                  </InfoCard>

                  {waifu.voiceActor && (
                    <InfoCard icon={<Mic className="w-5 h-5 text-secondary" />} label="Voice Actor">
                      <p className="text-sm font-medium font-body mt-1">{waifu.voiceActor}</p>
                    </InfoCard>
                  )}

                  <InfoCard icon={<BookOpen className="w-5 h-5 text-blue-400" />} label="Source">
                    <p className="text-sm font-medium font-body mt-1">{waifu.source}</p>
                  </InfoCard>
                </div>
              </motion.div>

              {/* Right: Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-2 space-y-8"
              >
                {/* Name & Source */}
                <div className="space-y-3">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight gradient-text"
                  >
                    {waifu.name}
                  </motion.h1>
                  <p className="text-lg text-muted-foreground font-body">
                    from <span className="text-foreground font-medium">{waifu.source}</span>
                  </p>
                </div>

                <div className="section-divider" />

                {/* About */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h2 className="font-display text-xl font-semibold">About</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-body">{waifu.description}</p>
                </motion.div>

                {/* Traits */}
                <TraitSection
                  icon={<Swords className="w-5 h-5 text-pink-400" />}
                  title="Traits"
                  items={waifu.traits}
                  delay={0.4}
                  colorClass="bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-300 border border-pink-500/20"
                />

                {/* Likes & Dislikes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <TraitSection
                    icon={<ThumbsUp className="w-5 h-5 text-green-400" />}
                    title="Likes"
                    items={waifu.likes}
                    delay={0.5}
                    colorClass="bg-green-500/10 text-green-300 border border-green-500/20"
                  />
                  <TraitSection
                    icon={<ThumbsDown className="w-5 h-5 text-red-400" />}
                    title="Dislikes"
                    items={waifu.dislikes}
                    delay={0.55}
                    colorClass="bg-red-500/10 text-red-300 border border-red-500/20"
                  />
                </div>

                {/* Tags */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-5 h-5 text-accent" />
                    <h2 className="font-display text-xl font-semibold">Tags</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {waifu.tags.map((tag) => (
                      <span key={tag} className="tag-pill font-body">#{tag}</span>
                    ))}
                  </div>
                </motion.div>

                {/* Gallery */}
                {waifu.images.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
                    <div className="section-divider mb-6" />
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      <h2 className="font-display text-xl font-semibold">Gallery</h2>
                    </div>
                    <ImageGallery images={waifu.images} name={waifu.name} />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function InfoCard({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
      {icon}
      <div>
        <p className="text-xs text-muted-foreground font-body">{label}</p>
        {children}
      </div>
    </div>
  )
}

function TraitSection({ icon, title, items, delay, colorClass }: { icon: React.ReactNode; title: string; items: string[]; delay: number; colorClass: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h2 className="font-display text-xl font-semibold">{title}</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + index * 0.05 }}
            className={`px-4 py-2 rounded-xl text-sm font-medium font-body ${colorClass}`}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
