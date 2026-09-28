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
    name: "PlantIQ (Plant Brain)",
    description:
      "Access-controlled RAG copilot for industrial plant-floor maintenance. Hybrid BM25 + dense (bge-small-en-v1.5) retrieval fused via Reciprocal Rank Fusion over Docling-chunked SOPs, deterministic fail-closed guardrails, and a CI-gated evaluation harness with dual LLM-as-Judge scoring - serving at P95 268ms.",
    tags: ["RAG", "Qdrant", "FastAPI", "Python"],
    href: "#experience",
  },
  {
    num: "02",
    name: "EmbAI-ASCENT",
    description:
      "Governed VS Code extension for the engineering SDLC. Agent-pack distribution via a custom CLI, 3 MCP servers into Azure DevOps, Confluence, and GitHub Enterprise, and a 13-phase context-engineering webview feeding Copilot Chat.",
    tags: ["MCP", "VS Code Extension", "TypeScript"],
    href: "#experience",
  },
  {
    num: "03",
    name: "AI Developer Assistant Platform",
    description:
      "Migrated a single-PDF chatbot into a ReAct-based agentic RAG system on AWS Bedrock: 7 Lambda-backed knowledge bases, a FalkorDB code knowledge graph over 9 repositories, and an MCP server (40+ tools / 140+ skills) deployed on EKS.",
    tags: ["Agentic RAG", "AWS Bedrock", "FalkorDB", "MCP"],
    href: "#experience",
  },
  {
    num: "04",
    name: "Arken-AI",
    description:
      "Conversational AI platform that turns plain-English requirements into fully-audited heat-exchanger designs. Claude orchestration with a YAML tool registry drives a bounded 4-layer pipeline where deterministic math and hard engineering rules gate every model decision (proceed, correct, warn, escalate), streamed live to a React UI over Redis-Streams SSE.",
    tags: ["Agentic AI", "Tool Use", "FastAPI", "React/TS"],
    href: "https://github.com/Arken-AI",
  },
  {
    num: "05",
    name: "ZapBridge",
    description:
      "Event-driven integration platform connecting GitHub to Slack. Webhook → HMAC-SHA256 validation → Redis idempotency → async RQ worker → Claude summarization agent → Slack. Production OAuth 2.0 with Fernet-encrypted tokens and key rotation.",
    tags: ["Event-Driven", "OAuth 2.0", "Redis/RQ", "Claude"],
    href: "https://github.com/akashnikam25/zapbridge",
  },
  {
    num: "06",
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
          Production systems at John Deere, plus personal and open-source
          work - agentic AI, RAG, and event-driven systems.
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
