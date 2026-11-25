import Link from "next/link";
import Motion from "@/components/Motion";
import { Delta, Flow, Footer, Header, LINKS, SectionHead, Tags, idx } from "@/components/ui";

const results = [
  { value: "500+", label: "engineers use the multi-agent developer assistant" },
  { value: "200+", label: "MCP tools that act as the signed-in user" },
  { value: "76% → 92%", label: "retrieval recall@10 on the maintenance copilot", delta: [76, 92] },
  { value: "85% → 99%", label: "safety pass rate under a zero-failure release gate", delta: [85, 99] },
] as const;

type Work = {
  kicker: string;
  title: string;
  body: string;
  href?: string;
  flowLabel: string;
  flow: string[];
  facts: { value: string; label: string; delta?: [number, number] }[];
  tags: string[];
};

const work: Work[] = [
  {
    kicker: "01 · Agentic AI · 500+ engineers",
    title: "Multi-agent developer assistant",
    body: "One governed assistant in Slack, the command line, VS Code and the web. A cheap router sends most requests to a single specialist agent, and every tool call runs with the user's own permissions.",
    href: "/work/developer-assistant/",
    flowLabel: "Request flow",
    flow: ["Request", "Router", "Specialist agent", "MCP tools", "Answer + sources"],
    facts: [
      { value: "40 agents", label: "built on reusable skills, behind one router" },
      { value: "Eval gate", label: "on every model, prompt and tool change" },
    ],
    tags: ["AWS Bedrock", "MCP", "Python", "Kubernetes", "LLM-as-judge"],
  },
  {
    kicker: "02 · RAG · 30+ technicians",
    title: "Plant-maintenance RAG copilot",
    href: "/work/maintenance-copilot/",
    body: "Grounded answers on shop-floor tablets from 500+ SOPs and 3,000+ work orders a year. It says “no approved procedure found” instead of guessing, because a wrong repair step costs more than a missing answer.",
    flowLabel: "Retrieval flow",
    flow: ["SOPs + work orders", "OCR + chunking", "Hybrid search", "Rerank", "Grounded answer"],
    facts: [
      { value: "76% → 92%", label: "recall@10 with hybrid search and reranking", delta: [76, 92] },
      { value: "85% → 99%", label: "safety pass rate on labeled questions", delta: [85, 99] },
    ],
    tags: ["PostgreSQL + pgvector", "Hybrid search", "Reranking", "Eval harness"],
  },
  {
    kicker: "03 · Developer tools · 30+ teams",
    title: "AI-assisted SDLC",
    body: "A governed VS Code extension and custom Copilot and Claude Code agents that build context, plan work and review only the code that changed.",
    flowLabel: "Development flow",
    flow: ["Context docs", "Plan", "Code", "Diff-scoped review"],
    facts: [
      { value: "30+ teams", label: "use the custom agents" },
      { value: "3 MCP servers", label: "Jira, Confluence and GitHub Enterprise" },
    ],
    tags: ["VS Code extension", "GitHub Copilot", "Claude Code", "TypeScript"],
  },
];

const oss = [
  {
    meta: "2026 · team of 2",
    title: "Arken AI",
    body: "Turns plain-English requirements into audited heat-exchanger designs. Claude reviews each of 16 steps, but hard engineering rules always win. Live progress streams to a React UI, and an MCP server exposes the engine.",
    tags: ["Claude tool calling", "FastAPI", "Redis Streams", "React"],
    href: "https://github.com/Arken-AI",
  },
  {
    meta: "2026 · solo",
    title: "ZapBridge",
    body: "A GitHub-to-Slack event bridge: HMAC-verified webhooks, Redis idempotency so retries never double-post, a queue with a dead-letter window, and OAuth with encrypted tokens.",
    tags: ["Event-driven", "OAuth 2.0", "Redis + RQ", "Claude"],
    href: "https://github.com/akashnikam25/zapbridge",
  },
];

const experience = [
  {
    when: "Oct 2023 – present",
    title: "Senior Software Engineer · John Deere",
    body: "AI agents and backend. Multi-agent assistant, RAG copilot, AI-assisted SDLC. Worked on site at a plant in Germany.",
  },
  {
    when: "Mar 2021 – Oct 2023",
    title: "Graduate Engineer → Member of Technical Staff I · Mavenir",
    body: "Go microservices on Kubernetes for telecom analytics: a notification service polling every 100 ms, versioned OpenAPI specs.",
  },
  {
    when: "Education",
    title: "PG-DAC, Advanced Computing · B.Tech, Electronics & Telecommunication",
    body: "Anthropic certifications (2026): Claude with the Anthropic API, Agent Skills, Sub-Agents.",
  },
];

// Certificate images have the manager's name and the signature hidden.
const awards = [
  { img: "/awards/award-2026-11-wow.png", alt: "WOW! Award certificate, November 2026", when: "Nov 2026", title: "WOW! Award", body: "Completed a complex feature within a compressed timeline." },
  { img: "/awards/award-2026-08-creator.png", alt: "Exceptional Creator certificate, July to August 2026", when: "Jul – Aug 2026", title: "Exceptional Creator", body: "Awarded by the embedded software leadership team for contributions during a two-month delivery cycle." },
  { img: "/awards/award-2026-04-wow.png", alt: "WOW! Award certificate, April 2026", when: "Apr 2026", title: "WOW! Award", body: "Exceptional cross-functional impact: led one product initiative while supporting two others." },
  { img: "/awards/award-2025-11-star.png", alt: "Star of the Month certificate, November 2025", when: "Nov 2025", title: "Star of the Month", body: "Technical strength with customer focus and an innovative approach across two product initiatives." },
  { img: "/awards/award-2025-04-wow.png", alt: "WOW! Award certificate, April 2025", when: "Apr 2025", title: "WOW! Award", body: "Business-logic development for a product documentation feature." },
];

