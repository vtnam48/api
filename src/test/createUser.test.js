const request = require('supertest');
const app = require('../app.js');

describe("POST /users", () => {
    describe("create new user success", () => {
        test("should respone with a 200 status code", async () => {
            const response = await request(app).post("/users").send({
                name: "demo_name",
                gender: "male",
                university: "demo_university"
            })

            expect(response.statusCode).toBe(200)
        })
    })
})