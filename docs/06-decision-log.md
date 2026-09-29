# Decision Log

Este documento registra decisões de qualidade e suas justificativas.

## ADR-QA-001 — Evitar concentração em E2E

**Decisão:** regras de negócio devem ser validadas prioritariamente em unitário, API ou integração.

**Motivo:** testes de interface são mais lentos e mais sujeitos a instabilidade.

**Consequência:** E2E fica reservado para jornadas críticas e integrações de ponta a ponta.

---

## ADR-QA-002 — Priorizar testes por risco

**Decisão:** cobertura e prioridade de execução serão proporcionais ao risco.

**Motivo:** nem todas as funcionalidades possuem o mesmo impacto.

**Consequência:** contratação, pagamentos e cálculos recebem maior profundidade que funcionalidades de consulta simples.

---

## ADR-QA-003 — Não usar retry como solução de flaky test

**Decisão:** retry não será o primeiro tratamento para testes instáveis.

**Motivo:** retry pode mascarar problemas de sincronização, dados, ambiente ou produto.

**Consequência:** falhas intermitentes devem gerar investigação e classificação de causa.

---

## ADR-QA-004 — Evidências técnicas para fluxos críticos

**Decisão:** cenários críticos devem produzir evidências além de screenshots.

**Motivo:** request/response, logs, banco e eventos aceleram análise de causa.

**Consequência:** automações devem facilitar diagnóstico quando falharem.
