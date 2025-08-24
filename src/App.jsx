import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import homeImg from "./assets/home.jpg";
import formImg from "./assets/form.jpg";
import inquiryImg from "./assets/inquiry.jpg";
import orderImg from "./assets/order.jpg";

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
} from "react-icons/fa";
import { FaNfcSymbol } from "react-icons/fa6";
import { image } from "framer-motion/client";

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
    tech: ["Kotlin", "Retrofit", "WebSockets", "Firebase", "Room"],
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
    tech: ["Kotlin", "NFC APIs"],
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
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-bold mb-8 text-indigo-400 text-center"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500 bg-indigo-900/40 text-indigo-300 px-3 py-1 text-sm mr-2 mb-2">
    {children}
  </span>
);

const Card = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{
      scale: 1.02,
      boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
    }}
    viewport={{ once: true }}
    className="rounded-2xl shadow-md border border-slate-700 p-6 bg-slate-800 hover:bg-slate-700 transition"
  >
    {children}
  </motion.div>
);

// =============================
// Lightbox
// =============================
const Lightbox = ({ media, onClose }) => {
  if (!media) return null;
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded shadow"
      >
        ✕ Close
      </button>
      <div className="max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
        {media.type === "image" && (
          <img
            src={media.src}
            alt=""
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
          />
        )}
        {media.type === "video" && (
          <iframe
            className="w-full h-[70vh] rounded-lg shadow-lg"
            src={media.src}
            title="Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

// =============================
// Main Component
// =============================
export default function Portfolio() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-700">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-14">
          <div className="font-bold text-2xl text-indigo-400">
            {PROFILE.name}
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-400">
              About
            </a>
            <a href="#skills" className="hover:text-indigo-400">
              Skills
            </a>
            <a href="#experience" className="hover:text-indigo-400">
              Experience
            </a>
            <a href="#projects" className="hover:text-indigo-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-indigo-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero / About */}
      <header id="about" className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-12 gap-8 items-start"
        >
          <div className="md:col-span-7">
            <h1 className="text-4xl font-bold text-indigo-400">
              {PROFILE.title}
            </h1>
            <p className="mt-3 text-lg text-slate-300">{PROFILE.tagline}</p>
          </div>
          <div className="md:col-span-5">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((group) => (
            <Card key={group.label}>
              <h4 className="font-semibold mb-3 text-indigo-400">
                {group.label}
              </h4>
              <div className="flex flex-wrap">
                {group.items.map((item) => (
                  <Pill key={item.name}>
                    <span className="text-lg">{item.icon}</span>
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
        <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
          {EXPERIENCE.map((exp) => (
            <Card key={exp.company}>
              <h3 className="text-xl font-bold text-indigo-400">{exp.role}</h3>
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
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title}>
              <h3 className="text-xl font-bold text-indigo-400">{p.title}</h3>
              <p className="text-sm text-slate-400 mb-2">
                {p.type} · {p.period}
              </p>
              <div className="flex flex-wrap mb-3">
                {p.tech.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm/6 text-slate-300">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
                {p.media.map((m, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="w-32 h-20 bg-slate-700 rounded overflow-hidden cursor-pointer flex items-center justify-center"
                    onClick={() => setLightbox(m)}
                  >
                    {m.type === "image" ? (
                      <img
                        src={m.src}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span className="text-xs text-slate-300">▶ Video</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <Card>
          <p className="mb-6 text-slate-300 text-sm text-center">
            Let’s connect! Reach out for collaborations, freelance projects, or
            just a quick hello.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-400" />
              <span>{PROFILE.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-indigo-400" />
              <span>{PROFILE.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-400" />
              <span>{PROFILE.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-indigo-400" />
              <a
                className="underline"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {PROFILE.linkedin}
              </a>
            </div>
          </div>
        </Card>
      </Section>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox media={lightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}
