import assert from 'assert';
import request from 'supertest';
import app from '../controllers/event-controller.js'; 

describe('Product Controller', () => {
  describe('GET /getAllEvents', () => {
    it('should return a list of products', async () => {
      const response = await request(app).get('/getAllEvents');
      assert.strictEqual(response.status, 200);
      assert.ok(response.body.events);
    });
  });
});
