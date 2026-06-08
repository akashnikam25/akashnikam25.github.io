type SkillGroup = {
  name: string;
  tags: { label: string; highlight?: boolean }[];
};

const skillGroups: SkillGroup[] = [
  {
    name: "Systems Languages",
    tags: [
      { label: "C++14/17", highlight: true },
      { label: "Go", highlight: true },
      { label: "Python" },
    ],
  },
  {
    name: "Database",
    tags: [
      { label: "PostgreSQL", highlight: true },
      { label: "Query Optimisation", highlight: true },
      { label: "TimescaleDB", highlight: true },
      { label: "SingleStore" },
      { label: "CouchDB" },
      { label: "MongoDB" },
      { label: "Qdrant" },
    ],
  },
  {
    name: "Systems / Embedded",
    tags: [
      { label: "CAN Bus", highlight: true },
      { label: "Real-time Systems", highlight: true },
      { label: "IPC" },
      { label: "gRPC" },
      { label: "MQTT" },
    ],
  },
  {
    name: "Build & Validation",
    tags: [
      { label: "CMake" },
      { label: "x86-64 + ARM Cross-compilation" },
      { label: "Jenkins CI/CD" },
      { label: "Google Test/Mock" },
    ],
  },
  {
    name: "Infrastructure",
    tags: [
      { label: "Kubernetes" },
      { label: "Docker" },
      { label: "AWS" },
      { label: "AKS" },
      { label: "GitHub Actions" },
    ],
  },
  {
    name: "AI & Agents",
    tags: [
      { label: "Agentic AI" },
      { label: "LLMs" },
      { label: "Claude / MCP" },
      { label: "RAG" },
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
