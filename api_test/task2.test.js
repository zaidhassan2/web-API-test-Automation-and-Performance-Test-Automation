const request = require('supertest');
const baseURL = 'https://jsonplaceholder.typicode.com';

describe('Member 2: Posts Management', () => {

    jest.setTimeout(30000);

    test('GET List Posts (Status 200)', async () => {
        const response = await request(baseURL).get('/posts');
        expect(response.status).toBe(200);
    });

    test('POST Create Post (Status 201)', async () => {
        const payload = {
            title: 'Kali Linux Test',
            body: 'Testing API from Kali',
            userId: 1,
        };
        const response = await request(baseURL)
        .post('/posts')
        .send(payload);

        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Kali Linux Test');
    });

    test('PUT Update Post (Status 200)', async () => {
        const payload = {
            id: 1,
            title: 'Updated Title',
            body: 'Updated Body',
            userId: 1,
        };
        const response = await request(baseURL)
        .put('/posts/1')
        .send(payload);

        expect(response.status).toBe(200);
    });

    test('DELETE Post (Status 200)', async () => {
        const response = await request(baseURL).delete('/posts/1');
        expect(response.status).toBe(200);
    });
});
