"use client";

import { useState, useEffect } from "react";

const NAV = ["about", "projects", "blog", "resume"];

const PROJECTS = [
  {
    id: "omniflow",
    name: "OmniFlow",
    year: "2024",
    status: "published",
    statusColor: "#00ff88",
    description: "Any-to-any multi-modal generative model supporting text, image, and audio. Accepted to CVPR 2025.",
    tags: ["PyTorch", "Diffusion", "Multi-modal", "CVPR"],
    links: [{ label: "paper →", href: "#" }],
  },
  {
    id: "econspot",
    name: "EconSPOT",
    year: "2024",
    status: "research",
    statusColor: "#4488ff",
    description: "AI-powered academic peer review benchmarking using LLM-as-a-judge evaluation on ICML OpenReview data.",
    tags: ["LLM", "NLP", "Python", "Evaluation"],
    links: [{ label: "repo →", href: "#" }],
  },
  {
    id: "indie-launch",
    name: "Indie Launch",
    year: "2023",
    status: "live",
    statusColor: "#ffcc00",
    description: "Full-stack platform for indie makers. Go/Echo backend, React frontend, PostgreSQL, deployed on GKE.",
    tags: ["Go", "React", "PostgreSQL", "GKE", "Docker"],
    links: [{ label: "demo →", href: "#" }],
  },
  {
    id: "refine",
    name: "Refine",
    year: "2024",
    status: "research",
    statusColor: "#4488ff",
    description: "Multi-model pipeline for automated analysis and critique of research papers.",
    tags: ["Python", "LLM", "Pipeline", "NLP"],
    links: [{ label: "repo →", href: "#" }],
  },
];

const POSTS = [
  {
    slug: "cuda-memory-coalescing",
    title: "Memory coalescing patterns in CUDA: what actually matters",
    date: "2025-02",
    tags: ["CUDA", "HPC"],
    excerpt: "Deep dive into global memory access patterns and how coalescing affects throughput on modern NVIDIA GPUs.",
  },
  {
    slug: "llm-as-judge",
    title: "The LLM-as-a-judge evaluation trap",
    date: "2025-01",
    tags: ["LLM", "Research"],
    excerpt: "Using language models to evaluate language models introduces systematic biases that most papers ignore.",
  },
  {
    slug: "rectified-flow",
    title: "Rectified flow: a cleaner path from noise to data",
    date: "2024-11",
    tags: ["Generative Models", "Math"],
    excerpt: "Walkthrough of the rectified flow framework and why it produces straighter ODE trajectories than DDPM.",
  },
];

const EXPERIENCE = [
  { period: "2024–present", role: "MS Computational Science & Engineering", org: "Harvard University", type: "education" },
  { period: "2023", role: "Research Engineer", org: "OmniFlow (CVPR 2025)", type: "research" },
  { period: "2022–2023", role: "Software Engineer", org: "Indie Launch", type: "work" },
  { period: "2019–2023", role: "BS Computer Science", org: "UCLA", type: "education" },
];

const SKILLS = {
  "Languages": ["Python", "Go", "TypeScript", "Java", "C++", "CUDA"],
  "ML / Research": ["PyTorch", "JAX", "Diffusion Models", "Transformers", "RL"],
  "Systems": ["CUDA", "MPI", "OpenMP", "Docker", "Linux"],
  "Web / Cloud": ["React", "Next.js", "PostgreSQL", "GKE", "AWS"],
};

