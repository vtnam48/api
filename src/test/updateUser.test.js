const request = require('supertest');
const app = require('../app.js');

describe("PUT /users/:id", () => {
    describe("update a exist user", () => {
        test("should respone with a 200 status code", async () => {
            let reqID = 10;
            const data = {
                name: 'demo_user',
                gender: 'male',
                university: 'demo_university'
            };

            const response = await request(app)
                .put(`/users/${reqID}`)
                .send(data);

            expect(response.statusCode).toBe(200)
        })
    })
})