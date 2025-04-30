"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Menu, 
  Youtube, 
  Newspaper, 
  Mic, 
  Search, 
  Filter,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube as YoutubeIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

interface MediaItem {
  id: string
  title: string
  source: string
  date: string
  url: string
  thumbnail?: string
  type: string
}

interface MediaData {
  winnerAnnouncement: MediaItem
  interviews: MediaItem[]
  articles: MediaItem[]
  pressKit: MediaItem
}

// Sample media data - in a real app, this would come from an API or database
const mediaData: MediaData = {
  winnerAnnouncement: {
    id: "winner-video",
    title: "Ambio Wins XR Creator Hackathon 2025",
    source: "YouTube",
    date: "2025-04-15",
    url: "https://www.youtube.com/embed/3XLqCmPA_4s",
    thumbnail: "https://img.youtube.com/vi/example1/maxresdefault.jpg",
    type: "video"
  },
  interviews: [
    {
      id: "interview1",
      title: "Waves Summit 2025: સર્જકો માટેનું વૈશ્વિક પ્લેટફોર્મ | Aapna Mudda Aapni Vaat | 14-04-205",
      source: "YouTube",
      date: "2025-04-14",
      url: "https://www.youtube.com/embed/fLe6CNhlA48?rel=0&modestbranding=1&start=230",
      thumbnail: "https://img.youtube.com/vi/fLe6CNhlA48/maxresdefault.jpg",
      type: "video"
    },
    {
      id: "interview3",
      title: "PM मोदी ने सभी से Waves Summit में भाग लेने का आह्वान किया। Waves 2025",
      source: "YouTube",
      date: "2025-04-14",
      url: "https://www.youtube.com/embed/-gPFpS-LQlo?rel=0&modestbranding=1",
      thumbnail: "https://img.youtube.com/vi/-gPFpS-LQlo/maxresdefault.jpg",
      type: "video"
    }
  ],
  articles: [
    {
      id: "article1",
      title: "WAVES XR Creator Hackathon Winners Bring XR Innovation to Schools, Clinics, Homes, and Beyond",
      source: "PIB Press Release",
      date: "10 April 2025",
      url: "https://pib.gov.in/PressReleasePage.aspx?PRID=2120798",
      type: "article"
    },
    {
      id: "article2",
      title: "XR Creator winners transform the customer experience with immersive tech",
      source: "The Hindu",
      date: "April 09, 2025",
      url: "https://www.thehindu.com/news/national/xr-creator-winners-transform-the-customer-experience-with-immersive-tech/article69427943.ece",
      type: "article"
    },
    {
      id: "article3",
      title: "Ambio Team Interview - XR Creator Hackathon 2025",
      source: "YouTube",
      date: "2025-04-16",
      url: "https://www.youtube.com/embed/Q4wLvW_ZuUE?start=728",
      thumbnail: "https://img.youtube.com/vi/Q4wLvW_ZuUE/maxresdefault.jpg",
      type: "video"
    }
  ],
  pressKit: {
    id: "press-kit",
    title: "Ambio Press Kit",
    source: "Ambio",
    date: "2025-04-15",
    url: "https://drive.google.com/file/d/1Fy2McGmoJkCkukvZxZrEWDAbsUsARo5O/view?usp=sharing",
    type: "pdf"
  }
}

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function YouTubeCard({ videoUrl }: { videoUrl: string }) {
  const [videoData, setVideoData] = useState<{
    title: string
    thumbnail: string
    channelTitle: string
  } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const videoId = videoUrl.split('v=')[1]?.split('&')[0]
    if (!videoId) return

    // In a real app, you would use the YouTube Data API
    // For now, we'll simulate the data
    setLoading(true)
    setTimeout(() => {
      setVideoData({
        title: "Ambio Team Interview - XR Creator Hackathon 2025",
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        channelTitle: "Ambio"
      })
      setLoading(false)
    }, 500)
  }, [videoUrl])

  if (loading) {
    return (
      <motion.div
        className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="animate-pulse">
          <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </motion.div>
    )
  }

  if (!videoData) return null

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={videoData.thumbnail}
          alt={videoData.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <Youtube className="h-6 w-6 text-red-600" />
        <div>
          <h3 className="text-lg font-semibold text-[#6d4432] group-hover:text-[#f2a365] transition-colors">
            {videoData.title}
          </h3>
          <p className="text-sm text-gray-500">
            {videoData.channelTitle}
          </p>
        </div>
      </div>
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-medium text-[#6d4432] hover:text-[#f2a365] transition-colors"
      >
        Watch Video
        <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </motion.div>
  )
}

