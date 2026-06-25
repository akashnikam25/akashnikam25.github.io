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
              I&apos;m an <strong>AI engineer</strong> who builds agentic
              systems for a living. Currently a Senior Software Engineer at{" "}
              <strong>John Deere</strong>, where I design and ship multi-agent
              platforms that change how engineering teams actually work - the
              intersection of <strong>LLMs, backend systems,</strong> and
              shipping real things people use.
            </p>
            <p>
              The thing that drives me: <strong>I learn by building</strong>.
              When I want to understand something - OAuth and webhooks, RAG
              retrieval, bounded AI pipelines - I don&apos;t just read about it,
              I ship a working version. That&apos;s where ZapBridge, ARKEN, and
              PlantIQ came from: each one started as a question I couldn&apos;t
              answer from a blog post.
            </p>
            <p>
              I&apos;m allergic to hand-waving. I&apos;d rather say{" "}
              <em>&quot;I haven&apos;t built that yet&quot;</em> and go build it
              than fake my way through - and when I build, I care about the{" "}
              <strong>why</strong> behind every decision: timing-safe
              validation, idempotency, graceful degradation, not just code that
              happens to run.
            </p>
            <p>
              Before Deere I spent 2+ years at <strong>Mavenir</strong> building
              Go microservices for telecom-grade analytics on Kubernetes.
              Outside of code: dissecting new architectures and occasionally
              writing on Medium about things I figured out the hard way.
            </p>
            <div className="about-chips">
              <span className="chip">Pune, India</span>
              <span className="chip">Open to remote</span>
              <span className="chip">AI Engineer</span>
              <span className="chip">Agentic Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
