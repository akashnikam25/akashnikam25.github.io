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
                  AI Agent Platform
                </div>
                <ul className="tl-bullets">
                  <li>
                    Architected a <strong>12-agent AI platform</strong>{" "}
                    automating the full engineering SDLC, from epic creation and
                    user-story writing to bug triage, code review, and infra
                    docs, with specialized agents (planner, developer, reviewer,
                    static-analyzer, link-tester) coordinated through a{" "}
                    <strong>durable LangGraph orchestration layer</strong>.
                    Deployed across <strong>3-4 engineering teams</strong>,
                    cutting engineering time by <strong>50-70%</strong>.
                  </li>
                  <li>
                    Built a <strong>code knowledge graph</strong> that parses an
                    entire codebase into a call/dependency graph, ranks the most
                    important nodes with <strong>PageRank</strong>, and renders
                    an interactive dependency visualization, giving every agent
                    a structural map of the code.
                  </li>
                  <li>
                    Engineered a <strong>graph-based RAG retrieval pipeline</strong>{" "}
                    that grounds agents in real code by blending keyword search,
                    PageRank importance, and graph-neighbor proximity with
                    task-type weighting, so each agent sees only the relevant
                    code and hallucination stays suppressed.
                  </li>
                  <li>
                    Designed <strong>durable, local-first execution</strong>{" "}
                    with a custom LangGraph checkpointer over local SQLite, so
                    agent runs are resumable and crash-safe with no central
                    server, keeping all source and state on the developer&apos;s
                    machine.
                  </li>
                  <li>
                    Wired agents into <strong>automated quality gates</strong>{" "}
                    (lint, type-check, test, smoke-test, and duplicate-detection)
                    run by dedicated reviewer, static-analyzer, and link-tester
                    agents as merge blockers on every change.
                  </li>
                  <li>
                    Rolled out the agent platform across{" "}
                    <strong>3-4 engineering teams</strong> through hands-on KT
                    sessions, integrating directly into existing workflows.
                    Teams shifted from writing to reviewing and validating
                    AI-generated output, backed by a structured{" "}
                    <strong>quality-gate process</strong> to approve results
                    before adoption.
                  </li>
                  <li>
                    Built a real-time <strong>machine visualization UI</strong>{" "}
                    from scratch using GitHub Copilot with no prior reference on
                    the platform, delivered <strong>~50% faster</strong> than
                    the traditional estimate.
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
                  Plant Brain · RAG Copilot
                </div>
                <ul className="tl-bullets">
                  <li>
                    Built <strong>Plant Brain</strong>, a production RAG copilot
                    for manufacturing SOPs, now in pilot with technicians
                    querying in production.
                  </li>
                  <li>
                    Engineered <strong>3-lane parallel retrieval</strong>:
                    Qdrant hybrid (BM25 + dense vectors) and an entity graph,
                    fused via <strong>RRF</strong>, with correction and outcome
                    boosting synced into the vector payload.
                  </li>
                  <li>
                    Enforced <strong>secure multi-tenant isolation</strong>:
                    plant_id scoping on every query, RBAC,
                    prompt-injection defence, and append-only audit logs,
                    validated against a real container.
                  </li>
                  <li>
                    Built a <strong>50-question eval harness</strong> with
                    cross-model grading (Claude Opus + GPT-4o), wired into CI as
                    a ratchet that fails the build on any quality regression.
                  </li>
                  <li>
                    Designed a <strong>6-layer fallback architecture</strong>{" "}
                    with zero silent failures, degrading gracefully across
                    retrieval and model layers under partial failure.
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
