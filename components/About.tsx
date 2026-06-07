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
              where I design and ship AI agent systems that fundamentally change
              how engineering teams operate. My work sits at the intersection of{" "}
              <strong>LLMs, backend systems,</strong> and real-world product
              delivery.
            </p>
            <p>
              I built a <strong>12-agent AI system</strong> covering the full
              SDLC - from epic creation to code review and infrastructure docs -
              deployed across 3–4 teams. Engineers shifted from writing to{" "}
              <em>directing and validating</em>. One product owner in Germany:{" "}
              <em>&quot;I am blown away by what you have developed.&quot;</em>
            </p>
            <p>
              Before Deere, I spent 2+ years at <strong>Mavenir</strong>{" "}
              building Go microservices for telecom-grade analytics -
              high-frequency polling, concurrent goroutines, OpenAPI refactors
              on live distributed systems.
            </p>
            <p>
              Outside of code: exploring new architectures, reading about
              distributed systems, and occasionally writing on Medium about
              things I&apos;ve figured out the hard way.
            </p>
            <div className="about-chips">
              <span className="chip">Pune, India</span>
              <span className="chip">Open to remote</span>
              <span className="chip">AI Systems</span>
              <span className="chip">Backend</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
