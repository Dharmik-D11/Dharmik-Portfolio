import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import homeImg from "./assets/home.jpg";
import formImg from "./assets/form.jpg";
import inquiryImg from "./assets/inquiry.jpg";
import orderImg from "./assets/order.jpg";
import profileImg from "./assets/profile.jpg";

// =============================
// Icons
// =============================
import {
  SiKotlin,
  SiAndroid,
  SiAndroidstudio,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiGithub,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import {
  FaBluetoothB,
  FaUsb,
  FaDatabase,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaNfcSymbol } from "react-icons/fa6";

// =============================
// Profile Info
// =============================
const PROFILE = {
  name: "Dharmik Parmar",
  title: "Mobile App Developer | Android | Kotlin | IoT Integrations",
  tagline:
    "Building high-performance Android apps with IoT, NFC, BLE, Bluetooth, USB, and scalable APIs.",
  linkedin: "https://www.linkedin.com/in/dharmik-parmar-6363ab208",
  location: "Vadodara, Gujarat, India",
  email: "dharmikparmar0811@gmail.com",
  phone: "+91-8866081391",
};

const SUMMARY = `Android developer with hands-on expertise in Kotlin and IoT integrations (USB, NFC, Bluetooth, BLE). Experienced in enterprise-grade apps, SDKs, and scalable architectures. Skilled in Clean Architecture, Retrofit, OkHttp, Room, Firebase, and WebSockets. Focused on delivering secure, high-performance, and user-friendly Android applications.`;

// =============================
// Skills (with icons)
// =============================
const SKILLS = [
  {
    label: "Programming",
    items: [
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "Java", icon: <DiJava /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    label: "Mobile & UI",
    items: [
      { name: "Android Studio", icon: <SiAndroidstudio /> },
      { name: "Jetpack", icon: <SiAndroid /> },
      { name: "Material Design", icon: <SiAndroid /> },
    ],
  },
  {
    label: "Connectivity",
    items: [
      { name: "USB", icon: <FaUsb /> },
      { name: "NFC", icon: <FaNfcSymbol /> },
      { name: "Bluetooth", icon: <FaBluetoothB /> },
      { name: "BLE", icon: <FaBluetoothB /> },
    ],
  },
  {
    label: "APIs & Data",
    items: [
      { name: "REST APIs", icon: <FaDatabase /> },
      { name: "Retrofit", icon: <FaDatabase /> },
      { name: "OkHttp", icon: <FaDatabase /> },
      { name: "Room", icon: <FaDatabase /> },
      { name: "WebSockets", icon: <FaDatabase /> },
    ],
  },
  {
    label: "Cloud & Tools",
    items: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Git/GitHub", icon: <SiGithub /> },
    ],
  },
];

// =============================
// Projects
// =============================
const PROJECTS = [
  {
    title: "STS-PCB Apps (Client & Supplier)",
    type: "Enterprise Apps",
    period: "2024 — Present",
    tech: ["Kotlin", "Retrofit", "WebSockets", "Firebase"],
    bullets: [
      " Engineered two enterprise-grade apps (Client & Supplier) enabling PCB inquiry registration, manufacturing  tracking, quotation management, and order lifecycle management",
      " Integrated WebSockets for real-time chat, implemented Firebase push notifications, and added secure payment gateway features.",
      " Applied modular clean architecture to separate business logic, improving scalability and maintainability and acheive faster load times (~30% improvement) through caching mechanisms and lazy loading strategies",
      "Optimized API performance with Retrofit & OkHttp and introduced caching strategies.",
    ],

    media: [
      { type: "image", src: homeImg },
      { type: "image", src: formImg },
      { type: "image", src: inquiryImg },
      { type: "image", src: orderImg },
      { type: "image", src: profileImg },
      { type: "video", src: "/demo_vidoe_stspcb.mp4" },
    ],
  },
  {
    title: "USB Glucometer SDK",
    type: "Medical Device SDK",
    period: "2024",
    tech: ["Kotlin", "USB Host API", "AAR SDK"],
    bullets: [
      "Built an Android app integrating USB modules to connect with a medical glucometer, enabling real-time data read/write operations.",
      "Developed and published a client-ready SDK (AAR library) hosted on Maven/JitPack for seamless third-party integration.",
      "Improved data transfer stability and reduced latency by optimizing USB serial communication handlers.",
    ],
    media: [],
  },
  {
    title: "NFC Reader/Writer Application",
    type: "IoT",
    period: "2023",
    tech: ["Kotlin", "NFC APIs", "Room"],
    bullets: [
      "Designed and developed an NFC application for block-level memory read/write on NFC cards.",
      "Engineered offline data persistence using Room database, cutting average data retrieval times by 600ms and ensuring seamless application functionality regardless of network connectivity status for end-users.",
      "Ensured app compatibility across multiple Android versions and device models.",
    ],
    media: [],
  },
  {
    title: "Bluetooth Device Controller",
    type: "IoT Device App",
    period: "2023",
    tech: ["Kotlin", "Bluetooth Classic & BLE"],
    bullets: [
      "Developed a peer-to-peer communication app using Classic Bluetooth supporting text, audio, video, and document exchange.",
      "Created BLE apps for Scanning, Receiving, Advertising (Legacy + Extended), and Sensor Read/Write.",
      "Built support for simultaneous multi-sensor communication, acting as a slave device with master hardware.",
    ],
    media: [],
  },
];

// =============================
// Work Experience
// =============================
const EXPERIENCE = [
  {
    company: "Leons Integration Pvt. Ltd.",
    role: "Mobile App Developer",
    period: "Jan 2024 — Present",
    bullets: [
      "Develop, test, and maintain Android applications in Kotlin with focus on performance, scalability, and clean code practices.",
      "Collaborate with cross-functional teams (backend, hardware engineers, QA) to deliver production-ready apps.",
      "Designed secure REST API integrations with Retrofit and OkHttp.",
      "Work on IoT-focused projects integrating hardware devices (USB, NFC, Bluetooth, BLE) with Android apps.",
      "Optimize performance using asynchronous programming (Coroutines/Flows), caching strategies, and offline-first approaches.",
      "Designed secure REST API integrations with Retrofit and OkHttp.",
    ],
  },
];

// =============================
// UI Helpers
// =============================
const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 overflow-hidden"
  >
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-indigo-400 text-center"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-1 md:gap-2 rounded-full border border-indigo-500 bg-indigo-900/40 text-indigo-300 px-2 md:px-3 py-1 text-xs md:text-sm mr-2 mb-2">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{
      scale: 1.02,
      boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
    }}
    viewport={{ once: true }}
    className={`rounded-xl md:rounded-2xl shadow-md border border-slate-700 p-4 md:p-6 bg-slate-800 hover:bg-slate-700 transition ${className}`}
  >
    {children}
  </motion.div>
);

