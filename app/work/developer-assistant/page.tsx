import type { Metadata } from "next";
import Link from "next/link";
import Motion from "@/components/Motion";
import { Footer, Header, LINKS, idx } from "@/components/ui";

export const metadata: Metadata = {
  title: "Case study: multi-agent developer assistant | Akash Nikam",
  description:
    "How a governed multi-agent assistant serves 500+ engineers across Slack, CLI, VS Code and web, with 200+ MCP tools that act as the signed-in user.",
  alternates: { canonical: "/work/developer-assistant/" },
  openGraph: {
    title: "Case study: multi-agent developer assistant",
    description:
      "A governed multi-agent assistant for 500+ engineers: cheap routing, user-scoped MCP tools and an eval gate on every change.",
    url: "https://www.akashnikam.in/work/developer-assistant/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Akash Nikam, AI Engineer" }],
  },
};

const steps = [
  { title: "Request", body: "From Slack, CLI, VS Code or web, with the user's login" },
  { title: "Router", body: "Keyword score first; a small model only when unsure" },
  { title: "Agents", body: "One specialist, a fixed pipeline, or a team" },
  { title: "MCP tools", body: "200+ tools that act as the signed-in user" },
  { title: "Answer", body: "Streamed back with its sources" },
];

const around = [
  { title: "Memory", body: "Summaries of older turns, compressed tool output, long-term recall above a relevance threshold" },
  { title: "Guardrails", body: "Access tiers, human approval for writes, no delete tools, audit logs" },
  { title: "Evals", body: "A golden set and an LLM judge that gate every change" },
  { title: "Observability", body: "Traces with time, tokens and cost for each step" },
];

const decisions = [
  {
    title: "Route cheaply first",
    body: "About 70% of requests need only one agent, so a keyword check decides most of them and a small model runs only when it's unsure.",
    rejected: "a large-model router on every request, which adds cost and latency for little gain.",
  },
  {
    title: "Act as the user, never as a service account",
    body: "Every tool call carries the user's own token, so the assistant can never see or change more than the person asking.",
    rejected: "one shared admin account, which is simpler but turns any prompt injection into a data leak.",
  },
  {
    title: "Skills over more agents",
    body: "Repeated instructions became reusable skills, so the platform runs on 40 focused agents instead of many near-duplicates.",
    rejected: "a new agent for every team request, which caused drift and duplicated prompts.",
  },
];

const results = [
  { value: "500+", label: "engineers using it" },
  { value: "40", label: "focused agents built on reusable skills" },
  { value: "200+", label: "MCP tools, each acting as the signed-in user" },
];

const next = [
  { title: "Typed shared state between agents.", body: "Agents hand off plain text today, and detail gets lost between steps." },
  { title: "Loop detection and a cost limit.", body: "Stop repeated identical tool calls and cap spend per request." },
  { title: "Checkpoints.", body: "Let a long run resume after a failure instead of starting over." },
];

export default function CaseStudy() {
  return (
    <>
      <Motion />
      <div className="page">
        <div className="grid-paper" aria-hidden="true" />
        <div className="wrap">
          <Header home={false} />
        </div>
        <main id="main" className="wrap">
          <section className="cs-hero">
            <Link href="/#work" className="text-link reveal" style={idx(0)}>
              <span aria-hidden="true">←</span> All work
            </Link>
            <span className="eyebrow reveal" style={idx(0)}>Case study 01 · John Deere</span>
            <h1 className="reveal" style={idx(1)}>A multi-agent assistant that 500+ engineers use every day</h1>
            <p className="reveal" style={idx(2)}>
              One governed assistant across Slack, the command line, VS Code and the web, connected to
              ticketing, source control, CI/CD, the wiki and monitoring.
            </p>
            <span className="section-note reveal" style={idx(3)}>
              Described without internal names, data or code.
            </span>
          </section>

          <dl className="keyfacts reveal">
            <div>
              <dt>Users</dt>
              <dd>500+ engineers</dd>
            </div>
            <div>
              <dt>Surfaces</dt>
              <dd>Slack, CLI, VS Code, web</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>AWS Bedrock (Claude), MCP, Python, Kubernetes</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>Built the router, MCP tools, agent memory and the eval gate</dd>
            </div>
          </dl>

          <section className="section prose-cols">
            <div className="reveal">
              <span className="eyebrow">The problem</span>
              <h2>Answers lived in too many tabs</h2>
            </div>
            <div className="reveal" style={idx(1)}>
              <p>
                Engineers lost time switching between tickets, repositories, build logs, the wiki and
                dashboards to answer routine questions. The first version was a chatbot over a single
                document: it could answer, but it couldn&apos;t look anything up or act.
              </p>
              <p>
                The goal was one assistant people could trust with real permissions, inside the tools they
                already use, without the cost of running a large model on every request.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="how">
            <div className="section-head reveal">
              <span className="eyebrow">How it works</span>
              <h2 id="how">From request to answer</h2>
            </div>
            <ol className="pipeline" aria-label="Request pipeline">
              {steps.map((s, i) => (
                <li className="card pipe-step" style={idx(i)} key={s.title}>
                  <span className="pipe-num" aria-hidden="true">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
            <div className="section-head reveal" style={{ marginTop: 16 }}>
              <span className="eyebrow">Around every request</span>
            </div>
            <div className="around">
              {around.map((a, i) => (
                <div className="fact reveal" style={idx(i)} key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section" aria-labelledby="decisions">
            <div className="section-head reveal">
              <span className="eyebrow">Decisions</span>
              <h2 id="decisions">Three decisions that shaped it</h2>
            </div>
            <div className="decisions">
              {decisions.map((d, i) => (
                <article className="card decision reveal" key={d.title}>
                  <span className="kicker">Decision {i + 1}</span>
                  <div>
                    <h3>{d.title}</h3>
                    <p>{d.body}</p>
                    <p className="rejected">
                      <strong>Rejected:</strong> {d.rejected}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" aria-labelledby="results">
            <div className="section-head reveal">
              <span className="eyebrow">Results</span>
              <h2 id="results">In production</h2>
            </div>
            <div className="results">
              {results.map((r, i) => (
                <div className="result reveal" style={idx(i)} key={r.label}>
                  <span className="result-value">{r.value}</span>
                  <span className="result-label">{r.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section" aria-labelledby="next">
            <div className="section-head reveal">
              <span className="eyebrow">Next</span>
              <h2 id="next">What I&apos;d change next</h2>
            </div>
            <ul className="next-list">
              {next.map((n, i) => (
                <li className="reveal" style={idx(i)} key={n.title}>
                  <strong>{n.title}</strong> {n.body}
                </li>
              ))}
            </ul>
          </section>

          <div className="cs-foot">
            <Link href="/#work" className="text-link">
              <span aria-hidden="true">←</span> Back to all work
            </Link>
            <a href={`mailto:${LINKS.email}`} className="btn btn-primary">
              Talk about a similar system
            </a>
          </div>
        </main>
        <div className="wrap">
          <Footer />
        </div>
      </div>
    </>
  );
}
