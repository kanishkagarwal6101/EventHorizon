import assert from 'assert';
import request from 'supertest';
import app from "../controllers/movie-controller.js";

describe('Movie Controller', () => {

  describe('GET /getseats', () => {
    it('should return a list of movies', async () => {
      const response = await request(app).get('/getseats');
      assert.strictEqual(response.status, 200);
      assert.ok(response.body.movie);
    });
  });

  describe('POST /postseats', () => {
    it('should create a new movie', async () => {
      const movieData = { name: 'Test Movie', ticket: 5 };

      const response = await request(app)
        .post('/postseats')
        .send(movieData);

      assert.strictEqual(response.status, 200);
      assert.ok(response.body.id);
    });
  });
});
