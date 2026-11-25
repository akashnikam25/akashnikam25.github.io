import type { Metadata } from "next";
import Link from "next/link";
import Motion from "@/components/Motion";
import { Flow, Footer, Header, LINKS, Tags, idx } from "@/components/ui";

const ORG = "https://github.com/Arken-AI";
const TEAMMATE = "https://github.com/PranitDhane";

export const metadata: Metadata = {
  title: "Case study: Arken AI | Akash Nikam",
  description:
    "An open-source heat-exchanger design assistant: Claude drives a 16-step engineering pipeline, reviews every step, and never overrides the math or the hard rules.",
  alternates: { canonical: "/work/arken-ai/" },
  openGraph: {
    title: "Case study: Arken AI",
    description:
      "Claude tool calling in front of a deterministic engineering engine, with bounded AI review, human escalation, live streaming and an MCP server.",
    url: "https://www.akashnikam.in/work/arken-ai/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Akash Nikam, AI Engineer" }],
  },
};

const requestFlow = ["Chat request", "Claude extracts inputs", "Validate requirements", "16-step design", "Live step cards", "Design report"];

type AiMode = "always" | "anomaly" | "never";
const designSteps: { name: string; ai: AiMode }[] = [
  { name: "Requirements", ai: "never" },
  { name: "Heat duty", ai: "anomaly" },
  { name: "Fluid properties", ai: "anomaly" },
  { name: "TEMA geometry", ai: "always" },
  { name: "LMTD", ai: "anomaly" },
  { name: "Initial U", ai: "anomaly" },
  { name: "Tube-side h", ai: "anomaly" },
  { name: "Shell-side h", ai: "always" },
  { name: "Overall U", ai: "always" },
  { name: "Pressure drops", ai: "anomaly" },
  { name: "Area + overdesign", ai: "anomaly" },
  { name: "Convergence", ai: "never" },
  { name: "Vibration", ai: "always" },
  { name: "Mechanical", ai: "anomaly" },
  { name: "Cost", ai: "anomaly" },
  { name: "Final validation", ai: "always" },
];
const aiLabel: Record<AiMode, string> = {
  always: "AI reviews every run",
  anomaly: "AI reviews only on anomalies",
  never: "No AI",
};

const layers = [
  { title: "Deterministic math", body: "Correlations and property data compute the numbers. Same input, same output." },
  { title: "Hard rules", body: "Engineering limits the AI cannot override, written as code per step." },
  { title: "Bounded AI review", body: "Claude reads the result and returns one decision with a confidence score." },
  { title: "State update", body: "Only a reviewed, rule-passing result moves the design forward." },
];

const outcomes = [
  { title: "Proceed", body: "The step looks right; move on." },
  { title: "Correct", body: "Retry with a fix, told what failed last time. At most three tries." },
  { title: "Warn", body: "Continue, and show the engineer why it deserves a second look." },
  { title: "Escalate", body: "Pause and ask the engineer. Any confidence below 0.70 escalates." },
];

const decisions = [
  {
    title: "The AI reviews; it never calculates",
    body: "Every number comes from deterministic engineering code, and hard rules run before the model sees anything. Claude judges whether a result makes sense for this service, which is where judgment helps.",
    rejected: "letting the model compute heat-transfer values. It writes plausible numbers that are wrong.",
  },
  {
    title: "AI only where it pays",
    body: "Each step declares when review runs: always, only when something looks off, or never. Simple steps cost nothing, and the expensive judgment goes to geometry, heat-transfer coefficients and vibration.",
    rejected: "a model call on every step of every run, which adds cost and latency for no gain on simple arithmetic.",
  },
  {
    title: "When unsure, ask the engineer",
    body: "Low confidence or an Escalate decision pauses the pipeline and asks the user in the chat. The design continues from the same point once they answer.",
    rejected: "guessing through uncertainty to always return a design.",
  },
  {
    title: "Validate before you design",
    body: "Requirement validation returns a short-lived signed token (HMAC-SHA256). A design run only starts with a token that matches exactly those inputs, so the model can't skip the check or change inputs in between.",
    rejected: "trusting the model to call the tools in the right order.",
  },
  {
    title: "Fix upstream, not in place",
    body: "When a late step breaks a constraint, a redesign advisor changes one upstream design lever and reruns, with a history so it never tries the same fix twice and a budget so it stops.",
    rejected: "patching the failing step's output, which leaves earlier steps inconsistent.",
  },
  {
    title: "Progress you can replay",
    body: "The browser opens one stream for chat and one for design steps. Events go through Redis Streams, so a dropped connection replays what it missed instead of losing steps.",
    rejected: "proxying engine events through the chat service, which doubles the hops and loses events on reconnect.",
  },
];

