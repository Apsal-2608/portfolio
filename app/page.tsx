 "use client";

import { ParticlesBackground } from "./components/Particles";
import { TypingText } from "./components/TypingText";
import { Section } from "./components/Section";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Network,
  Cpu,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const heroRoles = [
  "Cybersecurity Enthusiast",
  "Network Engineer",
  "Ethical Hacking Learner",
  "Python Developer"
];

const skills = [
  {
    category: "Networking",
    items: ["Subnetting", "IP Addressing", "OSI Model", "Routing & Switching"],
    color: "from-cyan-400 to-sky-500",
    level: 88
  },
  {
    category: "Cybersecurity",
    items: ["Network Security", "Packet Analysis", "Firewalls"],
    color: "from-purple-400 to-fuchsia-500",
    level: 84
  },
  {
    category: "Programming",
    items: ["Python", "JavaScript"],
    color: "from-emerald-400 to-cyan-400",
    level: 80
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript"],
    color: "from-blue-400 to-indigo-500",
    level: 78
  },
  {
    category: "Tools",
    items: ["Cisco Packet Tracer", "Wireshark", "Git"],
    color: "from-amber-400 to-orange-500",
    level: 82
  }
];

const projects = [
  {
    title: "FaceMorse – AI Facial Morse Authentication",
    description:
      "AI-powered authentication system that decodes unique facial blink Morse patterns to securely authorize logins.",
    tag: "AI · Security · Morse",
    highlight: "Biometric-inspired MFA using facial gestures."
  },
  {
    title: "Web Vulnerability Scanner",
    description:
      "Custom security scanner that analyzes websites for common vulnerabilities and generates structured security reports.",
    tag: "Security Tooling",
    highlight: "Automated checks inspired by OWASP Top 10."
  },
  {
    title: "AI Based Network Automation",
    description:
      "Natural language interface that turns admin intents into router configurations for streamlined network management.",
    tag: "AI · Networking",
    highlight: "Bridges human language and device-level configs."
  },
  {
    title: "Water Conservation IoT System",
    description:
      "Smart irrigation solution using IoT sensors and weather APIs to optimize crop watering and reduce waste.",
    tag: "IoT · Sustainability",
    highlight: "Real-time moisture-aware decision engine."
  },
  {
    title: "Enterprise Network Implementation",
    description:
      "Simulated multi-site enterprise network built with Cisco devices to practice routing, switching, and redundancy.",
    tag: "Cisco · Design",
    highlight: "Hands-on design of scalable topologies."
  },
  {
    title: "E-Commerce Website",
    description:
      "Responsive online store crafted with HTML, CSS, and JavaScript focusing on clean UX and performance.",
    tag: "Frontend",
    highlight: "Pixel-perfect UI with responsive grids."
  }
];

const certifications = [
  "ISC² Certified in Cybersecurity (CC)",
  "Cisco Networking Basics",
  "Responsive Web Design – freeCodeCamp",
  "24 Hour Hackathon – IoT Water Conservation System",
  "CCNA – In Progress"
];