// =============================
// Lightbox with Navigation (Fixed)
// =============================
const Lightbox = ({
  media,
  onClose,
  allMedia,
  currentIndex,
  setCurrentIndex,
}) => {
  if (!media) return null;

  // Ensure allMedia is always an array, even if undefined
  const mediaArray = allMedia || [media];
  const safeCurrentIndex = currentIndex || 0;

  // Navigation functions
  const goToPrevious = (e) => {
    if (e) e.stopPropagation();
    if (mediaArray.length <= 1) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaArray.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    if (e) e.stopPropagation();
    if (mediaArray.length <= 1) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === mediaArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    const handleArrowKeys = (e) => {
      if (mediaArray.length <= 1) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleArrowKeys);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleArrowKeys);
      document.body.style.overflow = "unset";
    };
  }, [onClose, goToPrevious, goToNext, mediaArray.length]);

  // Get current media based on index
  const currentMedia = mediaArray[safeCurrentIndex] || media;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* Close button - positioned with safe margins */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white text-black w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center z-20 hover:bg-gray-200 transition-colors text-xl font-bold"
      >
        ✕
      </button>

      {/* Navigation Arrows - Only show if there are multiple media items */}
      {mediaArray.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 
                 bg-white/95 text-black w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                 rounded-full flex items-center justify-center 
                 z-20 hover:bg-gray-200 transition-all duration-200 
                 text-2xl sm:text-3xl md:text-4xl font-bold shadow-lg border-2 border-gray-300
                 mobile-touch-target"
          >
            ‹
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 
                 bg-white/95 text-black w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                 rounded-full flex items-center justify-center 
                 z-20 hover:bg-gray-200 transition-all duration-200 
                 text-2xl sm:text-3xl md:text-4xl font-bold shadow-lg border-2 border-gray-300
                 mobile-touch-target"
          >
            ›
          </button>
        </>
      )}

      {/* Media counter - Only show if there are multiple media items */}
      {mediaArray.length > 1 && (
        <div
          className="absolute top-16 sm:top-4 left-1/2 transform -translate-x-1/2 
            bg-white/95 text-black px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-md z-20 
            font-medium shadow-lg border border-gray-300 whitespace-nowrap"
        >
          {safeCurrentIndex + 1} / {mediaArray.length}
        </div>
      )}

      {/* Content area - clicking here will NOT close the lightbox */}
      <div
        className="max-w-5xl max-h-[80vh] sm:max-h-[90vh] w-full flex items-center justify-center mt-8 sm:mt-0"
        onClick={(e) => e.stopPropagation()}
      >
        {currentMedia.type === "image" && (
          <img
            src={currentMedia.src}
            alt="Project preview"
            className="max-w-full max-h-[80vh] sm:max-h-[90vh] object-contain rounded-lg shadow-lg"
          />
        )}
        {currentMedia.type === "video" && (
          <div className="w-full h-auto aspect-video max-h-[80vh] sm:max-h-[90vh]">
            <video
              className="w-full h-full rounded-lg shadow-lg"
              src={currentMedia.src}
              controls
              autoPlay
            />
          </div>
        )}
      </div>

      {/* Add some custom styles for mobile optimization */}
      <style jsx>{`
        @media (max-width: 640px) {
          .mobile-touch-target {
            min-width: 44px;
            min-height: 44px;
          }
        }
      `}</style>
    </motion.div>
  );
};

