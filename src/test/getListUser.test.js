const request = require('supertest');
const app = require('../app.js');

describe("GET /users", () => {
    describe("get list of users success", () => {
        test("should respone with a 200 status code", async () => {
            const response = await request(app).get("/users");

            expect(response.statusCode).toBe(200);
        })
    })
})