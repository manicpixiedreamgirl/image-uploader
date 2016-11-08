/* eslint-disable
  max-len,
*/
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Style from './upload.css';

const Privacy = () => (
  <Row className={Style.card}>
    <Col xs={12}>
      <h3>Privacy Policy</h3>
    </Col>
  </Row>
);

Privacy.propTypes = {};

Privacy.defaultProps = {};

export default Privacy;