const principles = [
  { title: "I learn by building", body: "ZapBridge and Arken each started as a question I couldn't answer from a blog post." },
  { title: "I measure before I claim", body: "Golden sets, hold-out sets and release gates decide whether a change ships, not a demo." },
  { title: "I don't hand-wave", body: "I'd rather say “I haven't built that yet” and go build it than fake my way through." },
];

export default function Home() {
  return (
    <>
      <Motion />
      <div className="page">
        <div className="grid-paper" aria-hidden="true" />
        <div className="wrap">
          <Header />
        </div>
        <main id="main" className="wrap">
            <section id="top" className="hero-inner">
              <div className="hero-text">
                <div className="status reveal" style={idx(0)}>
                  <span className="status-dot" aria-hidden="true" />
                  <span>Open to AI Engineer and Forward Deployed roles · Pune, open to relocation</span>
                </div>
                <h1 className="reveal" style={idx(1)}>
                  I build AI agents that engineers and technicians use every day.
                </h1>
                <p className="hero-lede reveal" style={idx(2)}>
                  Senior Software Engineer at John Deere. I build multi-agent assistants, RAG copilots
                  and MCP tools, and the evaluation that keeps them honest.
                </p>
                <div className="btn-row reveal" style={idx(3)}>
                  <a href="#work" className="btn btn-primary">
                    Read the case studies
                  </a>
                  <a href={LINKS.github} className="btn">
                    GitHub
                  </a>
                  <a href={LINKS.linkedin} className="btn">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="hero-photo reveal" style={idx(2)}>
                <img src="/akash-nikam.jpg" alt="Akash Nikam" width={720} height={900} />
              </div>
            </section>

        <section aria-label="Results" className="results">
          {results.map((r, i) => (
            <div className="result reveal" style={idx(i)} key={r.value}>
              <span className="result-value">{r.value}</span>
              <span className="result-label">{r.label}</span>
              {"delta" in r && <Delta before={r.delta[0]} after={r.delta[1]} label={r.label} />}
            </div>
          ))}
        </section>

        <section id="work" className="section">
          <SectionHead
            eyebrow="Selected work"
            title="Three systems in production"
            note="Work projects at John Deere, described without internal names, data or code."
          />
          {work.map((w) => (
            <article className="card work-card reveal" key={w.title}>
              <div className="work-text">
                <span className="kicker">{w.kicker}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
                {w.href ? (
                  <Link href={w.href} className="text-link">
                    Read the case study <span className="arrow" aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <span className="pending">Full case study in progress</span>
                )}
              </div>
              <div className="work-visual">
                <Flow label={w.flowLabel} steps={w.flow} />
                <div className="facts">
                  {w.facts.map((f) => (
                    <div className="fact" key={f.value}>
                      <span className="fact-value">{f.value}</span>
                      <span className="fact-label">{f.label}</span>
                      {f.delta && <Delta before={f.delta[0]} after={f.delta[1]} label={f.label} />}
                    </div>
                  ))}
                </div>
                <Tags items={w.tags} />
              </div>
            </article>
          ))}
        </section>

        <section id="open-source" className="section">
          <SectionHead eyebrow="Open source" title="Things you can read the code for" />
          <div className="two-up">
            {oss.map((o, i) => (
              <article className="card oss-card reveal" style={idx(i)} key={o.title}>
                <span className="kicker">{o.meta}</span>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                <Tags items={o.tags} />
                <a href={o.href} className="text-link ext" target="_blank" rel="noreferrer">
                  View on GitHub <span className="arrow" aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHead eyebrow="Experience" title="Five years, backend to AI" />
          <ul className="rows">
            {experience.map((e, i) => (
              <li className="row reveal" style={idx(i)} key={e.when}>
                <span className="row-when">{e.when}</span>
                <div className="row-body">
                  <span className="row-title">{e.title}</span>
                  <p>{e.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="awards" className="section">
          <SectionHead eyebrow="Recognition" title="Five awards at John Deere" />
          <div className="awards">
            {awards.map((a, i) => (
              <article className="card award reveal" style={idx(i % 3)} key={a.img}>
                <img src={a.img} alt={a.alt} loading="lazy" />
                <span className="award-when">{a.when}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="how-i-work" className="section">
          <SectionHead eyebrow="How I work" title={<span id="how-i-work">Build it, measure it, say what&apos;s true</span>} />
          <div className="principles">
            {principles.map((p, i) => (
              <div className="card principle reveal" style={idx(i)} key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact reveal">
          <span className="eyebrow">Contact</span>
          <h2>Got an AI system that needs to work for real users?</h2>
          <a href={`mailto:${LINKS.email}`} className="contact-email">
            {LINKS.email}
          </a>
          <div className="btn-row">
            <a href={LINKS.github} className="btn btn-small">GitHub</a>
            <a href={LINKS.linkedin} className="btn btn-small">LinkedIn</a>
            <a href={LINKS.resume} className="btn btn-small">Resume (PDF)</a>
          </div>
        </section>
        </main>
        <div className="wrap">
          <Footer />
        </div>
      </div>
    </>
  );
}
