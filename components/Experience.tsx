import type { CSSProperties } from "react";

const subLabel = (first: boolean): CSSProperties => ({
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--accent)",
  margin: first ? "4px 0 10px" : "22px 0 10px",
});

export default function Experience() {
  return (
    <section id="experience">
      <div className="max-w">
        <div className="exp-layout">
          <div>
            <div className="section-tag">Experience</div>
            <h2 className="section-title">Where I&apos;ve worked</h2>
            <p className="section-sub">
              5+ years building AI agent systems and the production backends
              behind them.
            </p>
            <a
              href="https://www.linkedin.com/in/akash-nikam-profile/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              style={{ marginTop: 32, display: "inline-flex" }}
            >
              Full profile ↗
            </a>
          </div>
          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="tl-dot active"></div>
              <div className="tl-content">
                <div className="tl-company">John Deere</div>
                <div className="tl-role">Senior Software Engineer</div>
                <div className="tl-period">
                  Oct 2023 - Present · Pune, Hybrid · AI agents and backend
                </div>

                <div style={subLabel(true)}>
                  Multi-agent developer assistant · 500+ engineers
                </div>
                <ul className="tl-bullets">
                  <li>
                    Built a multi-agent assistant on <strong>AWS Bedrock</strong>{" "}
                    (Claude) for Slack, CLI, VS Code and web, with{" "}
                    <strong>200+ MCP tools</strong> that act as the signed-in
                    user across Jira, Confluence, GitHub, CI/CD and monitoring.
                  </li>
                  <li>
                    Designed a <strong>hybrid router</strong> (keyword scoring
                    plus Claude Haiku) that keeps about 70% of requests on a
                    single agent, across <strong>40 agents</strong> built on
                    reusable skills.
                  </li>
                  <li>
                    Designed <strong>agent memory</strong> (summaries,
                    compression of large tool outputs, long-term memory with a
                    relevance threshold) and a <strong>code knowledge graph</strong>{" "}
                    over 9 repositories.
                  </li>
                  <li>
                    Added an <strong>LLM-as-judge evaluation gate</strong> for
                    every model, prompt and tool change, and ran Claude Code in
                    isolated Kubernetes pods with up to 16 parallel subagents to
                    fix CVEs and raise pull requests.
                  </li>
                </ul>

                <div style={subLabel(false)}>
                  RAG copilot for plant maintenance · 30+ technicians
                </div>
                <ul className="tl-bullets">
                  <li>
                    Built a <strong>RAG assistant</strong> over 500+ SOPs and
                    3,000+ work orders a year: OCR ingestion, section-aware
                    chunking, hybrid search and reranking on PostgreSQL +
                    pgvector, raising <strong>recall@10 from 76% to 92%</strong>.
                  </li>
                  <li>
                    Built an <strong>evaluation harness</strong> with dev and
                    hold-out sets: pass rate from 62% to 85%, and safety pass
                    rate from <strong>85% to 99%</strong> under a
                    zero-safety-failure release gate.
                  </li>
                  <li>
                    Worked <strong>on site at the plant in Germany</strong>{" "}
                    with technicians; added code-side guardrails such as
                    numbers checked against sources and access control in the
                    database filter.
                  </li>
                </ul>

                <div style={subLabel(false)}>
                  AI-assisted SDLC · 30+ development teams
                </div>
                <ul className="tl-bullets">
                  <li>
                    Built a governed <strong>VS Code extension</strong> that
                    distributes vetted agent packs, with{" "}
                    <strong>3 MCP servers</strong> (Jira, Confluence, GitHub
                    Enterprise) wired into Copilot Chat.
                  </li>
                  <li>
                    Built custom <strong>GitHub Copilot and Claude Code</strong>{" "}
                    agents for context building, planning and diff-scoped code
                    review, with session continuity for multi-day planning.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-item reveal">
              <div className="tl-dot"></div>
              <div className="tl-content">
                <div className="tl-company">Mavenir</div>
                <div className="tl-role">
                  Graduate Engineer → Member of Technical Staff I (R&amp;D)
                </div>
                <div className="tl-period">
                  Mar 2021 - Oct 2023 · Bengaluru, Remote
                </div>
                <ul className="tl-bullets">
                  <li>
                    Built a production <strong>Go</strong> notification service
                    polling CouchDB every 100 ms, with goroutines and channels
                    for concurrent, non-blocking delivery at telecom scale.
                  </li>
                  <li>
                    Contributed to <strong>NWDAF</strong> Go microservices on{" "}
                    <strong>Kubernetes</strong>, designed versioned{" "}
                    <strong>OpenAPI</strong> specs that cut migration effort,
                    and used SingleStore for distributed storage.
                  </li>
                  <li>
                    Wrote unit tests across microservices and fixed production
                    bugs in distributed Go services.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
