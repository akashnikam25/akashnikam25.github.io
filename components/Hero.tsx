"use client";

import { useEffect, useRef } from "react";

type TermLine =
  | { type: "cmd"; prompt: string; text: string }
  | { type: "out"; text: string }
  | { type: "agent"; label: string; text: string }
  | { type: "success"; text: string };

const termLines: TermLine[] = [
  { type: "cmd", prompt: "❯", text: "python agent_orchestrator.py --run" },
  { type: "out", text: "  Initializing SDLC agent network..." },
  { type: "agent", label: "[epic-agent]", text: "Parsing JIRA backlog → 14 epics mapped" },
  { type: "agent", label: "[story-agent]", text: "Generating user stories... ✓ 47 stories" },
  { type: "agent", label: "[code-agent]", text: "Reviewing PR #2341 → 3 suggestions" },
  { type: "agent", label: "[infra-agent]", text: "Docs updated for platform variant" },
  { type: "success", text: "  ✓ All agents healthy · 12/12 online" },
  { type: "out", text: "  Active teams: 4  |  Velocity +62%" },
];

const roles = [
  "Senior Software Engineer",
  "AI Agents Architect",
  "Backend Systems Builder",
  "Making teams 50–70% faster",
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
            Building <strong>AI-powered workflows</strong> that make engineering
            teams <strong>50–70% faster.</strong> Senior Software Engineer at John
            Deere, specializing in multi-agent systems, backend infrastructure,
            and real-time platforms.
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
              <div className="stat-num">12</div>
              <div className="stat-label">Agents built at Deere</div>
            </div>
            <div>
              <div className="stat-num">50%↑</div>
              <div className="stat-label">Team velocity gains</div>
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
              <span className="term-title">agent-orchestrator.py</span>
              <span className="term-status"></span>
            </div>
            <div className="agent-terminal-body" id="term-body" ref={termBodyRef}></div>
          </div>
          <div className="hero-mini-cards">
            <div className="hero-mini-card">
              <div className="mini-card-icon">🤖</div>
              <div>
                <div className="mini-card-val">12 Agents</div>
                <div className="mini-card-label">deployed at Deere</div>
              </div>
            </div>
            <div className="hero-mini-card">
              <div className="mini-card-icon">⚡</div>
              <div>
                <div className="mini-card-val">50–70%</div>
                <div className="mini-card-label">velocity gain</div>
              </div>
            </div>
            <div className="hero-mini-card">
              <div className="mini-card-icon">🔗</div>
              <div>
                <div className="mini-card-val">Full SDLC</div>
                <div className="mini-card-label">AI coverage</div>
              </div>
            </div>
            <div className="hero-mini-card">
              <div className="mini-card-icon">🌐</div>
              <div>
                <div className="mini-card-val">3–4 Teams</div>
                <div className="mini-card-label">actively using</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
