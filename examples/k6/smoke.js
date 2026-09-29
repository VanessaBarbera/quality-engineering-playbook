// Exemplo ilustrativo de smoke de performance com k6.
// A URL deve ser substituída por um ambiente autorizado para testes.

import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 1,
  duration: '10s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<500']
  }
};

export default function () {
  const response = http.get('https://example.test/api/health');

  check(response, {
    'status is 200': (r) => r.status === 200
  });
}
