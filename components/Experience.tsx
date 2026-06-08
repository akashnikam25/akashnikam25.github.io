export default function Experience() {
  return (
    <section id="experience">
      <div className="max-w">
        <div className="exp-layout">
          <div>
            <div className="section-tag">Experience</div>
            <h2 className="section-title">Where I&apos;ve worked</h2>
            <p className="section-sub">
              5+ years building systems software in C++ and Go - real-time
              embedded platforms, distributed telecom infrastructure, and
              database-backed systems.
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
                <ul className="tl-bullets">
                  <li>
                    Wrote a <strong>CAN bus message parser in C++</strong> -
                    parsed raw J1939/ISOBUS frames into accurate structured
                    messages with correct byte ordering, signal extraction,
                    and timing-sensitive protocol handling for embedded
                    agricultural hardware running at up to{" "}
                    <strong>1,000 Hz</strong> at sub-millisecond latency in
                    production.
                  </li>
                  <li>
                    Designed and built <strong>connection lifecycle state
                    machines</strong> from scratch in C++ - per-error recovery
                    paths, sub-second async/non-blocking event processing, and
                    graceful state transitions under real-time embedded
                    constraints. Same discipline as database concurrency
                    control and transaction state management.
                  </li>
                  <li>
                    Worked across a <strong>large-scale production
                    C++14/17 codebase</strong> - navigated complex module
                    dependencies, applied resource management, smart pointer
                    ownership semantics, and polymorphic interface
                    hierarchies. Authored <strong>Protocol Buffer schemas
                    across 50+ .proto files</strong> for a layered data
                    streaming stack with session management and file transfer
                    services.
                  </li>
                  <li>
                    Designed <strong>multi-path failover architecture</strong>{" "}
                    across CAN, FTP, and MQTT - independent health checks per
                    path, automatic protocol switching on failure. Continuous
                    data flow with zero manual intervention, even during
                    partial infrastructure outages.
                  </li>
                  <li>
                    Built a production{" "}
                    <strong>health monitoring system</strong> with 1-second
                    heartbeat polling, RTT-based degradation detection
                    30–60s before failure, and a 150-second field-validated
                    SLO threshold. Achieved{" "}
                    <strong>&lt;0.1% false positive rate</strong> and zero
                    missed disconnects.
                  </li>
                  <li>
                    Architected a billing-critical{" "}
                    <strong>distributed data pipeline</strong> - Collect →
                    Persist → Reconstitute → Verify - using SQLite, protobuf
                    serialization, and checksum validation at every stage.
                    Zero data loss, zero duplication across all production
                    revenue records tied to billing.
                  </li>
                  <li>
                    Built <strong>distributed M2M collaboration services</strong>{" "}
                    (MQTT pub/sub + protobuf contracts) enabling real-time
                    sharing of coverage maps, session context, and work state
                    across coordinated machine fleets - consumed by{" "}
                    <strong>20+ equipment plugins</strong> across the
                    organization.
                  </li>
                  <li>
                    Built <strong>Plant Brain</strong>, a production RAG
                    platform that uses <strong>PostgreSQL as an
                    ACID-compliant append-only audit log</strong> and
                    full-text fallback layer - 3-lane parallel retrieval
                    (Qdrant hybrid BM25 + dense vector search + entity graph,
                    fused via RRF), secure multi-tenant isolation (RBAC
                    scoping, prompt-injection defence), a 50-question eval
                    harness with cross-model grading, and a 6-layer fallback
                    architecture with zero silent failures. Pilot live -
                    technicians querying in production.
                  </li>
                  <li>
                    Designed and shipped a <strong>12-agent AI orchestration
                    platform</strong> covering the full SDLC, deployed across
                    3–4 engineering teams and cutting engineering time by{" "}
                    <strong>50–70%</strong>. Also built a real-time{" "}
                    <strong>machine visualization UI</strong> from scratch,
                    delivered <strong>~50% faster</strong> than the
                    traditional estimate.
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
                    Wrote <strong>unit tests</strong> across 2–3 microservices,
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
