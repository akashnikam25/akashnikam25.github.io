# Akash Nikam
**AI Engineer (Dev + DevOps) · Agentic AI · RAG · LLM Platforms**
Pune, India · akashvnikam@gmail.com · github.com/akashnikam25 · linkedin.com/in/akash-nikam-profile · akashnikam25.github.io

## Summary
Hybrid AI engineer with 5+ years across application and platform engineering, building and
owning agentic AI end to end: LLM-powered workflows, autonomous agents, and multi-agent systems,
plus the CI/CD, infrastructure, observability, and DevSecOps that make them production-grade.
At John Deere I built EmbAI-ASCENT (a governed VS Code extension for the engineering SDLC),
PlantIQ (an access-controlled RAG copilot for plant-floor maintenance), and the AI Developer
Assistant Platform (a multi-agent agentic RAG system on AWS Bedrock) - deploying my own code
rather than handing it off. Ready to bring these patterns to go-to-market (GTM) application
stacks such as Salesforce and Slack on a cybersecurity-grade platform. Strong in Python,
TypeScript, and JavaScript; fluent in LangGraph, LangChain, MCP, RAG, and vector search.

## Skills
- **Agentic AI & Orchestration:** Agentic AI, Agentic RAG, Multi-Agent Systems, LangGraph,
  LangChain, MCP, AI Agent Governance, Context Engineering, tool-calling / function calling,
  model/provider routing, multi-model gateway patterns, context-window governance, memory
  management
- **RAG & Retrieval:** Vector databases (Qdrant; familiar with Pinecone/pgvector/Weaviate),
  OpenSearch, hybrid search (BM25 + dense, RRF fusion), semantic search, knowledge grounding,
  knowledge graphs (FalkorDB, tree-sitter), document parsing & structured extraction (Docling)
- **AI Reliability & Evals:** LLM-as-Judge evaluation (Claude Opus + GPT-4o), hallucination
  reduction, cross-model eval harness, regression testing for non-deterministic outputs,
  fallback / circuit-breaker / graceful degradation
- **Languages:** Python, TypeScript, JavaScript, Go, C++
- **Platform & DevOps:** Docker, Kubernetes, CI/CD (GitHub Actions, Copado), GitOps / trunk-based
  delivery, observability (tracing, logging, alerting, SLOs), AWS (Bedrock, Lambda, EKS), Nginx
- **DevSecOps:** OAuth 2.0, HMAC validation, secrets rotation (Fernet), idempotency,
  least-privilege IAM, supply-chain security, SAST/DAST awareness
- **Event-driven & Integration:** webhooks, Redis / RQ, Slack, REST, SOAP, gRPC, Protocol Buffers,
  multi-tenant isolation, SSE / streaming
- **Databases:** Postgres, MongoDB, Redis, CouchDB, DynamoDB
- *Continuous learning: expanding into Salesforce / Agentforce (Apex, LWC, Platform Events),
  Vertex AI, Terraform / CDK, and MLOps / AI-governance practices*

## Experience

### Senior Software Engineer, John Deere (JDTCI)
*Oct 2023 - Present · Pune, Hybrid*

**EmbAI-ASCENT (governed VS Code extension for the engineering SDLC):**
- Built **EmbAI-ASCENT**, a governed VS Code extension distributing vetted "agent packs" via a
  custom CLI (**Agent Package Manager**), with 3 **MCP servers** (Azure DevOps, Confluence,
  GitHub Enterprise) and 4 custom LM tools wired into Copilot Chat.
- Designed a **13-phase context-engineering webview** with keyword-scoring context assembly and
  **workspaceState**-backed session continuity, so engineers can resume multi-day planning
  threads without losing context.

**PlantIQ / Plant Brain (RAG copilot for plant-floor maintenance):**
- Built **PlantIQ** (Plant Brain), an access-controlled **RAG copilot** for plant-floor
  maintenance technicians: hybrid BM25 + dense (bge-small-en-v1.5) retrieval fused via
  **Reciprocal Rank Fusion** over Docling-chunked SOPs, serving at **P95 268ms**.
