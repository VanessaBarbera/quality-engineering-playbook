import http from 'node:http';

const port = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'GET' && req.url === '/api/health') {
    res.writeHead(200);
    res.end(JSON.stringify({
      service: 'finflow-demo',
      status: 'UP'
    }));
    return;
  }

  if (req.method === 'POST' && req.url === '/api/simulations') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      let payload;

      try {
        payload = JSON.parse(body || '{}');
      } catch {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'invalid_json' }));
        return;
      }

      if (!payload.amount || !payload.term) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: 'amount_and_term_are_required' }));
        return;
      }

      const monthlyRate = 0.019;
      const installment = Number(
        ((payload.amount * (1 + monthlyRate * payload.term)) / payload.term).toFixed(2)
      );

      res.writeHead(201);
      res.end(JSON.stringify({
        simulationId: 'SIM-PORTFOLIO-001',
        amount: payload.amount,
        term: payload.term,
        monthlyRate,
        installment,
        status: 'AVAILABLE'
      }));
    });
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'not_found' }));
});

server.listen(port, '127.0.0.1', () => {
  console.log(`FinFlow demo server running on http://127.0.0.1:${port}`);
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
