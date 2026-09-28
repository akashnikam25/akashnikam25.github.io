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
      { label: "Agentic RAG", highlight: true },
      { label: "Multi-Agent Systems", highlight: true },
      { label: "RAG", highlight: true },
      { label: "MCP", highlight: true },
      { label: "LLM-as-Judge Evaluation", highlight: true },
      { label: "LangGraph" },
      { label: "LangChain" },
      { label: "AWS Bedrock" },
      { label: "Hybrid Search (BM25 + RRF)" },
      { label: "Vector Search (Qdrant / OpenSearch)" },
      { label: "Context & Prompt Engineering" },
      { label: "AI Agent Governance" },
    ],
  },
  {
    name: "Backend",
    tags: [
      { label: "Go", highlight: true },
      { label: "Python / FastAPI", highlight: true },
      { label: "gRPC" },
      { label: "Protocol Buffers" },
      { label: "REST APIs" },
      { label: "Microservices" },
    ],
  },
  {
    name: "Frontend",
    tags: [
      { label: "TypeScript", highlight: true },
      { label: "React + Vite" },
      { label: "JavaScript" },
      { label: "WebRTC" },
      { label: "SSE / Streaming" },
    ],
  },
  {
    name: "Databases",
    tags: [
      { label: "Postgres" },
      { label: "MongoDB" },
      { label: "Redis" },
      { label: "DynamoDB" },
      { label: "CouchDB" },
      { label: "Singlestore" },
    ],
  },
  {
    name: "DevOps & Infra",
    tags: [
      { label: "Docker" },
      { label: "Kubernetes" },
      { label: "Nginx" },
      { label: "CI/CD" },
      { label: "GitHub Actions" },
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
