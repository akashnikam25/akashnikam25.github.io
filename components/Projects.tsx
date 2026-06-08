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
      "16-step deterministic pipeline that turns natural language into engineering-grade heat exchanger designs - AI review at each step, real-time SSE streaming, agentic loops, and Anthropic API integration with rate limiting, retry logic, and connection pooling.",
    tags: ["AI Pipeline", "LLM", "SSE", "Python"],
    href: "https://github.com/Arken-AI",
  },
  {
    num: "02",
    name: "SmartHireX",
    description:
      "AI job platform with LLM-powered job matching, automated resume evaluation, and scrapers for LinkedIn and Naukri. Cuts job-search effort dramatically.",
    tags: ["LLM", "Scraping", "FastAPI", "React"],
    href: "https://github.com/SmartHireX",
  },
  {
    num: "03",
    name: "Personal Agent",
    description:
      "Your own personal AI agent - a self-hosted assistant that knows your context and acts on your behalf. Built with agentic patterns and MCP tooling.",
    tags: ["Agents", "MCP", "Claude"],
    href: "https://github.com/akashnikam25/personal-agent",
  },
  {
    num: "04",
    name: "Smart Job Matcher",
    description:
      "LLM-powered job matching engine - semantically ranks jobs against your profile, filters noise, and surfaces the right opportunities automatically.",
    tags: ["LLM", "Embeddings", "Python"],
    href: "https://github.com/akashnikam25/smart-job-matcher",
  },
  {
    num: "05",
    name: "2D Metaverse App",
    description:
      "A browser-based 2D metaverse with real-time multiplayer presence. Walk through virtual spaces, see other users move, and interact in a shared world.",
    tags: ["WebSockets", "TypeScript", "Canvas"],
    href: "https://github.com/akashnikam25/2dmetaverseapp",
  },
  {
    num: "06",
    name: "WebRTC P2P",
    description:
      "Peer-to-peer communication app built on WebRTC - direct browser-to-browser video, audio, and data channels with no server intermediary after handshake.",
    tags: ["WebRTC", "P2P", "JavaScript"],
    href: "https://github.com/akashnikam25/webrtcp2p",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="max-w">
        <div className="section-tag">Projects</div>
        <h2 className="section-title">Things I&apos;ve built</h2>
        <p className="section-sub">
          Personal and open-source work - from AI pipelines to real-time apps.
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
