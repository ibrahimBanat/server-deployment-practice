'use strict';

const server = require('../server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('server', () => {
  describe('is responding when', () => {
    it('there is 404 status', async () => {
      let route = '/foo';
      const response = await request.get(route);
      expect(response.status).toEqual(404);
    });
    it('there is 500 status', async () => {
      let route = '/bad';
      const response = await request.get(route);
      expect(response.status).toEqual(500);
    });
    it('have successfully get the response', async () => {
      let route = '/';
      let response = await request.get(route);
      expect(response.status).toEqual(200);
    });
  });
});
