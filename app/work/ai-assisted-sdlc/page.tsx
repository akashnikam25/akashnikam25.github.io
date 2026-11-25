import type { Metadata } from "next";
import Link from "next/link";
import Motion from "@/components/Motion";
import { Flow, Footer, Header, LINKS, idx } from "@/components/ui";

export const metadata: Metadata = {
  title: "Case study: AI-assisted SDLC | Akash Nikam",
  description:
    "Custom Copilot and Claude Code agents, shipped through a governed VS Code extension to 30+ teams, that take work from business context to reviewed code.",
  alternates: { canonical: "/work/ai-assisted-sdlc/" },
  openGraph: {
    title: "Case study: AI-assisted SDLC",
    description:
      "Agents for context, epics, stories, plans, review and bugs, with shared coding standards and 3 MCP servers into Jira, Confluence and GitHub Enterprise.",
    url: "https://www.akashnikam.in/work/ai-assisted-sdlc/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Akash Nikam, AI Engineer" }],
  },
};

const lifecycle = ["Business context", "Technical context", "Epic", "Story", "Plan", "Code + tests", "Review", "Bug"];

const agents = [
  {
    name: "Business context",
    does: "Scans the repo, then asks why things exist: who pays, what breaks, which rules are real.",
    writes: "business-context.md",
  },
  {
    name: "Technical context",
    does: "Explains how the system works and why, checked against the business context.",
    writes: "technical-context.md",
  },
  {
    name: "Epic",
    does: "Won't move on until the business case has a baseline and a target. Can slice the epic vertically.",
    writes: "functional spec, epic",
  },
  {
    name: "Story",
    does: "Splits work into the smallest stories that still deliver value, and asks how to handle NFRs.",
    writes: "story with Given/When/Then",
  },
  {
    name: "Plan",
    does: "Up to 10 questions, each with a recommended option tied to real files. Plans only, never codes.",
    writes: "3 to 6 phases, tests in each",
  },
  {
    name: "Review",
    does: "Reads only the commits you name. One issue at a time; you choose refactor, skip, explain or backlog.",
    writes: "fixes or a refactor backlog",
  },
  {
    name: "Bug",
    does: "Turns a vague report into a story a developer can reproduce. Unknowns are marked, not guessed.",
    writes: "developer-ready bug story",
  },
];

const decisions = [
  {
    title: "Write the context down once, and make every agent read it",
    body: "Two agents produce a business context and a technical context document in the repo. Epic, story, plan, review and bug agents all start from those files, so they share one understanding of the system.",
    rejected: "letting each agent rediscover the codebase from scratch, so two agents can give different answers to the same question.",
  },
  {
    title: "Ask one question at a time, and recommend an answer",
    body: "Agents ask one focused question with lettered options and mark the one they recommend, with the file that justifies it. Developers mostly confirm instead of typing from scratch.",
    rejected: "generating a plan straight from a one-line ticket. It looks complete and hides every wrong assumption.",
  },
  {
    title: "Review the diff, not the repo, and let a person decide",
    body: "Review only looks at the changed lines of the given commits, shows the most serious issue first, and waits. A skipped issue never comes back in other words.",
    rejected: "a full-repo report with hundreds of findings, which nobody reads to the end.",
  },
  {
    title: "Agents write files, not chat",
    body: "Epics, stories, plans and bugs land as markdown in the repo, next to the code they describe, so they are reviewed in pull requests and stay current.",
    rejected: "answers in a chat window that are gone by the next sprint.",
  },
  {
    title: "Distribute agents like software",
    body: "A governed VS Code extension installs vetted agent packs, the shared coding standards and the MCP servers, so 30+ teams run the same reviewed versions.",
    rejected: "copying prompt files between repos, where every copy drifts on its own.",
  },
];

const standards = ["Core standards", "React", "TypeScript", "Java / Spring Boot", "C# / .NET", "Playwright", "Cucumber"];

const next = [
  { title: "Evaluate the agents themselves.", body: "A fixed set of tickets and repos, with plans and reviews scored against what senior engineers wrote." },
  { title: "Keep context documents fresh.", body: "Flag when the code has moved on from what business and technical context describe." },
  { title: "Measure the flow.", body: "Time from ticket to merged pull request per team, before and after adoption." },
];