- Hardened PlantIQ with deterministic **fail-closed guardrails** (confidence gating, 15%
  grounding threshold), **JWT-derived** plant_id/org_id access scoping, and a **CI-gated
  evaluation harness** (dual LLM-as-Judge, Claude Opus + GPT-4o, 0.20 divergence flag).

**AI Developer Assistant Platform (multi-agent agentic RAG on AWS Bedrock):**
- Migrated a single-PDF chatbot into the **AI Developer Assistant Platform**: a **ReAct-based
  agentic RAG** system on **AWS Bedrock** across 7 Lambda-backed knowledge bases (Titan V2
  embeddings, OpenSearch Serverless).
- Built a **FalkorDB code knowledge graph** over 9 repositories (tree-sitter, 25 languages) and a
  **multi-agent orchestration layer** (Supervisor/Researcher/Coder/Writer) with a sequential RFI
  pipeline.
- Shipped an **MCP server** exposing 40+ tools / 140+ skills across Slack, CLI, web, and n8n,
  deployed on **EKS** with GitOps-driven CI/CD.

### Member of Technical Staff I (R&D), Mavenir
*Mar 2022 - Oct 2023 · Bengaluru, Remote*

- Built a high-frequency **Go** service for event-driven analytics: polls CouchDB every 100ms,
  matches epoch-time triggers, dispatches notifications, and auto-expires entries, using goroutines
  and channels for concurrent, non-blocking delivery at telecom scale.
- Used **SingleStore** for distributed data storage across Go microservices in production: query
  model, distributed data patterns, and real-time performance characteristics.
- Designed versioned **OpenAPI** specifications in Go, making APIs configurable across versions and
  cutting migration effort.
- Contributed to **NWDAF** on a Go microservice architecture deployed on **Kubernetes**:
  service-to-service APIs and distributed state management.

### Graduate Engineer, Mavenir
*Mar 2021 - Feb 2022 · Bengaluru, Remote*

- Wrote unit tests across microservices, improving coverage and reliability of core services.
- Triaged and root-caused production bugs on the Prediction Application across distributed Go
  services; used CouchDB for document management.

## Projects

**ARKEN AI** · Conversational AI engineering platform (Python, FastAPI, React/TS)
- Orchestration service routes natural language to Claude via a **YAML tool registry**
  (provider/model abstraction); adding a tool is a config change, not code.
- Bounded 4-layer pipeline: deterministic calculation, hard-rule validation the model cannot
  override, single Claude review (proceed / correct / warn / escalate), and state accumulation.
- Real-time **SSE over Redis Streams** (replay on reconnect) to a React 18 / Vite / Tailwind / TS
  UI with inline human-in-the-loop escalation.

**ZapBridge** · Event-driven GitHub-to-Slack agent platform (Python, FastAPI, Redis, RQ)
- Production **OAuth 2.0**: encrypt (Fernet), store, refresh, revoke, with a key-rotation script.
- **HMAC-SHA256** timing-safe webhook validation, Redis SETNX idempotency, and an RQ async worker
  with retry and dead-letter handling.
- GitHub REST integration (pagination + rate-limit backoff), Claude summarization agent, Slack
  delivery; replaces manual toil with a self-running event pipeline.

**Personal Agent** · Self-hosted AI assistant (Python, MCP)
- Built on agentic patterns and **MCP** tooling; an LLM-maintained knowledge base that ingests
  dropped documents and keeps an interlinked, cross-referenced wiki.

## Education
- **PG Diploma, Advanced Computing (PG-DAC)** · SunBeam Institute, 2020-2021
- **B.Tech, Electronics & Telecommunication** · Dr. B. A. Technological University, 2015-2019

## Certifications
- Anthropic · Claude with the Anthropic API (2026)
- Anthropic · Sub-Agent Skill (2026)
- Anthropic · Agent Skill (2026)
