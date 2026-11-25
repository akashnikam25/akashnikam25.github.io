type SkillGroup = {
  name: string;
  wide?: boolean;
  tags: { label: string; highlight?: boolean }[];
};

const skillGroups: SkillGroup[] = [
  {
    name: "AI & Agents",
    wide: true,
    tags: [
      { label: "Agentic AI", highlight: true },
      { label: "Multi-Agent Systems", highlight: true },
      { label: "RAG", highlight: true },
      { label: "MCP", highlight: true },
      { label: "LLM Evaluation (LLM-as-Judge)", highlight: true },
      { label: "Context Engineering", highlight: true },
      { label: "Agent Memory" },
      { label: "LangGraph" },
      { label: "Strands SDK" },
      { label: "AWS Bedrock" },
      { label: "Claude Code" },
      { label: "Hybrid Search (BM25 + RRF)" },
      { label: "Reranking" },
      { label: "Vector Search (pgvector)" },
      { label: "Guardrails & Agent Governance" },
    ],
  },
  {
    name: "Backend",
    tags: [
      { label: "Python / FastAPI", highlight: true },
      { label: "Go", highlight: true },
      { label: "REST APIs" },
      { label: "OpenAPI" },
      { label: "Microservices" },
      { label: "Redis Streams & RQ" },
    ],
  },
  {
    name: "Frontend",
    tags: [
      { label: "React", highlight: true },
      { label: "TypeScript" },
      { label: "JavaScript" },
      { label: "SSE / Streaming" },
    ],
  },
  {
    name: "Databases",
    tags: [
      { label: "PostgreSQL + pgvector" },
      { label: "MySQL" },
      { label: "MongoDB" },
      { label: "Redis" },
      { label: "CouchDB" },
      { label: "SingleStore" },
      { label: "FalkorDB" },
    ],
  },
  {
    name: "DevOps & Infra",
    tags: [
      { label: "Docker" },
      { label: "Kubernetes" },
      { label: "CI/CD" },
      { label: "GitHub Actions" },
      { label: "Langfuse" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="max-w">
        <div className="skills-header">
          <div>
            <div className="section-tag">Skills &amp; Stack</div>
            <h2 className="section-title">What I work with</h2>
            <p className="section-sub">
              Technologies I reach for when shipping real systems, not just
              listed but actually used.
            </p>
          </div>
        </div>
        <div className="skill-groups reveal">
          {skillGroups.map((group) => (
            <div
              className={`skill-group${group.wide ? " skill-group--wide" : ""}`}
              key={group.name}
            >
              <div className="skill-group-name">{group.name}</div>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span
                    className={`skill-tag${tag.highlight ? " highlight" : ""}`}
                    key={tag.label}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
