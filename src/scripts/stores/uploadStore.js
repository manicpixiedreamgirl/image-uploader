import Reflux from 'reflux';
import Immutable from 'immutable';
import Request from 'superagent';
import { browserHistory as history } from 'react-router';

import UploadActions from '../actions/uploadActions';

const UploadStore = Reflux.createStore({
  listenables: UploadActions,
  init() {
    this.state = Immutable.fromJS({
      error: null,
      file: null,
      token: null,
      toggle: {},
      data: new FormData(),
      type: 'Family-Friendly',
    });
  },
  /**
   * Set state value with specified field and values.
   * @param  {string} field
   * @param  {object} value string|value
   * @return {Object}        store state
   */
  onSet(field, value) {
    if (!value) return;
    this.state = this.state.set(field, value);
    this.trigger(this.state.toObject());
  },
  /**
   * Set state value with specified field and values.
   * @param  {string} field
   * @param  {object} value string|value
   * @return {Object}        store state
   */
  onToggle(field) {
    if (!field) return;
    this.state = this.state.setIn(['toggle', field], !this.state.getIn(['toggle', field]));
    this.trigger(this.state.toObject());
  },
  /**
   * Handle upload from client-facing frontend
   * @param  {object} files file handler
   * @return {object}        store state
   */
  onUpload(files) {
    if (!files || !files.length) return;
    this.state = this.state.withMutations(state => {
      state
        .set('message', `Uploading ${files[0].name}`)
        .set('data', files[0])
        .set('file', files[0].name);
    });
    this.upload();
    this.trigger(this.state.toObject());
  },
  /**
   * Handle image upload from client facing app. Server
   * should return path to upload image.
   * @return {state} store state
   */
  upload() {
    if (!this.state.get('file')) return;
    Request
      .post('server/upload')
      .send({
        file: this.state.get('file'),
        data: this.state.get('data'),
        type: this.state.get('type'),
      })
      .end((err, res) => {
        this.state = this.state.withMutations(state => {
          state
          .set('message', null)
          .set('path', res.text);
        });
        this.trigger(this.state.toObject());
        history.push('/link');
      });
  },
});

export default UploadStore;
