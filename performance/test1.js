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
  const params = { timeout: '60s' };

  //Get All Users
  let res1 = http.get('https://jsonplaceholder.typicode.com/users', params);
  check(res1, { 'All Users 200': (r) => r.status === 200 });

  //Get Single User (New!)
  let res2 = http.get('https://jsonplaceholder.typicode.com/users/1', params);
  check(res2, { 'Single User 200': (r) => r.status === 200 });

  sleep(1);
}
