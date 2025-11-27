const request = require('supertest');
const baseURL = 'https://jsonplaceholder.typicode.com';

describe('Comments Management', () => {

    // High timeout for unstable internet
    jest.setTimeout(90000);

    test('GET List Comments (Status 200)', async () => {
        const response = await request(baseURL).get('/comments');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('POST Create Comment (Status 201)', async () => {
        const payload = {
            postId: 1,
            name: 'Test',
            email: 'abubakr3@test.com',
            body: 'Testing Comments endpoint'
        };
        const response = await request(baseURL)
            .post('/comments')
            .send(payload);

        expect(response.status).toBe(201);
        expect(response.body.email).toBe('abubakr3@test.com');
    });

    test('PUT Update Comment (Status 200)', async () => {
        const payload = {
            name: 'Updated Comment Name'
        };
        const response = await request(baseURL)
            .put('/comments/1')
            .send(payload);

        expect(response.status).toBe(200);
    });

    test('DELETE Comment (Status 200)', async () => {
        const response = await request(baseURL).delete('/comments/1');
        expect(response.status).toBe(200);
    });
});
