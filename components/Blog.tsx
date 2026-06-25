const posts = [
  { title: "AI Agents & the SDLC", tag: "AI Systems" },
  { title: "Designing production RAG systems", tag: "RAG · Retrieval" },
  { title: "Event-driven integrations done right", tag: "Backend" },
];

const MEDIUM_URL = "https://medium.com/@akash2018nikam";

export default function Blog() {
  return (
    <section id="blog">
      <div className="max-w">
        <div className="blog-inner">
          <div className="blog-left reveal">
            <div className="section-tag">Writing</div>
            <h2 className="section-title">Thoughts &amp; articles</h2>
            <p className="section-sub">
              I write about AI systems, distributed infrastructure, and
              lessons from shipping production software.
            </p>
            <a
              href={MEDIUM_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: 8 }}
            >
              Read on Medium ↗
            </a>
          </div>
          <div className="blog-preview reveal">
            {posts.map((post) => (
              <a
                href={MEDIUM_URL}
                target="_blank"
                rel="noreferrer"
                className="blog-card"
                key={post.title}
              >
                <div>
                  <div className="blog-card-title">{post.title}</div>
                  <div className="blog-card-tag">{post.tag}</div>
                </div>
                <div className="blog-icon">↗</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
