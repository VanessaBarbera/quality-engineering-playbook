# Performance com k6

## Objetivo

Avaliar comportamento do sistema sob carga e identificar degradação antes que afete usuários.

## Tipos

- **Smoke:** carga mínima para validar script e ambiente.
- **Load:** comportamento na carga esperada.
- **Stress:** encontrar limites.
- **Spike:** aumento abrupto.
- **Soak:** estabilidade durante período prolongado.

## Exemplo k6

```javascript
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 10,
  duration: '30s'
};

export default function () {
  const response = http.get('https://example.test/api/health');

  check(response, {
    'status 200': (r) => r.status === 200,
    'response under 500ms': (r) => r.timings.duration < 500
  });
}
```

## Métricas

- p95 e p99;
- throughput;
- taxa de erro;
- tempo de resposta;
- saturação;
- uso de recursos.

## Princípio

Performance deve ter **objetivo e thresholds**, não apenas gerar volume de requisições.
