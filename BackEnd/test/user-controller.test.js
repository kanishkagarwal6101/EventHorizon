// import { expect } from "chai";
// import sinon from "sinon";
// import bcrypt from "bcryptjs";
// import * as functions from "../controllers/user-controller.js";

// const User = {
//   find: sinon.stub(),
//   create: sinon.stub(),
//   findOne: sinon.stub(),
// };
// const bcryptMock = {
//   hash: sinon.stub(),
//   compare: sinon.stub(),
// };

// describe("getAllUsers function", () => {
//   afterEach(() => {
//     sinon.restore(); 
//     sinon.stub("bcryptjs", () => bcryptMock);
//     sinon.stub("../models/User.js", () => User);
//   });
  
//   it("should return all users when found", async () => {
//     const sampleUsers = [{ name: "Alice" }, { name: "Bob" }];
//     User.find.resolves(sampleUsers);
//     const req = {};
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };
//     const next = sinon.stub();

//     await functions.getAllUsers(req, res, next);

//     expect(User.find.calledOnce).to.be.true;
//     expect(res.status.calledWith(200)).to.be.true;
//     expect(res.json.calledWith({ users: sampleUsers })).to.be.true;
//   });

//   it("should handle error when fetching users", async () => {
//     const errorMessage = "Database error";
//     User.find.rejects(errorMessage);
//     const req = {};
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };
//     const next = sinon.stub();

//     await functions.getAllUsers(req, res, next);

//     expect(User.find.calledOnce).to.be.true;
//     expect(console.log.calledWith(errorMessage)).to.be.true;
//     expect(res.status.calledWith(500)).to.be.true;
//     expect(res.json.calledWith({ message: "Unexpected Error Occurred" })).to.be
//       .true;
//   });

// });

// describe("signup function", () => {
//   afterEach(() => {
//     sinon.stub("bcryptjs", () => bcryptMock);
//     sinon.stub("../models/User.js", () => User);
//     sinon.restore(); // Restore stubbed methods after each test
//   });

//   it("should sign up a user successfully", async () => {
//     const req = {
//       body: {
//         name: "TestUser",
//         email: "test@example.com",
//         password: "password123",
//         age: "25",
//       },
//     };
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };

//     const hashedPassword = "hashedPassword123";
//     bcryptMock.hash.resolves(hashedPassword);

//     const createdUser = {
//       name: "TestUser",
//       email: "test@example.com",
//       age: "25",
//     };
//     User.create.resolves(createdUser);

//     await functions.signup(req, res);

//     expect(bcryptMock.hash.calledWith("password123", 10)).to.be.true;
//     expect(
//       User.create.calledWith({
//         name: "TestUser",
//         email: "test@example.com",
//         password: hashedPassword,
//         age: "25",
//       })
//     ).to.be.true;
//     expect(
//       res.json.calledWith({ message: "Signup successful", user: createdUser })
//     ).to.be.true;
//   });

//   it("should handle signup error", async () => {
//     const req = {
//       body: {},
//     };
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };

//     await functions.signup(req, res);

//     expect(res.status.calledWith(400)).to.be.true;
//     expect(res.json.calledWith({ message: "Invalid Inputs" })).to.be.true;
//   });

//   // Add more test cases for different scenarios
// });

// describe("login function", () => {
//   afterEach(() => {
//     sinon.stub("bcryptjs", () => bcryptMock);
//     sinon.stub("../models/User.js", () => User);
//     sinon.restore(); // Restore stubbed methods after each test
//   });

//   it("should login a user with valid credentials", async () => {
//     const req = {
//       body: {
//         userId: "test@example.com",
//         password: "validPassword123",
//       },
//     };
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };

//     const user = {
//       email: "test@example.com",
//       password: "hashedValidPassword",
//     };

//     User.findOne.resolves(user);
//     bcryptMock.compare.resolves(true);

//     await functions.login(req, res);

//     expect(User.findOne.calledWith({ email: "test@example.com" })).to.be.true;
//     expect(
//       bcryptMock.compare.calledWith("validPassword123", "hashedValidPassword")
//     ).to.be.true;
//     expect(res.json.calledWith({ message: "Login successful", user })).to.be
//       .true;
//   });

//   it("should handle login error", async () => {
//     const req = {
//       body: {},
//     };
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };

//     await functions.login(req, res);

//     expect(res.status.calledWith(400)).to.be.true;
//     expect(res.json.calledWith({ message: "Invalid Inputs" })).to.be.true;
//   });


// });
