// __tests__/app.test.js
const request = require('supertest');
const { createServer } = require('../app');

let server;

beforeAll(() => {
  server = createServer(3001); // Use a different port for testing, e.g., 3001
});

afterAll((done) => {
  server.close(done); // Close the server after all tests have finished
});

describe('GET /', () => {
  it('responds with 200 status code', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /?q=iron%20man&offset=5', () => {
  it('responds with 200 status code', async () => {
    const response = await request(server).get('/?q=iron%20man&offset=10');
    expect(response.statusCode).toBe(200);
  });
});
