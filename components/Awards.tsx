type Award = {
  image: string;
  alt: string;
  title: string;
  reason: string;
  meta: string;
};

const awards: Award[] = [
  {
    image: "/awards/award1.png",
    alt: "WOW Award April 2026",
    title: "🌟 WOW! Award",
    reason:
      "Exceptional cross-functional impact by driving TDP, supporting PDP and Display CoC project",
    meta: "JDI R&R Program · Apr 2026",
  },
  {
    image: "/awards/award2.png",
    alt: "Star of the Month Award",
    title: "⭐ Star of the Month",
    reason:
      "Technical strength with customer focus and innovative approach for PDP and TDP project",
    meta: "JDI R&R Program · Nov 2025",
  },
  {
    image: "/awards/award3.png",
    alt: "WOW Award April 2025",
    title: "🌟 WOW! Award",
    reason: "Business Logic Development for Rebale Documentation",
    meta: "JDI R&R Program · Apr 2025",
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
              <img src={award.image} alt={award.alt} />
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
