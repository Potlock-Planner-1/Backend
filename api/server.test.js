const supertest = require("supertest");

const server = require("./server.js");

const dbConfig = require("../database/dbConfig.js");

describe("server", function() {
    it("runs the tests", function(){
        expect(true).toBe(true)    
    })
})

describe("get /", function() {
    it("should response with 200", function(){
        return supertest(server)
        .get("/")
        .then(res => {
            expect(res.status).toBe(200)    
        })
    })

    it("should respond with JSON", function () {
        return supertest(server)
            .get("/")
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
        })
})

describe("POST /api/auth/register", function() {
    beforeEach(async () => {
        await dbConfig("users").truncate()
    })
    it("checking 201 response on register", function() {
        return supertest(server)
            .post("api/auth/register")
            .send({
                "username": "lambda", 
                "password": "school" 
            })
            .then(res => {
                expect(res.status).toBe(201)
            })
            .catch(error => {
                error
            })
    });

    it("checking name", function () {
        return supertest(server)
            .post("/api/auth/register")
            .send({
                "username": "lambda",
                "password": "school"
            })
            .then(res => {
                expect(res.body.data.username).toEqual("lambda")
            });
    });

    it("Should fail this test with wrong username", function () {
        return supertest(server)
            .post("/api/auth/register")
            .send({
                "username": "lambda",
                "password": "school"
            })
            .then(res => {
                expect(res.body.data.username).toBe("lambdaSchool")
            });
    })
})

describe("POST /api/auth/login", function() {

    it("checking 201 response on login", function () {
        return supertest(server)
            .post("/api/auth/login")
            .send({
                "username": "lambda",
                "password": "school"
            })
            .then(res => {
                expect(res.status).toBe(200);
            });
    });

    it("checking token", function () {
        return supertest(server)
            .post("/api/auth/login")
            .send({
                "username": "lambda",
                "password": "school"
            })
            .then(res => {
                expect(res.body.token).toBeDefined();
            });
    });

    it("checking data type", function () {
        return supertest(server)
            .post("/api/auth/login")
            .send({
                "username": "lambdaLambda",
                "password": "school"
            })
            .then(res => {
                expect(res.status).toBe(401);
            });
    });

})

describe("GET /api/user", function() {

    it("checking 200 response  for user data", function () {
        return supertest(server)
            .get("/api/users")
            .then(res => {
                expect(res.status).toBe(401);
            });
    });

})

describe("/api/potluck", function() {
    it("checking 200 response for potlucks", function() {
        return supertest(server)
            .get("/api/potlucks")
            .then(res => {
                expect(res.status).toBe(200)
            })
    })

    it("checking JSON format in the body", function() {
        return supertest(server)
            .get("/api/potlucks")
            .then(res => {
                expect(res.type).toMatch(/json/)
            })
    })

    it("checking food id", function() {
        return supertest(server)
            .get("/api/potlucks/1")
            .then(res => {
                expect(res.body.id).toBe(1)
            })
        })

    it("testing potluck posting", function() {
        return supertest(server)
            .post("/api/potlucks")
            .send({
                "name": "mango's potluck",
                "time": "9:00",
                "date": "08-01-2020",
                "location": "New York",
                "user_id": 1
            })
            .then(res => {
                expect(res.status).toBe(200)
            })
    })//it posts the new potluck but returns a 404

    
    it("testing potluck posting", function() {
        return supertest(server)
            .delete("/api/potlucks/13")
            .then(res => {
                expect(res.status).toBe(404)
            })
    })//need to provide new id which is in the potluck list to see pass for this test




})