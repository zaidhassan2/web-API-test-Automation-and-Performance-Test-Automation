const request = require('supertest');
const baseURL = 'https://jsonplaceholder.typicode.com';

describe('Member 1: User Management', () => {

    // Timeout for slow internet
    jest.setTimeout(30000);

    test('GET List Users (Status 200)', async () => {
        const response = await request(baseURL).get('/users');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('POST Create User (Status 201)', async () => {
        const newData = {
            name: "Wolf Admin",
            username: "wolfie",
            email: "wolf@test.com"
        };
        const response = await request(baseURL)
        .post('/users')
        .send(newData);

        expect(response.status).toBe(201);
        expect(response.body.name).toBe("Wolf Admin");
    });

    test('DELETE User (Status 200)', async () => {
        const response = await request(baseURL).delete('/users/1');
        expect(response.status).toBe(200);
    });

    test('PUT Update User (Status 200)', async () => {
        const updateData = { name: "Wolf Updated" };
        const response = await request(baseURL)
        .put('/users/1')
        .send(updateData);
        expect(response.status).toBe(200);
    });
});
