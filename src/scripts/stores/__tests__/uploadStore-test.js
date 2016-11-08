/* eslint-env mocha */
import expect from 'expect';
import sinon from 'sinon';
import request from 'superagent';
import Immutable from 'immutable';

import UploadStore from '../uploadStore';

describe('Upload Store', () => {
  let state;
  let unsubscribe;
  let files;
  let mockError;
  let mockEnd;
  let mockUpload;

  before(() => {
    files = [{ name: 'testfile', foo: 'bar ' }];
  });

  beforeEach(() => {
    state = {};
    UploadStore.init();
    unsubscribe = UploadStore.listen(nextState => { state = nextState; });
  });

  afterEach(() => {
    if (unsubscribe) unsubscribe();
  });

  describe('User interaction and state', () => {
    beforeEach(() => {
      mockUpload = sinon.stub(UploadStore, 'upload');
    });

    afterEach(() => {
      mockUpload.restore();
    });

    it('should set arbitrary value on state', () => {
      UploadStore.onSet('analyst', 'foo');
      UploadStore.onSet('analyst', null);
      expect(state.analyst).toEqual('foo');
    });

    it('should toggle form groups for adding new forums and images', () => {
      UploadStore.onToggle(null);
      UploadStore.onToggle('forum');
      expect(state.toggle.get('forum')).toBe(true);
    });

    it('should handle user image upload and update local state', () => {
      UploadStore.onUpload(null);
      expect(state.message).toNotExist();
      expect(mockUpload.calledOnce).toBe(false);
      UploadStore.onUpload(files);
      expect(state.message).toEqual(`Uploading ${files[0].name}`);
      expect(state.data).toEqual(files[0]);
      expect(state.file).toEqual(files[0].name);
      expect(mockUpload.calledOnce).toBe(true);
    });
  });

  describe('API interaction and state', () => {
    before(() => {
      mockEnd = request.Request.prototype.end;
      mockError = cb => { cb(null, { body: { error: 'my error' } }); };
      mockUpload = cb => { cb(null, { body: { message: 'my message' } }); };
    });

    afterEach(() => {
      request.Request.prototype.end = mockEnd;
    });

    it('should handle image upload', () => {
      sinon.stub(request.Request.prototype, 'end', mockUpload);
      UploadStore.upload();
      UploadStore.onSet('file', files[0]);
    });
  });
});
