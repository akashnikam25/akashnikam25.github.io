export default function About() {
  return (
    <section id="about">
      <div className="max-w">
        <div className="about-grid">
          <div className="about-photo-wrap reveal">
            <div className="about-photo-frame"></div>
            <img
              className="about-photo"
              src="/uploads/photo-1776583007466.jpeg"
              alt="Akash Nikam"
            />
            <div className="about-photo-accent"></div>
          </div>
          <div className="about-text reveal">
            <h2>About me</h2>
            <p>
              I&apos;m a Senior Software Engineer at <strong>John Deere</strong>,
              where I build systems software in <strong>C++</strong> - real-time
              protocol stacks, connection lifecycle state machines, and
              large-scale embedded platforms running in production on
              agricultural hardware.
            </p>
            <p>
              My focus is <strong>distributed systems and reliability</strong>:
              a CAN bus message parser decoding J1939/ISOBUS frames at up to{" "}
              <strong>1,000 Hz</strong> with sub-millisecond latency,
              multi-path failover across CAN/FTP/MQTT, and a health monitoring
              system with sub-second heartbeat polling and a{" "}
              <strong>&lt;0.1% false positive rate</strong>.
            </p>
            <p>
              I also built <strong>Plant Brain</strong>, a production RAG
              platform that uses <strong>PostgreSQL as an ACID-compliant
              append-only audit log</strong> - which pulled me deeper into
              databases. I&apos;m now studying <strong>TimescaleDB</strong>{" "}
              internals: hypertable architecture, compression, and how
              time-series engines extend Postgres at scale. Genuinely
              interested in moving from systems that use databases to systems
              that build them.
            </p>
            <p>
              Before Deere, I spent 2+ years at <strong>Mavenir</strong>{" "}
              building Go microservices on <strong>SingleStore</strong> for
              telecom-grade analytics - high-frequency polling, concurrent
              goroutines, and distributed data storage in a production,
              Kubernetes-based environment.
            </p>
            <div className="about-chips">
              <span className="chip">Pune, India</span>
              <span className="chip">Open to remote</span>
              <span className="chip">Systems &amp; C++</span>
              <span className="chip">Databases</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
