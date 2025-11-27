import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 3 },  // Low load for stability
    { duration: '10s', target: 3 }, 
    { duration: '5s', target: 0 }, 
  ],
};

export default function () {
  const params = { 
    headers: { 'Content-Type': 'application/json' },
    timeout: '60s'
  };

  // Get Comments
  let res1 = http.get('https://jsonplaceholder.typicode.com/comments?postId=1', params);
  check(res1, { 'Get Comments 200': (r) => r.status === 200 });

  // Create Comment
  const payload = JSON.stringify({
    postId: 1,
    name: 'Perf Test',
    email: 'perf@test.com',
    body: 'Load testing'
  });

  let res2 = http.post('https://jsonplaceholder.typicode.com/comments', payload, params);
  check(res2, { 'Create Comment 201': (r) => r.status === 201 });

  sleep(1);
}
