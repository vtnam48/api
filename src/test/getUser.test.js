const request = require('supertest');
const app = require('../app.js');

describe("get /users/:id", () => {
    describe("get a exist user", () => {
        test("should respone with a 200 status code", async () => {
            let reqID = 10;

            const response = await request(app).get(`/users/${reqID}`)

            expect(response.statusCode).toBe(200)
        })
    })
})