const repos = [
  { name: "backend", what: "FastAPI orchestration, Claude tool loop, streaming" },
  { name: "frontend", what: "React 19 chat and live step cards" },
  { name: "hx_design_engine", what: "16-step engine, correlations, rules, AI reviewer" },
  { name: "docker", what: "Compose stack: engine, backend, MongoDB, Redis, nginx" },
];

const next = [
  { title: "Measure the reviewer.", body: "Score each step's AI decisions against labeled cases, so the confidence floor is set by data." },
  { title: "Run the engine on more than one instance.", body: "Move step events fully onto the shared stream so the engine can scale out." },
  { title: "CI on every repo.", body: "Run the 1,700+ engineering tests on each pull request." },
];

export default function ArkenAi() {
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
            <Link href="/#open-source" className="text-link reveal" style={idx(0)}>
              <span aria-hidden="true">←</span> All work
            </Link>
            <span className="eyebrow reveal" style={idx(0)}>Open source · 2026 · team of 2</span>
            <h1 className="reveal" style={idx(1)}>An AI design assistant that reviews the engineering and never does the math</h1>
            <p className="reveal" style={idx(2)}>
              Arken turns a plain-English request into an audited shell-and-tube heat-exchanger design. Claude drives a
              16-step engineering pipeline and reviews it, but hard engineering rules always win.
            </p>
            <div className="btn-row reveal" style={idx(3)}>
              <a href={ORG} className="btn btn-primary" target="_blank" rel="noreferrer">
                View on GitHub <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </section>

          <dl className="keyfacts reveal">
            <div>
              <dt>For</dt>
              <dd>Process engineers sizing shell-and-tube heat exchangers</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>
                Akash Nikam and{" "}
                <a href={TEAMMATE} target="_blank" rel="noreferrer">
                  PranitDhane
                </a>
              </dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>Claude tool calling, FastAPI, Redis Streams, MongoDB, React 19, Docker</dd>
            </div>
            <div>
              <dt>My part</dt>
              <dd>Orchestration and streaming, the MCP server, the signed requirements token, the redesign loop</dd>
            </div>
          </dl>

          <section className="section prose-cols">
            <div className="reveal">
              <span className="eyebrow">The problem</span>
              <h2>Plausible is not good enough in engineering</h2>
            </div>
            <div className="reveal" style={idx(1)}>
              <p>
                A process engineer asks something like &ldquo;cool crude oil from 150&nbsp;°C to 80&nbsp;°C with
                water&rdquo;. Getting to a design means fluid properties, heat-transfer coefficients, geometry,
                pressure drops, vibration checks and cost, each depending on the last.
              </p>
              <p>
                A language model alone will happily produce numbers that look right and aren&apos;t. The goal was a
                conversational assistant whose every number is computed, checked against engineering rules, and
                traceable step by step.
              </p>
            </div>
          </section>

          <section className="section" aria-labelledby="how">
            <div className="section-head reveal">
              <span className="eyebrow">How it works</span>
              <h2 id="how">From one sentence to a reviewed design</h2>
            </div>
            <div className="card cs-panel reveal">
              <Flow label="Request flow" steps={requestFlow} />
              <p className="section-note">
                Claude runs a streaming tool loop with two tools defined in YAML: validate the requirements, then
                start the design. Results stream to live step cards, and Claude writes the final report from the
                step records.
              </p>
            </div>

            <div className="section-head reveal" style={{ marginTop: 16 }}>
              <span className="eyebrow">The 16 steps, and where AI runs</span>
            </div>
            <ol className="hx-steps" aria-label="Design pipeline steps">
              {designSteps.map((s, i) => (
                <li className={`hx-step ai-${s.ai}`} style={idx(i)} key={s.name}>
                  <span className="hx-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="hx-name">{s.name}</span>
                  <span className="sr-only">{aiLabel[s.ai]}</span>
                </li>
              ))}
            </ol>
            <ul className="hx-legend" aria-hidden="true">
              <li><span className="dot ai-always" /> AI reviews every run</li>
              <li><span className="dot ai-anomaly" /> AI only on anomalies</li>
              <li><span className="dot ai-never" /> No AI</li>
            </ul>

            <div className="section-head reveal" style={{ marginTop: 16 }}>
              <span className="eyebrow">Inside every step: four layers</span>
            </div>
            <ol className="pipeline four" aria-label="Layers inside each step">
              {layers.map((l, i) => (
                <li className="card pipe-step" style={idx(i)} key={l.title}>
                  <span className="pipe-num" aria-hidden="true">{i + 1}</span>
                  <h3>{l.title}</h3>
                  <p>{l.body}</p>
                </li>
              ))}
            </ol>

            <div className="section-head reveal" style={{ marginTop: 16 }}>
              <span className="eyebrow">What the reviewer can decide</span>
            </div>
            <div className="around">
              {outcomes.map((o, i) => (
                <div className="fact reveal" style={idx(i)} key={o.title}>
                  <h3 className="mono">{o.title}</h3>
                  <p>{o.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section" aria-labelledby="decisions">
            <div className="section-head reveal">
              <span className="eyebrow">Decisions</span>
              <h2 id="decisions">Six decisions that shaped it</h2>
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

          <section className="section" aria-labelledby="mcp">
            <div className="section-head reveal">
              <span className="eyebrow">MCP</span>
              <h2 id="mcp">The same engine, from Claude Desktop</h2>
              <p className="section-note">
                I wrote an MCP server that exposes the engine as three tools. It reads the same YAML tool schemas as
                the backend, so the web app and Claude Desktop can never drift apart.
              </p>
            </div>
            <div className="two-up">
              <figure className="card transcript reveal">
                <figcaption className="kicker">In Claude Desktop</figcaption>
                <p className="t-q">
                  Design a heat exchanger to cool crude oil from 150&nbsp;°C to 80&nbsp;°C using cooling water. Hot side
                  flow rate is 10&nbsp;kg/s.
                </p>
                <ol className="t-options">
                  <li>hx_validate_requirements</li>
                  <li>hx_design</li>
                  <li className="t-rec">get_design_status</li>
                </ol>
              </figure>
              <div className="card transcript reveal" style={idx(1)}>
                <span className="kicker">Grounded in published engineering methods</span>
                <ul className="next-list plain">
                  <li><strong>Bell-Delaware</strong> for shell-side heat transfer, cross-checked with Kern. Over 30% apart escalates to the engineer.</li>
                  <li><strong>Property chain:</strong> IAPWS for water, CoolProp, petroleum correlations for crude, then thermo as a fallback.</li>
                  <li><strong>Standards:</strong> TEMA geometry and vibration checks, ASME wall thickness.</li>
                  <li><strong>Reference tests</strong> against textbook worked examples.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="numbers">
            <div className="section-head reveal">
              <span className="eyebrow">By the numbers</span>
              <h2 id="numbers">What&apos;s in the repos</h2>
            </div>
            <div className="results">
              <div className="result reveal" style={idx(0)}>
                <span className="result-value">16</span>
                <span className="result-label">design steps, each with its own rules file</span>
              </div>
              <div className="result reveal" style={idx(1)}>
                <span className="result-value">1,700+</span>
                <span className="result-label">engineering tests in the design engine</span>
              </div>
              <div className="result reveal" style={idx(2)}>
                <span className="result-value">17</span>
                <span className="result-label">prompt files, versioned as Markdown with prompt caching</span>
              </div>
              <div className="result reveal" style={idx(3)}>
                <span className="result-value">3</span>
                <span className="result-label">MCP tools for Claude Desktop</span>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="code">
            <div className="section-head reveal">
              <span className="eyebrow">Code</span>
              <h2 id="code">Read it on GitHub</h2>
            </div>
            <ul className="repo-list">
              {repos.map((r, i) => (
                <li className="reveal" style={idx(i)} key={r.name}>
                  <a href={`${ORG}/${r.name}`} target="_blank" rel="noreferrer" className="text-link ext mono">
                    Arken-AI/{r.name} <span className="arrow" aria-hidden="true">↗</span>
                  </a>
                  <span className="muted">{r.what}</span>
                </li>
              ))}
            </ul>
            <Tags items={["Claude Sonnet", "Tool calling", "MCP", "FastAPI", "Redis Streams", "SSE", "MongoDB", "React 19", "Docker"]} />
          </section>

          <section className="section" aria-labelledby="next">
            <div className="section-head reveal">
              <span className="eyebrow">Next</span>
              <h2 id="next">What we&apos;d change next</h2>
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
              <span aria-hidden="true">←</span> Case study 03: AI-assisted SDLC
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
