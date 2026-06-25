type Project = {
  num: string;
  name: string;
  description: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    num: "01",
    name: "Arken-AI",
    description:
      "Conversational AI platform that turns plain-English requirements into fully-audited heat-exchanger designs. Claude orchestration with a YAML tool registry drives a bounded 4-layer pipeline where deterministic math and hard engineering rules gate every model decision (proceed, correct, warn, escalate), streamed live to a React UI over Redis-Streams SSE.",
    tags: ["Agentic AI", "Tool Use", "FastAPI", "React/TS"],
    href: "https://github.com/Arken-AI",
  },
  {
    num: "02",
    name: "ZapBridge",
    description:
      "Event-driven integration platform connecting GitHub to Slack. Webhook → HMAC-SHA256 validation → Redis idempotency → async RQ worker → Claude summarization agent → Slack. Production OAuth 2.0 with Fernet-encrypted tokens and key rotation.",
    tags: ["Event-Driven", "OAuth 2.0", "Redis/RQ", "Claude"],
    href: "https://github.com/akashnikam25/zapbridge",
  },
  {
    num: "03",
    name: "Personal Agent",
    description:
      "Your own personal AI agent: a self-hosted assistant that knows your context and acts on your behalf. Built with agentic patterns and MCP tooling.",
    tags: ["Agents", "MCP", "Claude"],
    href: "https://github.com/akashnikam25/personal-agent",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="max-w">
        <div className="section-tag">Projects</div>
        <h2 className="section-title">Things I&apos;ve built</h2>
        <p className="section-sub">
          Personal and open-source work - agentic AI, RAG, and event-driven
          systems.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="project-card reveal"
              key={project.num}
            >
              <div className="project-num">{project.num}</div>
              <div className="project-name">{project.name}</div>
              <div className="project-desc">{project.description}</div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-arrow">↗</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
