# GraphRAG Usage Guide

## Documentation
[GraphRAG Getting Started Guide](https://microsoft.github.io/graphrag/get_started/)

---

## Commands

### 1. Create Index for Directory
```bash
graphrag index --root ./chatbot
```

### 2. Run any query related with our bot
```bash
graphrag query --root ./chatbot --method local --query "What is the main treatment for this disease?"
```