export default function AiAssistedSdlc() {
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
            <span className="eyebrow reveal" style={idx(0)}>Case study 03 · John Deere</span>
            <h1 className="reveal" style={idx(1)}>Agents for the whole SDLC, from business context to reviewed code</h1>
            <p className="reveal" style={idx(2)}>
              Custom Copilot and Claude Code agents that ask the right questions before they write anything,
              shipped to 30+ teams through one governed VS Code extension.
            </p>
            <span className="section-note reveal" style={idx(3)}>
              Described without internal names, data or code.
            </span>
          </section>

          <dl className="keyfacts reveal">
            <div>
              <dt>Users</dt>
              <dd>30+ development teams</dd>
            </div>
            <div>
              <dt>Surfaces</dt>
              <dd>VS Code with GitHub Copilot, Claude Code</dd>
            </div>
            <div>
              <dt>Integrations</dt>
              <dd>3 MCP servers: Jira, Confluence, GitHub Enterprise</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>Built the extension, the agent packs and the MCP servers</dd>
            </div>
          </dl>

          <section className="section prose-cols">
            <div className="reveal">
              <span className="eyebrow">The problem</span>
              <h2>Fast code, slow everything around it</h2>
            </div>
            <div className="reveal" style={idx(1)}>
              <p>
                Coding assistants made writing code quick, but the work around it stayed slow and uneven:
                epics without success metrics, stories too big to estimate, plans that skipped tests, and
                reviews that either missed the real problem or listed a hundred small ones.
              </p>
              <p>
                Teams also kept their own prompt files. They drift apart, contradict each other, and none
                of them knows the business behind the code.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="how">
            <div className="section-head reveal">
              <span className="eyebrow">How it works</span>
              <h2 id="how">One agent per step, one shared context</h2>
              <p className="section-note">
                Each step has its own agent. Every agent reads the same two context documents and the same coding
                standards, and writes its output into the repo.
              </p>
            </div>
            <div className="card cs-panel reveal">
              <Flow label="Software lifecycle covered by agents" steps={lifecycle} />
            </div>
            <div className="agent-grid">
              {agents.map((a, i) => (
                <article className="card agent reveal" style={idx(i % 4)} key={a.name}>
                  <h3>{a.name}</h3>
                  <p>{a.does}</p>
                  <span className="agent-out">
                    <span className="muted">writes</span> {a.writes}
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section className="section" aria-labelledby="feel">
            <div className="section-head reveal">
              <span className="eyebrow">What it feels like</span>
              <h2 id="feel">Questions with a recommendation, issues one at a time</h2>
            </div>
            <div className="two-up">
              <figure className="card transcript reveal">
                <figcaption className="kicker">Plan agent, question 2 of up to 10</figcaption>
                <p className="t-q">How should we store the profile photo?</p>
                <ol className="t-options">
                  <li>a) Local media files</li>
                  <li className="t-rec">
                    b) The storage service already in the project <span>Recommended</span>
                  </li>
                  <li>c) A new cloud bucket</li>
                  <li>d) An external image service</li>
                </ol>
                <p className="t-why">Recommended because the project already has this integration and its SDK.</p>
              </figure>
              <figure className="card transcript reveal" style={idx(1)}>
                <figcaption className="kicker">Review agent, issue 1 of the commit</figcaption>
                <p className="t-q">InvoiceService.java, lines 88–120</p>
                <dl className="t-card">
                  <div><dt>Severity</dt><dd>Critical</dd></div>
                  <div><dt>What</dt><dd>One method validates, writes and sends events</dd></div>
                  <div><dt>Why</dt><dd>Single responsibility rule in the core standards</dd></div>
                  <div><dt>Fix</dt><dd>Split into three focused parts</dd></div>
                </dl>
                <ol className="t-options inline">
                  <li>1 Refactor now</li>
                  <li>2 Skip</li>
                  <li>3 Elaborate</li>
                  <li>4 Backlog</li>
                </ol>
              </figure>
            </div>
            <p className="section-note reveal">Illustrative examples of the interaction pattern, not real project code.</p>
          </section>

          <section className="section" aria-labelledby="decisions">
            <div className="section-head reveal">
              <span className="eyebrow">Decisions</span>
              <h2 id="decisions">Five decisions that shaped it</h2>
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

          <section className="section" aria-labelledby="standards">
            <div className="section-head reveal">
              <span className="eyebrow">Guardrails</span>
              <h2 id="standards">Standards every agent follows</h2>
              <p className="section-note">
                Small methods, at most three parameters, no magic numbers, Arrange-Act-Assert tests, no secrets in
                logs, and minor or patch dependency upgrades only. One core file, plus one per stack. Coding agents
                aren&apos;t done until every test passes.
              </p>
            </div>
            <ul className="tags reveal" aria-label="Standards files">
              {standards.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          <section className="section" aria-labelledby="results">
            <div className="section-head reveal">
              <span className="eyebrow">Results</span>
              <h2 id="results">In use</h2>
            </div>
            <div className="results">
              <div className="result reveal" style={idx(0)}>
                <span className="result-value">30+</span>
                <span className="result-label">development teams using the custom agents</span>
              </div>
              <div className="result reveal" style={idx(1)}>
                <span className="result-value">3</span>
                <span className="result-label">MCP servers: Jira, Confluence and GitHub Enterprise</span>
              </div>
              <div className="result reveal" style={idx(2)}>
                <span className="result-value">7</span>
                <span className="result-label">agents covering context, epics, stories, plans, review and bugs</span>
              </div>
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
            <Link href="/work/maintenance-copilot/" className="text-link">
              <span aria-hidden="true">←</span> Case study 02: plant-maintenance RAG copilot
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
