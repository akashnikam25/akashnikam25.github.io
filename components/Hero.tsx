"use client";

import { useEffect, useRef } from "react";

type TermLine =
  | { type: "cmd"; prompt: string; text: string }
  | { type: "out"; text: string }
  | { type: "agent"; label: string; text: string }
  | { type: "success"; text: string };

const termLines: TermLine[] = [
  { type: "cmd", prompt: "❯", text: "./can_parser --proto j1939 --rate 1000hz" },
  { type: "out", text: "  Initializing protocol stack..." },
  { type: "agent", label: "[parser]", text: "Decoding ISOBUS frames → byte order + signal extraction OK" },
  { type: "agent", label: "[state-machine]", text: "Connection lifecycle: recovery path triggered → restored in 0.4s" },
  { type: "agent", label: "[audit-log]", text: "PostgreSQL append-only commit · ACID verified · 0 silent failures" },
  { type: "agent", label: "[health]", text: "Heartbeat 1s · RTT nominal · 0 missed disconnects" },
  { type: "success", text: "  ✓ All systems healthy · throughput nominal" },
  { type: "out", text: "  Rate: 1,000 Hz  |  Latency: <1ms  |  False positives: <0.1%" },
];

const roles = [
  "Senior Software Engineer",
  "C++ & Distributed Systems",
  "PostgreSQL & Database Internals",
  "Building reliable systems software",
];

export default function Hero() {
  const termBodyRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLSpanElement>(null);

  // Terminal animation: types out scripted log lines, then loops.
  useEffect(() => {
    const node = termBodyRef.current;
    if (!node) return;
    const termBody: HTMLDivElement = node;

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, delay: number) => {
      timeouts.push(setTimeout(fn, delay));
    };

    let termIdx = 0;
    function renderTermLine(line: TermLine) {
      const div = document.createElement("div");
      div.className = "term-line";
      if (line.type === "cmd") {
        div.innerHTML = `<span class="prompt">${line.prompt}</span><span class="cmd">${line.text}</span>`;
      } else if (line.type === "agent") {
        div.innerHTML = `<span class="agent-name">${line.label}</span><span class="out"> ${line.text}</span>`;
      } else if (line.type === "success") {
        div.innerHTML = `<span class="success">${line.text}</span>`;
      } else {
        div.innerHTML = `<span class="out">${line.text}</span>`;
      }
      div.style.opacity = "0";
      div.style.transform = "translateY(4px)";
      div.style.transition = "opacity 0.3s, transform 0.3s";
      termBody.appendChild(div);
      requestAnimationFrame(() => {
        div.style.opacity = "1";
        div.style.transform = "none";
      });
    }
    function runTerminal() {
      if (termIdx < termLines.length) {
        renderTermLine(termLines[termIdx++]);
        schedule(runTerminal, termIdx === 1 ? 400 : 550 + Math.random() * 300);
      } else {
        const cur = document.createElement("div");
        cur.className = "term-cursor-line";
        cur.innerHTML = '<span class="prompt">❯</span><span class="term-blink"></span>';
        termBody.appendChild(cur);
        schedule(() => {
          termBody.innerHTML = "";
          termIdx = 0;
          runTerminal();
        }, 4000);
      }
    }
    schedule(runTerminal, 800);

    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Typewriter: cycles through role strings, typing then deleting each.
  useEffect(() => {
    const node = typewriterRef.current;
    if (!node) return;
    const tw: HTMLSpanElement = node;

    let ri = 0;
    let ci = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function type() {
      const cur = roles[ri];
      if (!deleting) {
        ci++;
        tw.textContent = cur.slice(0, ci);
        if (ci === cur.length) {
          deleting = true;
          timeoutId = setTimeout(type, 2200);
          return;
        }
      } else {
        ci--;
        tw.textContent = cur.slice(0, ci);
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % roles.length;
        }
      }
      timeoutId = setTimeout(type, deleting ? 40 : 75);
    }
    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero">
      <div className="hero-grid"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>Available for collaborations</span>
          </div>
          <h1 className="hero-name">
            <span className="line1">Akash</span>
            <span className="line2">Nikam</span>
          </h1>
          <div className="hero-role">
            <span ref={typewriterRef} id="typewriter"></span>
            <span className="cursor"></span>
          </div>
          <p className="hero-desc">
            Building reliable <strong>systems software</strong> in C++ and Go —
            real-time protocol stacks, connection lifecycle state machines, and{" "}
            <strong>PostgreSQL</strong>-backed platforms with zero silent
            failures. Senior Software Engineer at John Deere, working across
            large-scale C++14/17 codebases, embedded real-time systems, and
            distributed data infrastructure.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View my work ↓
            </a>
            <a
              href="https://github.com/akashnikam25"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              GitHub ↗
            </a>
          </div>
          <div className="hero-stats" style={{ flexWrap: "wrap", gap: 32 }}>
            <div>
              <div className="stat-num">5+</div>
              <div className="stat-label">Years experience</div>
            </div>
            <div>
              <div className="stat-num">1,000Hz</div>
              <div className="stat-label">Real-time CAN bus throughput</div>
            </div>
            <div>
              <div className="stat-num">C++14/17</div>
              <div className="stat-label">Production-scale systems</div>
            </div>
            <div>
              <div className="stat-num">6+</div>
              <div className="stat-label">Projects shipped</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="agent-terminal">
            <div className="agent-terminal-bar">
              <span className="term-dot term-dot-r"></span>
              <span className="term-dot term-dot-y"></span>
              <span className="term-dot term-dot-g"></span>
              <span className="term-title">can_parser.cpp</span>
              <span className="term-status"></span>
            </div>
            <div className="agent-terminal-body" id="term-body" ref={termBodyRef}></div>
          </div>
          <div className="hero-mini-cards">
            <div className="hero-mini-card">
              <div className="mini-card-icon">⚙️</div>
              <div>
                <div className="mini-card-val">1,000 Hz</div>
                <div className="mini-card-label">CAN bus parsing, sub-ms latency</div>
              </div>
            </div>
            <div className="hero-mini-card">
              <div className="mini-card-icon">🗄️</div>
              <div>
                <div className="mini-card-val">PostgreSQL</div>
                <div className="mini-card-label">ACID-compliant audit logs in prod</div>
              </div>
            </div>
            <div className="hero-mini-card">
              <div className="mini-card-icon">🔌</div>
              <div>
                <div className="mini-card-val">50+</div>
                <div className="mini-card-label">.proto schemas authored</div>
              </div>
            </div>
            <div className="hero-mini-card">
              <div className="mini-card-icon">🛡️</div>
              <div>
                <div className="mini-card-val">&lt;0.1%</div>
                <div className="mini-card-label">false positive rate, 0 missed disconnects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
