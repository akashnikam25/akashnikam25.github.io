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
                <div className="tl-role">
                  Senior Software Engineer - AI Agents &amp; Backend
                </div>
                <div className="tl-period">Oct 2023 - Present · Pune, Hybrid</div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    margin: "4px 0 10px",
                  }}
                >
                  EmbAI-ASCENT
                </div>
                <ul className="tl-bullets">
                  <li>
                    Built <strong>EmbAI-ASCENT</strong>, a governed VS Code
                    extension for the engineering SDLC: agent-pack
                    distribution via a custom CLI (
                    <strong>Agent Package Manager</strong>), 3{" "}
                    <strong>MCP servers</strong> (Azure DevOps, Confluence,
                    GitHub Enterprise), and 4 custom LM tools wired into
                    Copilot Chat.
                  </li>
                  <li>
                    Designed a <strong>13-phase context-engineering webview</strong>{" "}
                    with keyword-scoring context assembly and{" "}
                    <strong>workspaceState</strong>-backed session continuity,
                    so engineers can resume multi-day planning threads
                    without losing context.
                  </li>
                </ul>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    margin: "22px 0 10px",
                  }}
                >
                  PlantIQ (Plant Brain)
                </div>
                <ul className="tl-bullets">
                  <li>
                    Built <strong>PlantIQ</strong> (Plant Brain), an
                    access-controlled <strong>RAG copilot</strong> for
                    plant-floor maintenance technicians: hybrid BM25 + dense
                    (bge-small-en-v1.5) retrieval fused via{" "}
                    <strong>Reciprocal Rank Fusion</strong> over
                    Docling-chunked SOPs, serving at <strong>P95 268ms</strong>.
                  </li>
                  <li>
                    Hardened PlantIQ with deterministic{" "}
                    <strong>fail-closed guardrails</strong> (confidence
                    gating, 15% grounding threshold),{" "}
                    <strong>JWT-derived</strong> plant_id/org_id access
                    scoping, and a <strong>CI-gated evaluation harness</strong>{" "}
                    (dual LLM-as-Judge, Claude Opus + GPT-4o, 0.20 divergence
                    flag).
                  </li>
                </ul>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    margin: "22px 0 10px",
                  }}
                >
                  AI Developer Assistant Platform
                </div>
                <ul className="tl-bullets">
                  <li>
                    Migrated a single-PDF chatbot into the{" "}
                    <strong>AI Developer Assistant Platform</strong>: a{" "}
                    <strong>ReAct-based agentic RAG</strong> system on{" "}
                    <strong>AWS Bedrock</strong> across 7 Lambda-backed
                    knowledge bases (Titan V2 embeddings, OpenSearch
                    Serverless).
                  </li>
                  <li>
                    Built a <strong>FalkorDB code knowledge graph</strong>{" "}
                    over 9 repositories (tree-sitter, 25 languages) and a{" "}
                    <strong>multi-agent orchestration layer</strong>{" "}
                    (Supervisor/Researcher/Coder/Writer) with a sequential
                    RFI pipeline.
                  </li>
                  <li>
                    Shipped an <strong>MCP server</strong> exposing 40+ tools
                    / 140+ skills across Slack, CLI, web, and n8n, deployed
                    on <strong>EKS</strong> with GitOps-driven CI/CD.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-item reveal">
              <div className="tl-dot"></div>
              <div className="tl-content">
                <div className="tl-company">Mavenir</div>
                <div className="tl-role">
                  Member of Technical Staff I (R&amp;D)
                </div>
                <div className="tl-period">
                  Mar 2022 - Oct 2023 · 1 yr 8 mos · Remote
                </div>
                <ul className="tl-bullets">
                  <li>
                    Built a production <strong>Go service</strong> for a
                    high-frequency analytics notification system - polls
                    CouchDB every 100ms, matches epoch-time triggers,
                    dispatches notifications, and auto-expires entries after
                    30 minutes. Used goroutines and channels for concurrent,
                    non-blocking delivery at scale.
                  </li>
                  <li>
                    Used <strong>SingleStore</strong> for distributed data
                    storage and document management across Go microservices in
                    production - hands-on with its query model, distributed
                    data patterns, and performance characteristics in a
                    real-time service architecture. Also worked with CouchDB
                    for document management.
                  </li>
                  <li>
                    Designed and implemented versioned{" "}
                    <strong>OpenAPI specifications</strong> in Go for a
                    microservice platform, making APIs fully configurable for
                    future version changes and significantly reducing
                    migration effort.
                  </li>
                  <li>
                    Contributed to <strong>NWDAF application</strong>{" "}
                    development on a microservice architecture in Go -
                    service-to-service APIs, distributed state management, and
                    production deployment across <strong>Kubernetes</strong>-based
                    infrastructure.
                  </li>
                  <li>
                    Worked with <strong>Go, Docker, and Kubernetes</strong>{" "}
                    throughout R&amp;D - containerized services, K8s
                    deployment patterns, and service-mesh communication in a
                    production microservice environment.
                  </li>
                  <li>
                    Collaborated cross-functionally with R&amp;D teams to
                    design, build, and ship Go services handling concurrent
                    workloads, real-time data pipelines, and distributed
                    notification systems at telecom scale.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-item reveal">
              <div className="tl-dot"></div>
              <div className="tl-content">
                <div className="tl-company">Mavenir</div>
                <div className="tl-role">Graduate Engineer</div>
                <div className="tl-period">
                  Mar 2021 - Feb 2022 · 1 yr · Remote
                </div>
                <ul className="tl-bullets">
                  <li>
                    Worked hands-on with{" "}
                    <strong>Go, Docker, and Kubernetes</strong> in a production
                    microservice architecture - containerized service
                    deployment, K8s service-mesh patterns, and inter-service
                    communication across distributed components.
                  </li>
                  <li>
                    Wrote <strong>unit tests</strong> across 2-3 microservices,
                    improving coverage and reliability of core services -
                    disciplined about testing and regression prevention from
                    day one.
                  </li>
                  <li>
                    Resolved bugs on the <strong>Prediction Application</strong>{" "}
                    by triaging issues, identifying root causes, and shipping
                    fixes under production constraints - building strong
                    debugging instincts across distributed Go services.
                  </li>
                  <li>
                    Used <strong>CouchDB</strong> for document management
                    alongside Go microservices in a distributed data
                    architecture.
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
