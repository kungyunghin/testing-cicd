var page = require("../server");
const tester = require('supertest');
describe("Testing HTML page",()=>{
    it("This is working",()=>{
        var nothing = null;
        expect(nothing).toBe(null);
    })
    it("HTML File is sent", ()=>{
        expect(page).not.toBe(null);
    })
    // it("HTML running", ()=>{
    //     tester(page).get(/h)
    // })
})