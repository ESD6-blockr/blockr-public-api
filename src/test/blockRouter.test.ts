import * as request from "supertest";
import { App } from "../app";

describe("GET test", () => {
    it("GetBlocks works", async () => {
        const result = await request(App).get("/blocks");
        expect(result.text).toEqual("hai");
        expect(result.status).toEqual(200);
    });
})


// import app from "../app";
// import * as request from "supertest";

// describe("GET / - a simple api endpoint", () => {
//   it("Hello API Request", async () => {
//     const result = await request(app).get("/");
//     expect(result.text).toEqual("hello");
//     expect(result.statusCode).toEqual(200);
//   });
// });

test("test", () => {
    expect("").toBe("");
});
