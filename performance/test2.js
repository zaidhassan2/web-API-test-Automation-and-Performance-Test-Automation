import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 3 },
    { duration: '10s', target: 3 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  const params = { headers: { 'Content-Type': 'application/json' }, timeout: '60s' };

  // Create Post
  const payload = JSON.stringify({ title: 'Kali Test', userId: 1 });
  let res1 = http.post('https://jsonplaceholder.typicode.com/posts', payload, params);
  check(res1, { 'Create Post 201': (r) => r.status === 201 });

  // Delete Post (New!)
  let res2 = http.del('https://jsonplaceholder.typicode.com/posts/1', null, params);
  check(res2, { 'Delete Post 200': (r) => r.status === 200 });

  sleep(1);
}
