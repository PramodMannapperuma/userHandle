const request = require('supertest');
const express = require('express');
const router = require('../routes/userRoute'); // Replace with the actual path to your router file
const UserModel = require('../models/user');

jest.mock('../models/user'); // Mock the UserModel

describe('User Authentication Route', () => {
  // Mock a user for testing
  const mockUser = {
    email: 'test@example.com',
    password: 'password123',
  };

  beforeAll(async () => {
    // Mock the UserModel.findOne method to return the mock user
    UserModel.findOne.mockResolvedValue(mockUser);
  });

  afterAll(() => {
    // Restore the original implementation of UserModel.findOne
    jest.restoreAllMocks();
  });

  it('should return a 200 status code and a user object on successful login', async () => {
    // Mock the UserModel.authenticate method to return the mock user
    UserModel.authenticate.mockResolvedValue(mockUser);

    // Create an instance of the express application
    const app = express();
    // Apply the router to the express application
    app.use('/', router);

    // Make a POST request on the /login endpoint
    const response = await request(app).post('/login').send(mockUser);

    // Check that the response is what you expect
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockUser);
  });
});
