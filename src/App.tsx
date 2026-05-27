import { Routes, Route } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import WaifuPage from "@/pages/WaifuPage"
import NotFoundPage from "@/pages/NotFoundPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/waifu/:slug" element={<WaifuPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
