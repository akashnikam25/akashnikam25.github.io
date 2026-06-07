export default function Contact() {
  return (
    <section id="contact">
      <div className="max-w">
        <div className="reveal">
          <div className="section-tag">Contact</div>
          <h2
            className="section-title"
            style={{ textAlign: "center", margin: "0 auto 16px" }}
          >
            Got something interesting?
          </h2>
          <p
            style={{
              color: "var(--muted)",
              maxWidth: 440,
              margin: "0 auto 8px",
              textAlign: "center",
              fontSize: 17,
              fontWeight: 300,
            }}
          >
            Whether it&apos;s a collaboration, a project idea, or just a
            curious question - I&apos;m all ears.
          </p>
          <a href="mailto:akashvnikam@gmail.com" className="contact-email">
            akashvnikam@gmail.com
          </a>
          <div className="contact-socials">
            <a
              href="https://github.com/akashnikam25"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/akash-nikam-profile/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://medium.com/@akash2018nikam"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
