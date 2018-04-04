const videoController = require('../../../api/video/controller');
const { expect } = require('chai');
const sinon = require('sinon');

describe('videoController', () => {
  it('should return simple message', async () => {
    const req = {};
    const res = {
      json: sinon.stub(),
    };
    await videoController.index(req, res);
    const json = res.json.getCall(0).args[0];
    expect(json.data).to.equal('This is a simple message.');
  });
});