// =============================
// Mobile Navigation
// =============================
const MobileNav = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleNavClick = (id) => {
    onClose();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md md:hidden flex items-center justify-center overflow-hidden"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-2xl text-indigo-400"
      >
        <FaTimes />
      </button>
      <nav className="flex flex-col items-center gap-8 text-xl">
        <button
          onClick={() => handleNavClick("about")}
          className="text-indigo-400 hover:text-indigo-300"
        >
          About
        </button>
        <button
          onClick={() => handleNavClick("skills")}
          className="text-indigo-400 hover:text-indigo-300"
        >
          Skills
        </button>
        <button
          onClick={() => handleNavClick("experience")}
          className="text-indigo-400 hover:text-indigo-300"
        >
          Experience
        </button>
        <button
          onClick={() => handleNavClick("projects")}
          className="text-indigo-400 hover:text-indigo-300"
        >
          Projects
        </button>
        <button
          onClick={() => handleNavClick("contact")}
          className="text-indigo-400 hover:text-indigo-300"
        >
          Contact
        </button>
      </nav>
    </motion.div>
  );
};

// =============================
// Main Component
// =============================
export default function Portfolio() {
  const [lightbox, setLightbox] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [currentProjectMedia, setCurrentProjectMedia] = useState([]);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Function to handle opening lightbox with proper context
  const openLightbox = (media, mediaArray, index) => {
    setLightbox(media);
    setCurrentProjectMedia(mediaArray);
    setCurrentMediaIndex(index);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 overflow-x-hidden">
      {/* Nav */}
      <nav className="sticky top-0 z-30 backdrop-blur-md bg-slate-900/90 border-b border-slate-700 overflow-hidden">
        <div className="w-full px-4 md:px-6 flex items-center justify-between h-14 max-w-full">
          <div className="font-bold text-xl md:text-2xl text-indigo-400 truncate">
            {PROFILE.name}
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#about"
              className="hover:text-indigo-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-indigo-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-indigo-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <button
            className="md:hidden text-indigo-400"
            onClick={() => setMobileNavOpen(true)}
          >
            <FaBars size={20} />
          </button>
        </div>
      </nav>

      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      {/* Hero / About */}
      <header
        id="about"
        className="w-full px-4 md:px-6 pt-12 md:pt-16 pb-8 md:pb-12 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-start max-w-full"
        >
          <div className="md:col-span-7 max-w-full">
            <h1 className="text-2xl md:text-4xl font-bold text-indigo-400">
              {PROFILE.title}
            </h1>
            <p className="mt-3 text-base md:text-lg text-slate-300">
              {PROFILE.tagline}
            </p>
          </div>
          <div className="md:col-span-5 w-full">
            <Card>
              <h3 className="text-lg font-semibold mb-2 text-indigo-400">
                About Me
              </h3>
              <p className="text-sm/6 text-slate-300">{SUMMARY}</p>
            </Card>
          </div>
        </motion.div>
      </header>

      {/* Skills */}
      <Section id="skills" title="Technical Skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full">
          {SKILLS.map((group) => (
            <Card key={group.label}>
              <h4 className="font-semibold mb-3 text-indigo-400">
                {group.label}
              </h4>
              <div className="flex flex-wrap">
                {group.items.map((item) => (
                  <Pill key={item.name}>
                    <span className="text-base md:text-lg">{item.icon}</span>
                    {item.name}
                  </Pill>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Work Experience">
        <div className="flex justify-center max-w-full">
          <div className="max-w-3xl w-full">
            {EXPERIENCE.map((exp) => (
              <Card key={exp.company}>
                <h3 className="text-lg md:text-xl font-bold text-indigo-400">
                  {exp.role}
                </h3>
                <p className="text-sm text-slate-400 mb-3">
                  {exp.company} · {exp.period}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-full">
          {PROJECTS.map((p) => (
            <Card key={p.title} className="w-full">
              <h3 className="text-lg md:text-xl font-bold text-indigo-400">
                {p.title}
              </h3>
              <p className="text-sm text-slate-400 mb-2">
                {p.type} · {p.period}
              </p>
              <div className="flex flex-wrap mb-3">
                {p.tech.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm/6 text-slate-300 mb-4">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {/* Media section */}
              {p.media.length > 0 && (
                <div className="mt-2 max-w-full">
                  {/* Small screens → horizontal scroll */}
                  <div className="flex space-x-2 overflow-x-auto pb-2 sm:hidden max-w-full">
                    {p.media.map((m, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="w-32 h-24 bg-slate-700 rounded overflow-hidden cursor-pointer flex-shrink-0 flex items-center justify-center max-w-full"
                        onClick={() => openLightbox(m, p.media, i)}
                      >
                        {m.type === "image" ? (
                          <img
                            src={m.src}
                            alt="Project preview"
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <span className="text-xs text-slate-300">
                            ▶ Video
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Medium+ screens → uniform grid */}
                  <div className="hidden sm:grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3 max-w-full">
                    {p.media.map((m, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="w-full h-28 bg-slate-700 rounded overflow-hidden cursor-pointer flex items-center justify-center max-w-full"
                        onClick={() => openLightbox(m, p.media, i)}
                      >
                        {m.type === "image" ? (
                          <img
                            src={m.src}
                            alt="Project preview"
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <span className="text-xs text-slate-300">
                            ▶ Video
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-hidden"
        >
          <Card className="relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-indigo-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-indigo-400/10 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-8 px-4">
                <h3 className="text-2xl font-bold text-indigo-400 mb-3">
                  Get In Touch
                </h3>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Let's connect! Reach out for collaborations, freelance
                  projects, or just a quick hello. I'm always open to discussing
                  new opportunities and ideas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0 max-w-full">
                {/* Contact Information */}
                <div className="space-y-5 max-w-full">
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors max-w-full">
                    <div className="p-2 bg-indigo-500/10 rounded-full flex-shrink-0">
                      <FaEnvelope className="text-indigo-400 text-lg" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-slate-200 mb-1">
                        Email
                      </h4>
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="text-slate-300 hover:text-indigo-300 transition-colors break-words"
                      >
                        {PROFILE.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors max-w-full">
                    <div className="p-2 bg-indigo-500/10 rounded-full flex-shrink-0">
                      <FaPhoneAlt className="text-indigo-400 text-lg" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-slate-200 mb-1">
                        Phone
                      </h4>
                      <a
                        href={`tel:${PROFILE.phone}`}
                        className="text-slate-300 hover:text-indigo-300 transition-colors"
                      >
                        {PROFILE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors max-w-full">
                    <div className="p-2 bg-indigo-500/10 rounded-full flex-shrink-0">
                      <FaMapMarkerAlt className="text-indigo-400 text-lg" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-slate-200 mb-1">
                        Location
                      </h4>
                      <span className="text-slate-300">{PROFILE.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors max-w-full">
                    <div className="p-2 bg-indigo-500/10 rounded-full flex-shrink-0">
                      <FaLinkedin className="text-indigo-400 text-lg" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-slate-200 mb-1">
                        LinkedIn
                      </h4>
                      <a
                        href={PROFILE.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-300 hover:text-indigo-300 transition-colors underline break-words"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form Placeholder */}
                <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 max-w-full">
                  <h4 className="font-semibold text-slate-200 mb-4 text-center">
                    Send a Message
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                      <p className="text-slate-300 text-sm mb-3">
                        Interested in working together?
                      </p>
                      <a
                        href={`mailto:${PROFILE.email}?subject=Let's Work Together`}
                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-colors font-medium"
                      >
                        <FaEnvelope className="text-sm" />
                        Send Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-6 text-center text-sm text-slate-400 w-full px-4 overflow-hidden">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
      </footer>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          media={lightbox}
          onClose={() => setLightbox(null)}
          allMedia={currentProjectMedia}
          currentIndex={currentMediaIndex}
          setCurrentIndex={setCurrentMediaIndex}
        />
      )}
    </div>
  );
}
