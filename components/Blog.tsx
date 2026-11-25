// Add real articles here. A card only appears when it has its own URL,
// so the section never shows placeholders that all point to the profile page.
const posts: { title: string; tag: string; url?: string }[] = [];

const MEDIUM_URL = "https://medium.com/@akash2018nikam";

export default function Blog() {
  const published = posts.filter((p) => p.url);
  return (
    <section id="blog">
      <div className="max-w">
        <div className="blog-inner">
          <div className="blog-left reveal">
            <div className="section-tag">Writing</div>
            <h2 className="section-title">Thoughts &amp; articles</h2>
            <p className="section-sub">
              I write about AI systems and lessons from shipping production
              software.
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
          {published.length > 0 && (
            <div className="blog-preview reveal">
              {published.map((post) => (
                <a
                  href={post.url}
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
          )}
        </div>
      </div>
    </section>
  );
}
