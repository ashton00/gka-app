import React, { Component, PropTypes } from 'react';
import {
  Button, Row, Col, Layout, Icon 
} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
export default class App extends Component {
  static propTypes = {
  };

  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <div className="index-wrap">
        <Row type="flex" justify="center" align="center" className="content">
          <Col type="flex" justify="center" align="center">
              <Icon  type="plus"></Icon>
          </Col>
        </Row>
      </div>

    );
  }
}

