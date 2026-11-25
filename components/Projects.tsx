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
    name: "Multi-agent developer assistant",
    description:
      "Governed assistant on AWS Bedrock used by 500+ engineers: a hybrid router, 40 agents built on reusable skills, 200+ MCP tools that act as the signed-in user, agent memory, and an LLM-as-judge release gate.",
    tags: ["Agentic AI", "MCP", "AWS Bedrock", "Evals"],
    href: "#experience",
  },
  {
    num: "02",
    name: "Plant-maintenance RAG copilot",
    description:
      "Grounded answers for 30+ technicians over 500+ SOPs: OCR ingestion, section-aware chunks, hybrid search and reranking (recall@10 from 76% to 92%), with code-side safety checks and a zero-safety-failure release gate (safety pass rate from 85% to 99%).",
    tags: ["RAG", "pgvector", "Hybrid Search", "Evals"],
    href: "#experience",
  },
  {
    num: "03",
    name: "AI-assisted SDLC",
    description:
      "A governed VS Code extension and custom Copilot and Claude Code agents used by 30+ teams, with 3 MCP servers into Jira, Confluence and GitHub Enterprise.",
    tags: ["MCP", "VS Code Extension", "TypeScript"],
    href: "#experience",
  },
  {
    num: "04",
    name: "Arken-AI",
    description:
      "Conversational AI platform that turns plain-English requirements into audited heat-exchanger designs. Claude tool calling with a YAML tool registry drives a bounded pipeline where deterministic math and hard engineering rules gate every model decision, streamed live to a React UI over Redis Streams SSE, plus an MCP server on the live engine. Team of 2.",
    tags: ["Agentic AI", "Tool Use", "FastAPI", "React/TS"],
    href: "https://github.com/Arken-AI",
  },
  {
    num: "05",
    name: "ZapBridge",
    description:
      "Event-driven integration platform connecting GitHub to Slack. Webhook → HMAC-SHA256 validation → Redis idempotency → async RQ worker → Claude summarization → Slack. OAuth 2.0 with Fernet-encrypted tokens and key rotation.",
    tags: ["Event-Driven", "OAuth 2.0", "Redis/RQ", "Claude"],
    href: "https://github.com/akashnikam25/zapbridge",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="max-w">
        <div className="section-tag">Projects</div>
        <h2 className="section-title">Things I&apos;ve built</h2>
        <p className="section-sub">
          Three production systems at John Deere (described without
          internal details), plus open-source work on agentic AI and
          event-driven systems.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noreferrer" : undefined}
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
