import type { Metadata } from "next";
import Link from "next/link";
import Motion from "@/components/Motion";
import { Delta, Flow, Footer, Header, LINKS, idx } from "@/components/ui";

export const metadata: Metadata = {
  title: "Case study: plant-maintenance RAG copilot | Akash Nikam",
  description:
    "A grounded RAG copilot for 30+ shop-floor technicians over 500+ SOPs: filter-first hybrid search, checks in code, and a release gate with zero safety failures.",
  alternates: { canonical: "/work/maintenance-copilot/" },
  openGraph: {
    title: "Case study: plant-maintenance RAG copilot",
    description:
      "Recall@10 from 76% to 92% and safety pass rate from 85% to 99%, with a copilot that says “not found” instead of guessing.",
    url: "https://www.akashnikam.in/work/maintenance-copilot/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Akash Nikam, AI Engineer" }],
  },
};

const steps = [
  { title: "Resolve the machine", body: "Turn shop-floor nicknames into one machine. If two match, ask which one" },
  { title: "Filter first", body: "Own plant, current SOP revision, approved tips only. Done in the database" },
  { title: "Hybrid search", body: "Keywords and meaning together, then a reranker keeps the best few" },
  { title: "Grounded answer", body: "SOP beats history, history beats tips. Every claim names its source" },
  { title: "Checks in code", body: "Numbers must appear in a source; policy and not-found rules run last" },
];

const ingestion = ["Load + fingerprint", "OCR (EN + DE)", "Clean + log", "Section chunks", "Validate", "Embed"];

const answerRules = [
  { title: "Safety first", body: "The lockout warning comes before any repair step. Code adds it, so the model can't forget it." },
  { title: "Sources shown", body: "Every answer names the SOP and its revision, or the past repair it came from." },
  { title: "Tips are labeled", body: "Reviewed veteran tips appear as “veteran practice, not an official SOP”, after the SOP steps." },
  { title: "Short", body: "A technician at a stopped machine wants the next step, not an essay." },
];

const decisions = [
  {
    title: "Filter before search, in the database",
    body: "Plant, document status and machine family are SQL filters that run before any search. The model never sees another plant's records or a replaced SOP, so it can't quote them.",
    rejected: "searching everything and asking the prompt to ignore what doesn't apply. One missed instruction would serve an old limit.",
  },
  {
    title: "Say “no approved procedure found” instead of guessing",
    body: "If no result clears the relevance threshold, or the machine name doesn't exist, the copilot says so and points to the supervisor. It never reuses another machine's steps.",
    rejected: "always answering. A confident wrong torque value or repair step costs more than a missing answer.",
  },
  {
    title: "Safety is pass/fail, not an average",
    body: "Safety-critical questions (bypass requests, skipped lockout, other-plant data, invented machines) get yes/no checks. One failure blocks the release, whatever the average score says.",
    rejected: "a single quality score. A 9 out of 10 average can hide one dangerous answer.",
  },
  {
    title: "Guardrails in code, not in the prompt",
    body: "Code checks that every number in the answer appears in a retrieved chunk, adds the safety text, and applies the refusal policy. The prompt asks for the same things; code makes sure.",
    rejected: "trusting the model to follow the system prompt every time.",
  },
];

const failures = [
  { tag: "Replaced SOP served", fix: "Filter to the current revision before searching" },
  { tag: "Other plant's data shown", fix: "Plant filter from the user's login, in the database" },
  { tag: "Machine name not resolved", fix: "Alias table, and a question back when two machines match" },
  { tag: "Invented answer", fix: "Not-found threshold, tuned on the dev set only" },
  { tag: "Unreviewed tip served", fix: "Approved-only filter and a visible tip label" },
  { tag: "Over-refusal", fix: "Keep answering physical safety questions, like how to apply lockout" },
];

const next = [
  { title: "Fuzzy and German alias matching.", body: "Typos and German machine names should resolve as well as the English ones." },
  { title: "A classifier for refusals.", body: "Text rules can pass for the wrong reason; a trained guard is harder to fool." },
  { title: "A validated LLM judge.", body: "Grade answers by rubric at scale, but only after it agrees with human grades." },
  { title: "Learning from closed repairs.", body: "Draft a failure record from each repair discussion, saved only after a technician confirms it." },
];

