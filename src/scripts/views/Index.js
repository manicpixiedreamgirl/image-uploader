import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Col, Grid, Row } from 'react-bootstrap';

import UploadStore from '../stores/uploadStore';
import Style from '../components/upload/upload.css';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.uploadListener = UploadStore.listen(state => this.setState(state));
  }

  componentWillUnmount() {
    this.uploadListener();
  }

  render() {
    const { children } = this.props;
    const { message, error, ...other } = this.state;

    return (
      <Grid>
        <Row>
          <Col xs={12} sm={8} smOffset={2}>
            <Row>
              <Col xs={12}>
                <Link to="/">
                  <div className={Style.header}>
                    <div className={Style.logo}>
                      <span>{window.location.hostname}</span>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
            {React.cloneElement(children, other || <div />)}
          </Col>
        </Row>
        <Row className={Style.footer}>
          <Col xs={12} sm={8} smOffset={2}>
            <h6>&copy;{`${window.location.hostname}`}</h6>
          </Col>
        </Row>
        {!message ? null :
          <Row>
            <Col xs={12} className={Style.notification}>
              <div>{message}</div>
            </Col>
          </Row>}
        {!error ? null :
          <Row>
            <Col xs={12} className={Style.error}>
              <div>{error}</div>
            </Col>
          </Row>}
      </Grid>
    );
  }
}

Index.propTypes = {
  children: PropTypes.object,
};

Index.defaultProps = {
  children: {},
};

export default Index;
