/* eslint-disable
  max-len,
*/
import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

import Style from './upload.css';

const Link = ({ path }) => (
  <Row className={Style.card}>
    <Col xs={12}>
      <h4>{path}</h4>
    </Col>
  </Row>
);

Link.propTypes = {
  path: PropTypes.string,
};

Link.defaultProps = {
  path: null,
};

export default Link;
