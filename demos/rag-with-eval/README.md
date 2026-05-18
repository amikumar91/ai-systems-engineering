# Demo: rag-with-eval

> End-to-end RAG pipeline with RAGAS evaluation baked in from the start.

## What this covers
- Document ingestion and chunking
- Embedding and vector storage (ChromaDB)
- Hybrid retrieval (BM25 + dense)
- LLM generation over retrieved context
- RAGAS evaluation: faithfulness, answer relevancy, context recall

## Status
🔴 Not built yet — build this after reading [rag.md](../../03-retrieval-memory/rag.md) and [ragas.md](../../06-evaluation/ragas.md)

## Files
```
rag-with-eval/
├── README.md
├── ingest.py           ← load docs, chunk, embed, store in vector DB
├── retrieve.py         ← hybrid search: BM25 + dense retrieval
├── generate.py         ← prompt construction + LLM call
├── pipeline.py         ← end-to-end: question → answer
├── evaluate.py         ← RAGAS evaluation on a test set
└── data/
    └── sample_docs/    ← put test documents here
```

## Prerequisites
- `pip install langchain chromadb ragas openai sentence-transformers rank-bm25`

## Build notes
> _Add observations here as you build it._
