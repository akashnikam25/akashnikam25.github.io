type SkillGroup = {
  name: string;
  tags: { label: string; highlight?: boolean }[];
};

const skillGroups: SkillGroup[] = [
  {
    name: "AI & Agents",
    tags: [
      { label: "Agentic AI", highlight: true },
      { label: "LLMs", highlight: true },
      { label: "Claude / MCP", highlight: true },
      { label: "RAG" },
      { label: "AI Pipelines" },
      { label: "Prompt Engineering" },
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
  {
    name: "Systems",
    tags: [
      { label: "C++" },
      { label: "CAN Bus" },
      { label: "Real-time Systems" },
      { label: "Embedded" },
      { label: "Telemetry" },
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
              Technologies I reach for when shipping real systems - not just
              listed, actually used.
            </p>
          </div>
        </div>
        <div className="skill-groups reveal">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.name}>
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
