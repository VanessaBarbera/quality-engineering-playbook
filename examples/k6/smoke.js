import http from 'k6/http';
import { check } from 'k6';

const baseUrl = __ENV.BASE_URL || 'http://127.0.0.1:3000';

export const options = {
  vus: 5,
  duration: '10s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<500'],
    checks: ['rate>0.99']
  }
};

export default function () {
  const health = http.get(`${baseUrl}/api/health`);

  check(health, {
    'health status is 200': (r) => r.status === 200,
    'service is UP': (r) => r.json('status') === 'UP'
  });

  const simulation = http.post(
    `${baseUrl}/api/simulations`,
    JSON.stringify({
      amount: 10000,
      term: 12
    }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  check(simulation, {
    'simulation status is 201': (r) => r.status === 201,
    'simulation id is returned': (r) => Boolean(r.json('simulationId')),
    'simulation status is AVAILABLE': (r) => r.json('status') === 'AVAILABLE',
    'installment is positive': (r) => Number(r.json('installment')) > 0
  });
}
