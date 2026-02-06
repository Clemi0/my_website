import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

// Highlighted project cards for the portfolio grid.
const projects = [
  {
    title: "LLM Social Simulation",
    description: "Python, Multi-agent, Networks",
  },
  {
    title: "Evaluation Harness",
    description: "Reproducibility, CLI, Testing",
  },
  {
    title: "Systems Notes",
    description: "Databases, Distributed Systems",
  },
  {
    title: "Neon Research Log",
    description: "Experiments, Writing, Rapid Prototyping",
  },
];

const socials = [
  { label: "GitHub", handle: "@clementine", href: "https://github.com" },
  { label: "LinkedIn", handle: "@clementine", href: "https://linkedin.com" },
  { label: "Twitter", handle: "@clementine", href: "https://x.com" },
];

// Experience timeline entries.
const timeline = [
  {
    role: "Research Assistant",
    time: "2024 — Present",
    detail: "Building multi-agent LLM simulations and testing emergent behavior.",
  },
  {
    role: "Open Source Contributor",
    time: "2023 — Present",
    detail: "Tooling for reproducible ML experiments and evaluation pipelines.",
  },
  {
    role: "Teaching Assistant",
    time: "2022 — 2023",
    detail: "Mentored students in data structures and discrete math.",
  },
];

export default function Home() {
  return (
    <div className="bg-animated">
      <Navbar />
      <main id="top" className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-16 md:px-6">
        {/* Hero */}
        <section className="flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.35em] text-neon-cyan">
                Clementine
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                CS + Math @ UofT • Building multi-agent LLM simulations.
              </h1>
              <p className="max-w-2xl text-base text-white/70 md:text-lg">
                I design experiments where autonomous agents collaborate, compete, and evolve.
                My focus is on reproducibility, evaluation, and building tools that scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="btn-ripple rounded-full border border-neon-purple/50 bg-neon-purple/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="btn-ripple rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-neon-cyan/60 hover:text-neon-cyan"
                >
                  Contact
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: "Focus", value: "Multi-agent systems" },
                { label: "Stack", value: "Python, TS, Next.js" },
                { label: "Currently", value: "Simulations + Eval tooling" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card glow-border rounded-2xl p-5 transition duration-300 hover:-translate-y-1"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* About */}
        <section id="about" className="flex flex-col gap-8">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neon-purple">
                About
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Building intelligent societies in silico.
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass-card rounded-3xl p-8">
              <p className="text-base leading-relaxed text-white/70">
                I&apos;m Clementine, a computer science + math student at the University of
                Toronto. My work sits at the intersection of agent-based modeling and
                large language models. I love turning complex systems into clean,
                repeatable experiments, and I document everything with precision.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  "Agent orchestration & incentive design",
                  "Reproducible evaluation workflows",
                  "Network effects & emergent behavior",
                  "Experiment dashboards & CLI tooling",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Projects */}
        <section id="projects" className="flex flex-col gap-8">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neon-cyan">
                Projects
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Selected explorations
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Reveal key={project.title}>
                <div className="glass-card glow-border h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-glow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/60">
                        {project.description}
                      </p>
                    </div>
                    <span className="rounded-full border border-neon-cyan/40 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-neon-cyan">
                      Featured
                    </span>
                  </div>
                  <div className="mt-6 neon-divider" />
                  <p className="mt-4 text-sm text-white/70">
                    An experimental build focused on measurable outcomes, structured
                    datasets, and a clean evaluation story.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="flex flex-col gap-8">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neon-purple">
                Experience
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Timeline
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6">
            {timeline.map((item, index) => (
              <Reveal key={item.role}>
                <div className="glass-card glow-border rounded-3xl p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.role}
                      </h3>
                      <p className="mt-2 text-sm text-white/60">{item.detail}</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-neon-cyan">
                      <span className="h-2 w-2 rounded-full bg-neon-cyan" />
                      {item.time}
                    </div>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="mt-6 h-px w-full bg-white/10" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="flex flex-col gap-8">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neon-cyan">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Let&apos;s build something together
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="glass-card rounded-3xl p-8">
                <p className="text-sm text-white/70">
                  Email
                  <a
                    className="ml-2 text-neon-cyan transition hover:text-neon-cyan/80"
                    href="mailto:clementine@example.com"
                  >
                    clementine@example.com
                  </a>
                </p>
                <div className="mt-6 grid gap-4">
                  {socials.map((platform) => (
                    <a
                      key={platform.label}
                      href={platform.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 transition hover:border-neon-cyan/50 hover:text-neon-cyan"
                    >
                      <span>{platform.label}</span>
                      <span className="text-xs uppercase tracking-[0.3em]">
                        {platform.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
