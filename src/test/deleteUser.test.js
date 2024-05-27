const request = require('supertest');
const app = require('../app.js');

describe("DELETE /users/:id", () => {
    describe("delete a exist user", () => {
        test("should respone with a 200 status code", async () => {
            let reqID = 10;

            const response = await request(app).delete(`/users/${reqID}`)

            expect(response.statusCode).toBe(200)
        })
    })
})