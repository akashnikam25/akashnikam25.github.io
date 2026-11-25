type Award = {
  image: string;
  alt: string;
  title: string;
  reason: string;
  meta: string;
};

// Certificate images have the manager's name and the signature hidden.
const awards: Award[] = [
  {
    image: "/awards/award-2026-11-wow.png",
    alt: "WOW! Award certificate, November 2026",
    title: "WOW! Award",
    reason: "Completed a complex feature within a compressed timeline.",
    meta: "John Deere India recognition program · Nov 2026",
  },
  {
    image: "/awards/award-2026-08-creator.png",
    alt: "Exceptional Creator certificate, July to August 2026",
    title: "Exceptional Creator",
    reason:
      "Awarded by the embedded software leadership team for contributions during a two-month delivery cycle.",
    meta: "John Deere · Jul – Aug 2026",
  },
  {
    image: "/awards/award-2026-04-wow.png",
    alt: "WOW! Award certificate, April 2026",
    title: "WOW! Award",
    reason:
      "Exceptional cross-functional impact: led one product initiative while supporting two others.",
    meta: "John Deere India recognition program · Apr 2026",
  },
  {
    image: "/awards/award-2025-11-star.png",
    alt: "Star of the Month certificate, November 2025",
    title: "Star of the Month",
    reason:
      "Technical strength with customer focus and an innovative approach across two product initiatives.",
    meta: "John Deere India recognition program · Nov 2025",
  },
  {
    image: "/awards/award-2025-04-wow.png",
    alt: "WOW! Award certificate, April 2025",
    title: "WOW! Award",
    reason: "Business-logic development for a product documentation feature.",
    meta: "John Deere India recognition program · Apr 2025",
  },
];

export default function Awards() {
  return (
    <section id="awards">
      <div className="max-w">
        <div className="section-tag">Recognition</div>
        <h2 className="section-title">Awards &amp; Recognition</h2>
        <p className="section-sub">
          Recognized by John Deere for impactful, cross-functional
          contributions.
        </p>
        <div className="awards-grid">
          {awards.map((award) => (
            <div className="award-card reveal" key={award.title + award.meta}>
              <img src={award.image} alt={award.alt} loading="lazy" />
              <div className="award-card-body">
                <div className="award-card-title">{award.title}</div>
                <div className="award-card-reason">{award.reason}</div>
                <div className="award-card-meta">{award.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
