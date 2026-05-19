import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Mermaid from '@theme/Mermaid';
import styles from './index.module.css';

const SECTIONS = [
  {
    num: '01', name: 'Model Inference Core',
    slug: 'model-inference-core', count: 17,
    blurb: 'Tokenization, attention, KV cache, batching, speculative decoding',
  },
  {
    num: '02', name: 'Model Optimization',
    slug: 'model-optimization', count: 11,
    blurb: 'Quantization, LoRA/QLoRA, fine-tuning, RLHF, DPO, distillation',
  },
  {
    num: '03', name: 'Serving Infrastructure',
    slug: 'serving-infrastructure', count: 15,
    blurb: 'vLLM, TGI, TensorRT-LLM, parallelism strategies, serving metrics',
  },
  {
    num: '04', name: 'Retrieval & Memory',
    slug: 'retrieval-memory', count: 12,
    blurb: 'RAG, vector databases, chunking, hybrid search, GraphRAG',
  },
  {
    num: '05', name: 'Agents & Orchestration',
    slug: 'agents-orchestration', count: 15,
    blurb: 'Agents, MCP, LangGraph, multi-agent systems, tool calling',
  },
  {
    num: '06', name: 'Prompting & Control',
    slug: 'prompting-control', count: 9,
    blurb: 'Prompting techniques, sampling parameters, structured output',
  },
  {
    num: '07', name: 'Evaluation & Quality',
    slug: 'evaluation-quality', count: 13,
    blurb: 'RAGAS, LLM-as-judge, golden datasets, CI/CD eval gates',
  },
  {
    num: '08', name: 'Observability & Ops',
    slug: 'observability-ops', count: 14,
    blurb: 'LLMOps, tracing, drift detection, cost tracking, Langfuse',
  },
  {
    num: '09', name: 'Integration & Cloud',
    slug: 'integration-cloud', count: 15,
    blurb: 'AI gateways, routing, streaming, cloud platforms, hybrid deployment',
  },
  {
    num: '10', name: 'Safety & Governance',
    slug: 'safety-governance', count: 15,
    blurb: 'Guardrails, PII redaction, red-teaming, EU AI Act, NIST RMF',
  },
];

const ARCHITECTURE_DIAGRAM = `flowchart TD
    subgraph clients["Clients"]
        C1["Web / App · SSE streaming"]
        C2["API clients · REST / SDK"]
        C3["Internal tools · CRM · ERP · Slack"]
        C4["Agent callers · A2A / MCP"]
    end
    subgraph gateway["Gateway"]
        GW["AI Gateway\\nAuth · Rate limits · Model router"]
        IG["Input guardrails\\nPII redaction · Content filter"]
    end
    subgraph orch["Orchestration"]
        AO["Agent orchestrator · LangGraph / SDK"]
        TM["Tool / MCP layer · APIs · DBs · Search"]
        PM["Prompt manager · Versioning · Templates"]
    end
    subgraph serving["Model Serving"]
        PW["Prefill workers\\nPrompt compute"] --> KV["KV cache store\\nPrefix caching"]
        KV --> DW["Decode workers\\nSpec. decoding"]
        MW["Model weights\\nQuant / LoRA"]
    end
    subgraph datamem["Data & Memory"]
        VD["Vector DB · ANN"]
        DI["Doc ingestion · Chunk · Index"]
        AM["Agent memory · Working / Episodic"]
    end
    subgraph evalobs["Eval & Observability"]
        RE["RAG evaluation · RAGAS"]
        LO["LLM observability · OTel · Tracing"]
        EG["CI/CD eval gates"]
        OG["Output guardrails"]
    end
    subgraph gov["Governance"]
        AA["Access & audit · RBAC"]
        CO["Compliance · EU AI Act · NIST RMF"]
        CT["Cost tracking · Token usage · SLO"]
        VS["Versioning & Rollback"]
    end
    clients --> gateway --> orch --> serving
    serving --> datamem
    serving --> evalobs
    datamem --> evalobs
    evalobs --> gov`;

function SectionCard({ section }) {
  return (
    <Link
      to={`/docs/${section.slug}`}
      className={styles.sectionCard}
    >
      <span className={styles.sectionNum}>{section.num}</span>
      <h3 className={styles.sectionName}>{section.name}</h3>
      <p className={styles.sectionBlurb}>{section.blurb}</p>
      <span className={styles.sectionCount}>{section.count} topics</span>
    </Link>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <main>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>AI Systems Engineering</p>
            <h1 className={styles.heroTitle}>
              The full stack of<br />
              <span className={styles.heroAccent}>production AI</span>
            </h1>
            <p className={styles.heroSub}>
              136 topics across inference, optimization, agents, evaluation, and governance —
              written for engineers building and operating AI systems.
            </p>
            <Link
              className={styles.heroCta}
              to="/docs/model-inference-core"
            >
              Explore topics →
            </Link>
          </div>
        </section>

        <div className={styles.divider} />

        {/* ── Section Grid ── */}
        <section className={styles.gridSection}>
          <div className={styles.gridInner}>
            <div className={styles.sectionGrid}>
              {SECTIONS.map(s => <SectionCard key={s.num} section={s} />)}
            </div>
          </div>
        </section>

        <div className={styles.divider} />

        {/* ── Architecture ── */}
        <section className={styles.archSection}>
          <div className={styles.archInner}>
            <p className={styles.archLabel}>Architecture overview</p>
            <p className={styles.archSub}>
              How all layers connect in a production AI system
            </p>
            <div className={styles.archDiagram}>
              <Mermaid value={ARCHITECTURE_DIAGRAM} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