export default function MaintenanceCopilot() {
  return (
    <>
      <Motion />
      <div className="page">
        <div className="grid-paper" aria-hidden="true" />
        <div className="wrap">
          <Header home={false} />
        </div>
        <main id="main" className="wrap">
          <section className="cs-hero">
            <Link href="/#work" className="text-link reveal" style={idx(0)}>
              <span aria-hidden="true">←</span> All work
            </Link>
            <span className="eyebrow reveal" style={idx(0)}>Case study 02 · John Deere</span>
            <h1 className="reveal" style={idx(1)}>A maintenance copilot that would rather say &ldquo;not found&rdquo; than guess</h1>
            <p className="reveal" style={idx(2)}>
              Grounded answers on shop-floor tablets from 500+ SOPs and 3,000+ work orders a year, for the
              technicians who keep a production line running.
            </p>
            <span className="section-note reveal" style={idx(3)}>
              Described without internal names, data or code.
            </span>
          </section>

          <dl className="keyfacts reveal">
            <div>
              <dt>Users</dt>
              <dd>30+ shop-floor technicians</dd>
            </div>
            <div>
              <dt>Sources</dt>
              <dd>500+ SOPs, 3,000+ work orders a year</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>Python, PostgreSQL + pgvector, OCR, hybrid search, reranking</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>Built ingestion, retrieval, guardrails and the eval harness; on site at the plant in Germany</dd>
            </div>
          </dl>

          <section className="section prose-cols">
            <div className="reveal">
              <span className="eyebrow">The problem</span>
              <h2>A stopped machine, and the answer is in three places</h2>
            </div>
            <div className="reveal" style={idx(1)}>
              <p>
                When a machine stops, a technician needs the current procedure, the repair history for that
                machine and the last root cause. That knowledge sat in document folders, the maintenance
                system and the heads of veteran technicians.
              </p>
              <p>
                SOPs change by revision and carry safety steps, so the bar was different from a normal chatbot:
                the answer has to come from the current approved document, show where it came from, and never
                invent a number.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="how">
            <div className="section-head reveal">
              <span className="eyebrow">How it works</span>
              <h2 id="how">From question to grounded answer</h2>
            </div>
            <ol className="pipeline" aria-label="Question pipeline">
              {steps.map((s, i) => (
                <li className="card pipe-step" style={idx(i)} key={s.title}>
                  <span className="pipe-num" aria-hidden="true">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>

            <div className="card cs-panel reveal">
              <div className="section-head">
                <span className="eyebrow">Before any question: ingestion</span>
                <p className="section-note">
                  Scanned and digital SOPs, in English and German. Noise like page numbers and repeated
                  headers is removed and every removed line is logged. Warnings stay with their steps and
                  tables stay whole. If OCR can&apos;t read a number, the chunk is flagged, never guessed.
                </p>
              </div>
              <Flow label="Ingestion pipeline" steps={ingestion} />
            </div>

            <div className="section-head reveal" style={{ marginTop: 16 }}>
              <span className="eyebrow">What every answer looks like</span>
            </div>
            <div className="around">
              {answerRules.map((a, i) => (
                <div className="fact reveal" style={idx(i)} key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section" aria-labelledby="decisions">
            <div className="section-head reveal">
              <span className="eyebrow">Decisions</span>
              <h2 id="decisions">Four decisions that shaped it</h2>
            </div>
            <div className="decisions">
              {decisions.map((d, i) => (
                <article className="card decision reveal" key={d.title}>
                  <span className="kicker">Decision {i + 1}</span>
                  <div>
                    <h3>{d.title}</h3>
                    <p>{d.body}</p>
                    <p className="rejected">
                      <strong>Rejected:</strong> {d.rejected}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" aria-labelledby="eval">
            <div className="section-head reveal">
              <span className="eyebrow">Evaluation</span>
              <h2 id="eval">How I knew it was getting better</h2>
              <p className="section-note">
                Labeled questions split into a dev set for fixing and a hold-out set looked at once, at the end.
                Every failure gets a tag from the retrieval trace, and each release changes one thing.
              </p>
            </div>
            <div className="card fail-table reveal">
              <table>
                <caption className="sr-only">Failure types the eval tracks, and the fix for each</caption>
                <thead>
                  <tr>
                    <th scope="col">Failure the eval catches</th>
                    <th scope="col">What fixed it</th>
                  </tr>
                </thead>
                <tbody>
                  {failures.map((f) => (
                    <tr key={f.tag}>
                      <td className="mono">{f.tag}</td>
                      <td>{f.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Flow
              label="Release loop"
              steps={["Trace", "Tag failures", "Fix one thing", "Re-run dev", "Gate", "Release"]}
            />
            <p className="section-note reveal">
              The gate passes only with zero safety failures, a hold-out score no worse than before, and cost
              within budget. Questions that fail or get a thumbs-down in production become new test cases.
            </p>
          </section>

          <section className="section" aria-labelledby="results">
            <div className="section-head reveal">
              <span className="eyebrow">Results</span>
              <h2 id="results">Measured, not demoed</h2>
            </div>
            <div className="results">
              <div className="result reveal" style={idx(0)}>
                <span className="result-value">76% → 92%</span>
                <span className="result-label">retrieval recall@10, with hybrid search and reranking</span>
                <Delta before={76} after={92} label="Recall at 10" />
              </div>
              <div className="result reveal" style={idx(1)}>
                <span className="result-value">85% → 99%</span>
                <span className="result-label">safety pass rate on labeled questions, under a zero-failure release gate</span>
                <Delta before={85} after={99} label="Safety pass rate" />
              </div>
              <div className="result reveal" style={idx(2)}>
                <span className="result-value">30+</span>
                <span className="result-label">technicians using it on shop-floor tablets</span>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="next">
            <div className="section-head reveal">
              <span className="eyebrow">Next</span>
              <h2 id="next">What I&apos;d change next</h2>
            </div>
            <ul className="next-list">
              {next.map((n, i) => (
                <li className="reveal" style={idx(i)} key={n.title}>
                  <strong>{n.title}</strong> {n.body}
                </li>
              ))}
            </ul>
          </section>

          <div className="cs-foot">
            <Link href="/work/ai-assisted-sdlc/" className="text-link">
              Case study 03: AI-assisted SDLC <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <a href={`mailto:${LINKS.email}`} className="btn btn-primary">
              Talk about a similar system
            </a>
          </div>
        </main>
        <div className="wrap">
          <Footer />
        </div>
      </div>
    </>
  );
}
