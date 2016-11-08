import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
  Button,
  ButtonGroup,
  FormGroup,
  Col,
  Row } from 'react-bootstrap';

import Style from './upload.css';
import UploadActions from '../../actions/uploadActions';

const Images = ({ type }) => (
  <Row className={Style.images}>
    <Col xs={12}>
      <Row>
        <Col xs={12}>
          <h2>Upload your images here<small><br />Get links to share on the web</small></h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <form className={Style.form}>
            <FormGroup>
              <input
                className="form-control"
                type="text"
                placeholder="File description (optional)"
                onChange={evt => UploadActions.set('text', evt.target.value)} />
            </FormGroup>
            <FormGroup>
              <ButtonGroup justified>
                <ButtonGroup>
                  <Button
                    onClick={() => UploadActions.set('type', 'Family-Friendly')}
                    className={type === 'Family-Friendly' ? 'btn-primary active' : ''}>
                    Family-Friendly
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button
                    onClick={() => UploadActions.set('type', 'Adult (18+)')}
                    className={type === 'Adult (18+)' ? 'btn-primary active' : ''}>
                    Adult (18+)
                  </Button>
                </ButtonGroup>
              </ButtonGroup>
            </FormGroup>
            <FormGroup>
              <label className="btn btn-primary btn-file">
                Choose File... <input
                  style={{ display: 'none' }}
                  type="file"
                  encType="multipart/form-data"
                  onChange={evt => UploadActions.upload(evt.target.files)} />
              </label>
            </FormGroup>
            <FormGroup>
              <small>By uploading you agree to the terms of our
                <Link to="/privacy"> privacy policy</Link>
              </small>
            </FormGroup>
          </form>
        </Col>
      </Row>
    </Col>
  </Row>
);

Images.propTypes = {
  type: PropTypes.string,
};

Images.defaultProps = {
  type: 'Family-Friendly',
};

export default Images;