function MediaCoverageSection() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])

  useEffect(() => {
    // Separate videos and articles
    const videos = [
      ...mediaData.interviews,
      ...mediaData.articles.filter(item => item.type === "video")
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    const articles = mediaData.articles
      .filter(item => item.type === "article")
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    setMediaItems([...videos, ...articles])
  }, [])

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        {/* Winner Announcement Video Section */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-[#ebddd7] text-[#6d4432] hover:bg-[#ebddd7]/80 mb-2">Winner Announcement</Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d4432]">
            Watch Our Winning Moment
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Experience the excitement as Ambio is announced as the winner of XR Creator Hackathon 2025
          </p>
        </motion.div>

        <div className="relative aspect-video w-full max-w-4xl mx-auto mb-16 rounded-xl overflow-hidden shadow-xl">
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/3XLqCmPA_4s"
            title="Winners Ceremony - XR Creator Hackathon | WAVE Summit | MIB"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Media Coverage Section */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-[#ebddd7] text-[#6d4432] hover:bg-[#ebddd7]/80 mb-2">Media Coverage</Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d4432]">
            In the News
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
            See how our XR Creator Hackathon win has been covered across various media platforms
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mediaItems
            .filter(item => item.type === "video")
            .map((item) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src={item.url}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#6d4432] group-hover:text-[#f2a365] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.source} • {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto mt-16">
          {mediaItems
            .filter(item => item.type === "article")
            .map((item) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Newspaper className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#6d4432] group-hover:text-[#f2a365] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.source} • {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-[#6d4432] hover:text-[#f2a365] transition-colors mt-4"
                >
                  Read Article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </motion.div>
            ))}
        </div>

        {/* Press Kit Section */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-[#ebddd7] text-[#6d4432] hover:bg-[#ebddd7]/80 mb-2">Press Kit</Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d4432]">
            View Our Press Release
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Access our comprehensive press release for media coverage and additional information
          </p>
          <a
            href={mediaData.pressKit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#6d4432] text-white hover:bg-[#6d4432]/90 transition-colors"
          >
            View Press Release
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full border-t bg-background py-8 md:py-12">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-36">
              <Image
                src="/Ambio-logo.png"
                alt="Ambio Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-center text-sm text-gray-500 md:text-left">Connecting Creativity. Crafting Spaces.</p>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end md:justify-end">
          <div className="flex items-center gap-4">
            <Link href="https://www.instagram.com/theambio?igsh=MW8zdG5pa2NkaXpiYw%3D%3D" className="text-gray-500 hover:text-[#6d4432] transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://x.com/theambio" className="text-gray-500 hover:text-[#6d4432] transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://www.linkedin.com/showcase/theambio/posts/?feedView=all" className="text-gray-500 hover:text-[#6d4432] transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.youtube.com/@theambio" className="text-gray-500 hover:text-[#6d4432] transition-colors">
              <YoutubeIcon className="h-5 w-5" />
              <span className="sr-only">Youtube</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-500">emodevelopers@gmail.com</span>
          </div>
          <p className="text-center text-xs text-gray-500">Built with ❤️ by Team Ambio</p>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Ambio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function AchievementsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const teamImages = [
    {
      src: "/team1.jpg",
      alt: "Ambio Team at XR Creator Hackathon",
      caption: "Ambio Team",
      subcaption: "XR Creator Hackathon 2025"
    },
    {
      src: "/team2.jpg",
      alt: "Ambio Team Celebrating Victory",
      caption: "Ambio Team",
      subcaption: "RIDE Hackathon 2025"
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % teamImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + teamImages.length) % teamImages.length)
  }

  useEffect(() => { 
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={cn(
          "sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300",
          scrolled ? "bg-background/80 shadow-sm border-b" : "bg-transparent",
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-12 w-36">
                <Image
                  src="/Ambio-logo.png"
                  alt="Ambio Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </motion.div>

          <motion.nav
            className="hidden md:flex gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="/#about" className="text-sm font-medium hover:text-[#6d4432] transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f2a365] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#features" className="text-sm font-medium hover:text-[#6d4432] transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f2a365] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#testimonials" className="text-sm font-medium hover:text-[#6d4432] transition-colors relative group">
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f2a365] transition-all duration-300 group-hover:w-full"></span>
            </a>
            {/* <Link href="/team" className="text-sm font-medium hover:text-[#6d4432] transition-colors relative group">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f2a365] transition-all duration-300 group-hover:w-full"></span>
            </Link> */}
          </motion.nav>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/#waitlist">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-[#6d4432] text-[#6d4432] hover:bg-[#6d4432] hover:text-white transition-colors"
              >
                Join waitlist
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </motion.div>

          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b p-4 md:hidden">
              <nav className="flex flex-col space-y-4">
                <a
                  href="/#about"
                  className="text-sm font-medium hover:text-[#6d4432] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/#features"
                  className="text-sm font-medium hover:text-[#6d4432] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="/#testimonials"
                  className="text-sm font-medium hover:text-[#6d4432] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
                <Link
                  href="/team"
                  className="text-sm font-medium hover:text-[#6d4432] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
                <a
                  href="/#waitlist"
                  className="text-sm font-medium hover:text-[#6d4432] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Waitlist
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Logos Section */}
        <motion.div
          className="w-full py-8 bg-[#6d4432]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
                <div className="flex flex-col items-center">
                  <div className="relative h-24 w-48">
                    <a href="https://www.mib.gov.in/" target="_blank" rel="noopener noreferrer">
                    
                    <Image
                      src="/mib-logo.png"
                      alt="Ministry of Information and Broadcasting India"
                      fill
                      className="object-contain"
                      />
                    </a>                
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative h-24 w-48">
                    <a href="https://wavesindia.org/" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/waves2025-logo.png"
                      alt="WAVES 2025"
                      fill
                      className="object-contain"
                    />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative h-32 w-64">
                    <a href="https://wavelaps.com/xrcreatorhackathon/" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/xr-creator-logo.png"
                      alt="XR Creator Hackathon"
                      fill
                      className="object-contain"
                    />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <section className="relative w-full py-8 md:py-16 lg:py-24 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#ebddd7]/30 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-[#f2a365]/10 blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-[#6d4432]/10 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Badge className="bg-[#ebddd7] text-[#6d4432] hover:bg-[#ebddd7]/80 mb-2">Achievements</Badge>
              <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d4432]">
                XR Creator Hackathon 2025
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
                Winners in E-commerce & Retail Category
              </p>
            </motion.div>

            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-8 shadow-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#6d4432]">About the Hackathon</h3>
                    <p className="text-gray-600">
                    The XR Creator Hackathon 2025 is a nationwide initiative driving innovation in Extended Reality (XR) technologies. Organized by Wavelaps, XDG, and Bharat XR, in association with the Ministry of Information and Broadcasting, this event brings together creative minds from across India to shape the future of immersive technologies.
                    This hackathon is part of the broader World Audio Visual & Entertainment Summit (WAVES) 2025, a milestone event hosted by the Government of India. 
                    </p>
                    <p className="text-gray-600">
                      We are proud to announce that Ambio has been recognized as the winner in the E-commerce & Retail category, showcasing our innovative approach to interior design visualization using XR technologies.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-8 shadow-xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#6d4432]">Our Winning Solution</h3>
                    <p className="text-gray-600">
                    Ambio is an XR platform that revolutionizes how people design and experience spaces. It helps homeowners visualize furniture and plan home makeovers using AR, while offering designers and brands a space to showcase their work and connect with clients. Ambio aims to democratize interior design with immersive, interactive experiences, bringing users and professionals together. Its innovative approach was recognized at the WAVES 2025 Summit, where it was presented to global leaders.
                    </p>
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="relative h-24 w-24"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Image
                          src="/trophy.png"
                          alt="Trophy"
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                      <div>
                        <p className="text-sm font-medium text-[#6d4432]">E-commerce & Retail Category</p>
                        <p className="text-xs text-gray-500">XR Creator Hackathon 2024</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Team Images Carousel */}
              <motion.div
                className="mt-12 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-gray-200 shadow-xl">
                  <Image
                    src={teamImages[currentImageIndex].src}
                    alt={teamImages[currentImageIndex].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-medium">{teamImages[currentImageIndex].caption}</p>
                      <p className="text-xs">{teamImages[currentImageIndex].subcaption}</p>
                    </div>
                  </div>
                  
                  {/* Navigation Dots */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {teamImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-white/80" : "bg-white/40"
                        } hover:bg-white`}
                      />
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#6D4432" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="#6D4432" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </section>
        <MediaCoverageSection />
      </main>
      <Footer />
    </div>
  )
} 