export default function Home() {
  const [active, setActive] = useState("about");
  const [typedIndex, setTypedIndex] = useState(0);
  const fullTitle = "software engineer & researcher";

  useEffect(() => {
    if (typedIndex < fullTitle.length) {
      const t = setTimeout(() => setTypedIndex(i => i + 1), 40);
      return () => clearTimeout(t);
    }
  }, [typedIndex, fullTitle.length]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV.map(id => document.getElementById(id));
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollY) {
          setActive(NAV[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: "1px solid var(--border)",
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", height: 52,
      }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: "var(--accent)", letterSpacing: "0.05em", background: "none", border: "none", cursor: "pointer" }}
        >
          lorentz.studio
        </button>

        <div style={{ display: "flex", gap: 32 }}>
          {NAV.map(id => (
            <button key={id} className={`nav-link${active === id ? " active" : ""}`}
              onClick={() => scrollTo(id)}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
              {id}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div className="status-dot" />
          <span style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.1em" }}>open to work</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="grid-bg" style={{ paddingTop: 160, paddingBottom: 100, paddingLeft: 64, paddingRight: 64, borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        {/* Corner decoration */}
        <div style={{ position: "absolute", top: 60, right: 64, fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.15em", fontFamily: "'IBM Plex Mono', monospace" }}>
          {["[ 37.4°N, 122.0°W ]", "{`// v1.0.0`}", "$ ping lorentz.studio"].map((l, i) => (
            <div key={i} style={{ textAlign: "right", marginBottom: 4, animationDelay: `${i * 0.2}s` }} className="fade-in">{l}</div>
          ))}
        </div>

        <div style={{ maxWidth: 720 }}>
          <div className="section-label fade-in" style={{ marginBottom: 20, animationDelay: "0.1s" }}>
            {">"} hello world
          </div>
          <h1 className="fade-up" style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 8 }}>
            Lawrence Liao
          </h1>
          <div style={{ fontSize: "clamp(14px, 2vw, 18px)", color: "var(--text-muted)", marginBottom: 32, fontWeight: 300, height: 28 }}>
            {fullTitle.slice(0, typedIndex)}
            <span className="cursor" />
          </div>

          <p className="fade-up" style={{ maxWidth: 560, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 40, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 15, animationDelay: "0.3s" }}>
            MS student in Computational Science & Engineering at Harvard. I build things at the intersection of systems, ML research, and product. Previously UCLA CS.
          </p>

          <div className="fade-up" style={{ display: "flex", gap: 12, flexWrap: "wrap", animationDelay: "0.4s" }}>
            <button className="btn btn-accent" onClick={() => scrollTo("projects")}>view projects</button>
            <button className="btn" onClick={() => scrollTo("resume")}>résumé</button>
            <a className="btn" href="https://github.com" target="_blank" rel="noopener noreferrer">github ↗</a>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>

        {/* ABOUT */}
        <section id="about" style={{ paddingTop: 80, paddingBottom: 80, borderBottom: "1px solid var(--border)" }}>
          <div className="section-label" style={{ marginBottom: 32 }}>{'// 01 — about'}</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 15, marginBottom: 20 }}>
                I&apos;m a researcher and engineer with a strong foundation spanning machine learning, high-performance computing, and full-stack development.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 15, marginBottom: 20 }}>
                My research focuses on generative modeling — I contributed to OmniFlow, a multi-modal rectified flow model accepted to CVPR 2025. I&apos;m also interested in LLM evaluation, probabilistic inference, and parallel computing.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.9, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 15 }}>
                When I&apos;m not in research mode, I build software products and explore ideas at the intersection of AI and developer tooling.
              </p>
            </div>

            <div>
              <div style={{ marginBottom: 32 }}>
                {[
                  { label: "Location", value: "Cambridge, MA" },
                  { label: "Education", value: "Harvard MS CSE / UCLA BS CS" },
                  { label: "Research", value: "Generative Models, HPC, LLM Eval" },
                  { label: "Status", value: "Seeking SWE internship, Summer 2026" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", gap: 16, padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--text-dim)", fontSize: 12, width: 80, flexShrink: 0, letterSpacing: "0.05em" }}>{label}</span>
                    <span style={{ color: "var(--text-muted)", fontSize: 13 }}>{value}</span>
                  </div>
                ))}
              </div>

              <div>
                {Object.entries(SKILLS).map(([cat, items]) => (
                  <div key={cat} style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.1em", marginBottom: 6 }}>{cat}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {items.map(s => <span key={s} className="tag">{s}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ paddingTop: 80, paddingBottom: 80, borderBottom: "1px solid var(--border)" }}>
          <div className="section-label" style={{ marginBottom: 32 }}>{'// 02 — projects'}</div>

          <div style={{ display: "grid", gap: 1 }}>
            {PROJECTS.map((p, i) => (
              <div key={p.id} className="card" style={{
                display: "grid", gridTemplateColumns: "64px 1fr auto",
                gap: 24, alignItems: "start",
                animationDelay: `${i * 0.1}s`,
                borderLeft: `2px solid ${p.statusColor}22`,
              }}>
                <div>
                  <div style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.05em" }}>{p.year}</div>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.statusColor, marginTop: 8, boxShadow: `0 0 8px ${p.statusColor}66` }} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span style={{ fontSize: 15, fontWeight: 500, color: "var(--text)" }}>{p.name}</span>
                    <span style={{ fontSize: 10, letterSpacing: "0.1em", color: p.statusColor, border: `1px solid ${p.statusColor}44`, padding: "1px 6px" }}>{p.status}</span>
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.7, fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: 12 }}>{p.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {p.links.map(l => (
                    <a key={l.label} href={l.href} style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.05em", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24 }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn">
              all projects on github ↗
            </a>
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" style={{ paddingTop: 80, paddingBottom: 80, borderBottom: "1px solid var(--border)" }}>
          <div className="section-label" style={{ marginBottom: 32 }}>{'// 03 — writing'}</div>

          <div style={{ display: "grid", gap: 1 }}>
            {POSTS.map((post, i) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="card"
                style={{ display: "block", cursor: "pointer", animationDelay: `${i * 0.1}s` }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 15, fontWeight: 500, color: "var(--text)", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}>
                      {post.title}
                    </span>
                  </div>
                  <span style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.08em", flexShrink: 0 }}>{post.date}</span>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.7, fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: 12 }}>{post.excerpt}</p>
                <div style={{ display: "flex", gap: 6 }}>
                  {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 24, padding: 24, border: "1px dashed var(--border-bright)", textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "var(--text-dim)", letterSpacing: "0.1em" }}>more posts coming soon_</div>
          </div>
        </section>

        {/* RESUME */}
        <section id="resume" style={{ paddingTop: 80, paddingBottom: 120 }}>
          <div className="section-label" style={{ marginBottom: 32 }}>{'// 04 — résumé'}</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--text-dim)", marginBottom: 20 }}>EXPERIENCE & EDUCATION</div>
              {EXPERIENCE.map((e, i) => (
                <div key={i} style={{ display: "flex", gap: 20, marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid var(--border)" }}>
                  <div style={{ flexShrink: 0, width: 80 }}>
                    <div style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.05em" }}>{e.period}</div>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", marginTop: 8,
                      background: e.type === "education" ? "#4488ff" : e.type === "research" ? "var(--accent)" : "#ffcc00" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", marginBottom: 2 }}>{e.role}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{e.org}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--text-dim)", marginBottom: 20 }}>SKILLS & TOOLS</div>
              {Object.entries(SKILLS).map(([cat, items]) => (
                <div key={cat} style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 8 }}>{cat.toUpperCase()}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {items.map(s => <span key={s} className="tag">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <a href="/resume.pdf" className="btn btn-accent" download>download resume.pdf</a>
            <a href="mailto:hello@lorentz.studio" className="btn">hello@lorentz.studio</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn">linkedin ↗</a>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "24px 64px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.1em" }}>© 2025 lorentz.studio</span>
        <span style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.1em" }}>built with next.js + vercel</span>
      </footer>
    </div>
  );
}