const education = [
  {
    title: "Bachelor of Engineering – Computer Science and Cybersecurity",
    place: "K.L.N College of Engineering",
    period: "2022 – 2026",
    score: "75%"
  },
  {
    title: "Higher Secondary Education – Bio-Maths",
    place: "Grace Matriculation Higher Secondary School",
    period: "2021 – 2022",
    score: "80%"
  }
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10">
        <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-slate-950/75 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-purple-500 shadow-glow">
                <span className="text-sm font-semibold text-slate-950">MA</span>
              </div>
              <div className="text-xs md:text-sm">
                <p className="font-medium text-slate-100">Mohamed Apsal</p>
                <p className="text-[11px] text-slate-400">
                  Cybersecurity & Network Engineering
                </p>
              </div>
            </div>

            <nav className="hidden gap-6 text-xs font-medium text-slate-300 md:flex">
              {[
                "About",
                "Skills",
                "Projects",
                "Certifications",
                "Education",
                "Experience",
                "Contact"
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative hover:text-cyan-300"
                >
                  <span>{item}</span>
                  <span className="absolute inset-x-0 -bottom-1 h-[1px] origin-center scale-x-0 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.45)] transition hover:border-cyan-400 hover:bg-cyan-500/20 active:scale-[0.98]"
            >
              <span className="hidden md:inline">Let&apos;s collaborate</span>
              <span className="inline md:hidden">Contact</span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)] group-hover:bg-emerald-300" />
            </a>
          </div>
        </header>

        <section
          id="hero"
          className="relative overflow-hidden pb-20 pt-16 sm:pt-20 md:pb-28 md:pt-24"
        >
          <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-5 md:flex-row md:px-8">
            <motion.div
              className="relative w-full space-y-6 md:w-7/12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.45)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.9)]" />
                Open to internships · Cybersecurity & Networking
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-300 bg-clip-text text-transparent">
                    Mohamed Apsal
                  </span>
                </h1>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-cyan-300/90">
                  Cybersecurity & Network Engineering Student · Madurai, India
                </p>
                <p className="text-base text-slate-300 md:text-lg">
                  <TypingText words={heroRoles} />
                </p>
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                Passionate and goal-oriented cybersecurity student with a strong foundation in
                computer networking, routing, and security. Experienced in vulnerability
                assessment, web security testing, and IoT security — constantly exploring ethical
                hacking and modern defensive techniques.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:mapsal2608@gmail.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-[0_0_35px_rgba(56,189,248,0.65)] transition hover:shadow-[0_0_45px_rgba(168,85,247,0.85)] active:scale-[0.98]"
                >
                  <span>Contact Me</span>
                  <span className="translate-x-0 transition group-hover:translate-x-0.5">↗</span>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 shadow-[0_0_24px_rgba(15,23,42,0.9)] transition hover:border-cyan-500/60 hover:bg-slate-900/80"
                >
                  <span>View Projects</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-cyan-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                  Available for cybersecurity & networking roles
                </a>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-300 sm:flex sm:flex-wrap">
                <div className="flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/50 px-3 py-1.5">
                  <ShieldCheck className="h-4 w-4 text-cyan-300" />
                  <span>ISC² Certified in Cybersecurity (CC)</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/50 px-3 py-1.5">
                  <Network className="h-4 w-4 text-purple-300" />
                  <span>CCNA – In Progress</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/50 px-3 py-1.5">
                  <Cpu className="h-4 w-4 text-cyan-300" />
                  <span>Hands-on security labs & simulations</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative w-full md:w-5/12"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="glass-panel relative mx-auto flex max-w-sm flex-col items-center justify-center px-6 py-7 shadow-[0_0_60px_rgba(15,23,42,1)]">
                <div className="absolute -top-7 right-6 flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1 text-[11px] text-slate-200 shadow-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  Cyber Grid Online
                </div>

                <div className="relative mt-3">
                  <div className="absolute -inset-0.5 -z-10 rounded-[26px] bg-gradient-to-tr from-cyan-500/60 via-sky-400/40 to-purple-600/60 opacity-80 blur-xl" />
                  <div className="relative rounded-[22px] border border-slate-700/80 bg-slate-950/80 p-4">
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span>Threat Surface Monitor</span>
                      <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-emerald-300">
                        Real-time
                      </span>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-3 text-[11px] text-slate-200">
                      <div className="rounded-xl bg-slate-900/80 p-3">
                        <p className="text-[10px] text-slate-400">Network Health</p>
                        <p className="mt-1 text-lg font-semibold text-cyan-300">98%</p>
                        <p className="mt-1 text-[10px] text-emerald-300">Stable</p>
                      </div>
                      <div className="rounded-xl bg-slate-900/80 p-3">
                        <p className="text-[10px] text-slate-400">Alerts</p>
                        <p className="mt-1 text-lg font-semibold text-amber-300">03</p>
                        <p className="mt-1 text-[10px] text-amber-300">Investigating</p>
                      </div>
                      <div className="rounded-xl bg-slate-900/80 p-3">
                        <p className="text-[10px] text-slate-400">Coverage</p>
                        <p className="mt-1 text-lg font-semibold text-purple-300">24/7</p>
                        <p className="mt-1 text-[10px] text-slate-300">Monitoring</p>
                      </div>
                    </div>
                    <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-3/4 animate-pulse bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 w-full space-y-3 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Location</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-cyan-300" />
                      Madurai, India
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Email</span>
                    <a
                      href="mailto:mapsal2608@gmail.com"
                      className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      mapsal2608@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Phone</span>
                    <a
                      href="tel:+918248994140"
                      className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      +91 8248994140
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  <a
                    href="https://github.com/Apsal-2608"
                    target="_blank"
                    className="group flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-950/90 text-slate-200 shadow-[0_0_24px_rgba(15,23,42,1)] transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/mohamed-apsal-33483b27a"
                    target="_blank"
                    className="group flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-950/90 text-slate-200 shadow-[0_0_24px_rgba(15,23,42,1)] transition hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:mapsal2608@gmail.com"
                    className="group flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-950/90 text-slate-200 shadow-[0_0_24px_rgba(15,23,42,1)] transition hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-300"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Section id="about" title="About Me" eyebrow="Who I am & what I do">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <div className="space-y-4 text-sm leading-relaxed text-slate-300 md:text-base">
              <p>
                Passionate and goal-oriented cybersecurity student with a strong foundation in
                computer networking and security. I focus on understanding how systems communicate,
                how they fail, and how to secure them with practical, real-world approaches.
              </p>
              <p>
                ISC² Certified in Cybersecurity (CC) and currently preparing for the CCNA
                certification. I enjoy working with routing, switching, subnetting, and
                troubleshooting complex network scenarios while keeping security at the center.
              </p>
              <p>
                I&apos;ve worked on vulnerability assessment, web security testing, and IoT security
                projects. I love building innovative security solutions, exploring ethical hacking
                techniques, and turning theory into hands-on labs, simulations, and tools.
              </p>
            </div>
            <div className="glass-panel-soft relative overflow-hidden p-5 text-sm text-slate-200">
              <div className="pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
                  Snapshot
                </p>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                    <span>
                      <strong className="text-slate-50">Cybersecurity Intern at ShadowFox</strong> –
                      Worked on security labs and real-world style practical exercises.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
                    <span>
                      <strong className="text-slate-50">IoT & AI projects</strong> across
                      authentication, automation, and smart water conservation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                    <span>
                      <strong className="text-slate-50">Community & events</strong> – Organized
                      Zentra&apos;25 Debug & Hunt focused on debugging and web vulnerability
                      challenges.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills Matrix" eyebrow="What I work with">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                className="group glass-panel-soft relative overflow-hidden p-5"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10" />
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-50">{skill.category}</h3>
                  <span className="rounded-full bg-slate-900/70 px-2 py-1 text-[10px] text-slate-300">
                    {skill.level}% focus
                  </span>
                </div>
                <div className="mt-3 h-[5px] w-full overflow-hidden rounded-full bg-slate-800/80">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                  />
                </div>
                <ul className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-slate-200">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-700/70 bg-slate-950/70 px-2 py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Featured Projects" eyebrow="Things I&apos;ve built">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                className="group glass-panel-soft relative flex flex-col overflow-hidden border-slate-700/70 bg-slate-950/60 p-5"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-cyan-500/20 via-sky-500/5 to-transparent" />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-50">{project.title}</h3>
                  <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px] text-cyan-300">
                    {project.tag}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-300">{project.description}</p>
                <p className="mt-3 text-[11px] text-cyan-300/90">{project.highlight}</p>
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                    {idx < 3 ? "Security-focused" : "Practical implementation"}
                  </span>
                  <span className="inline-flex cursor-pointer items-center gap-1 text-cyan-300/90 group-hover:text-cyan-200">
                    Preview
                    <span className="translate-x-0 text-xs transition group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="certifications"
          title="Certifications & Highlights"
          eyebrow="Validating my cybersecurity journey"
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div className="space-y-3">
              {certifications.map((cert) => (
                <motion.div
                  key={cert}
                  className="group flex items-center justify-between rounded-2xl border border-slate-700/80 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 shadow-[0_0_30px_rgba(15,23,42,1)]"
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <span>{cert}</span>
                  <span className="rounded-full bg-slate-900/90 px-2 py-1 text-[10px] text-cyan-300/90">
                    {cert.includes("Progress") || cert.includes("In Progress")
                      ? "In Progress"
                      : "Achieved"}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="glass-panel-soft relative overflow-hidden p-5 text-sm text-slate-200">
              <div className="pointer-events-none absolute -left-10 -top-16 h-40 w-40 rounded-full bg-purple-500/15 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                Focus
              </p>
              <p className="mt-2 text-sm text-slate-100">
                Blending{" "}
                <span className="text-cyan-300">
                  networking fundamentals, cybersecurity certifications, and hands-on labs
                </span>{" "}
                to build a strong profile for real-world security roles.
              </p>
              <p className="mt-3 text-xs text-slate-300">
                From ISC² CC to CCNA preparation, each certification is backed by practical
                experimenting, simulation, and continuous learning instead of just exam theory.
              </p>
            </div>
          </div>
        </Section>

        <Section id="education" title="Education" eyebrow="Academics & learning path">
          <div className="grid gap-5 md:grid-cols-2">
            {education.map((edu) => (
              <motion.div
                key={edu.title}
                className="glass-panel-soft flex flex-col justify-between p-5 text-sm text-slate-200"
                whileHover={{ y: -4 }}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
                    {edu.period}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-slate-50">{edu.title}</h3>
                  <p className="mt-1 text-xs text-slate-400">{edu.place}</p>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
                  <span>Score</span>
                  <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[11px] text-emerald-300">
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          title="Experience"
          eyebrow="Hands-on exposure & internships"
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <motion.div
              className="glass-panel-soft relative overflow-hidden p-6 text-sm text-slate-200"
              whileHover={{ y: -4 }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
                Cybersecurity Intern
              </p>
              <p className="mt-1 text-sm text-slate-100">ShadowFox</p>
              <p className="mt-3 text-sm text-slate-300">
                Worked on security labs and gained hands-on exposure to cybersecurity fundamentals
                and real-world practical exercises. Explored topics like network security, attack
                simulations, and core defensive concepts with guided practice.
              </p>
            </motion.div>
            <motion.div
              className="glass-panel-soft relative overflow-hidden p-6 text-sm text-slate-200"
              whileHover={{ y: -4 }}
            >
              <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                Activities
              </p>
              <p className="mt-1 text-sm text-slate-100">Zentra&apos;25 Department Symposium</p>
              <p className="mt-3 text-sm text-slate-300">
                Organized the <span className="text-cyan-300">Debug & Hunt</span> technical event
                focused on debugging and web vulnerability challenges — combining problem solving
                with offensive security thinking.
              </p>
            </motion.div>
          </div>
        </Section>

        <Section id="contact" title="Contact" eyebrow="Let&apos;s work on something secure">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <motion.form
              className="glass-panel-soft relative overflow-hidden space-y-4 p-6 text-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="pointer-events-none absolute inset-x-0 -top-10 h-28 bg-gradient-to-b from-cyan-500/15 via-slate-900/0 to-transparent" />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project, internship, or opportunity..."
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-[0_0_35px_rgba(56,189,248,0.6)] transition hover:shadow-[0_0_44px_rgba(168,85,247,0.8)] active:scale-[0.98]"
                >
                  Send Secure Message
                </button>
                <p className="text-[11px] text-slate-400">
                  This is a UI demo form. Use email or LinkedIn links for direct contact.
                </p>
              </div>
            </motion.form>

            <div className="space-y-4 text-sm text-slate-200">
              <div className="glass-panel-soft p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
                  Direct Details
                </p>
                <ul className="mt-3 space-y-2.5 text-sm">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-cyan-300" />
                    <a
                      href="mailto:mapsal2608@gmail.com"
                      className="text-slate-100 hover:text-cyan-200"
                    >
                      mapsal2608@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-cyan-300" />
                    <a
                      href="tel:+918248994140"
                      className="text-slate-100 hover:text-cyan-200"
                    >
                      +91 8248994140
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-cyan-300" />
                    <span>Madurai, India</span>
                  </li>
                </ul>
              </div>
              <div className="glass-panel-soft flex items-center justify-between p-5 text-xs text-slate-300">
                <span>Prefer LinkedIn or GitHub?</span>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Apsal-2608"
                    target="_blank"
                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-950/80 text-slate-200 transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/mohamed-apsal-33483b27a"
                    target="_blank"
                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-950/80 text-slate-200 transition hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <footer className="border-t border-slate-800/70 bg-slate-950/80 py-6 text-xs text-slate-400">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center md:flex-row md:px-8 md:text-left">
            <p>© 2026 Mohamed Apsal – Cybersecurity Portfolio</p>
            <div className="flex items-center gap-3 text-[11px]">
              <a
                href="https://github.com/Apsal-2608"
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-950/90 text-slate-200 transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/mohamed-apsal-33483b27a"
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-950/90 text-slate-200 transition hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:mapsal2608@gmail.com"
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-950/90 text-slate-200 transition hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-300"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

