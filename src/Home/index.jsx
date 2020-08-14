/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Banner0 from "./Banner0";
import Teams0 from "./Teams0";
import Feature6 from "./Feature6";
import Content13 from "./Content13";
import Content9 from "./Content9";
import Content12 from "./Content12";
import Feature5 from "./Feature5";
import Content1 from "./Content1";
import Footer0 from "./Footer0";
import Point from "./Point";
import {
  Banner00DataSource,
  Teams00DataSource,
  Feature60DataSource,
  Content130DataSource,
  Content90DataSource,
  Content120DataSource,
  Feature51DataSource,
  Content10DataSource,
  Feature50DataSource,
  Content91DataSource,
  Footer00DataSource,
} from "./data.source";
import "./less/antMotionStyle.less";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== "undefined" ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
    };
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  render() {
    const children = [
      <Banner0
        id="Banner0_0"
        key="Banner0_0"
        dataSource={Banner00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams0
        id="Teams0_0"
        key="Teams0_0"
        dataSource={Teams00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature6
        id="Feature6_0"
        key="Feature6_0"
        dataSource={Feature60DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content9
        id="Content9_0"
        key="Content9_0"
        dataSource={Content90DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content12
        id="Content12_0"
        key="Content12_0"
        dataSource={Content120DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature5
        id="Feature5_1"
        key="Feature5_1"
        dataSource={Feature51DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content1
        id="Content1_0"
        key="Content1_0"
        dataSource={Content10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature5
        id="Feature5_0"
        key="Feature5_0"
        dataSource={Feature50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content9
        id="Content9_1"
        key="Content9_1"
        dataSource={Content91DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Point
        key="list"
        data={[
          "Banner0_0",
          "Teams0_0",
          "Feature6_0",
          "Content13_0",
          "Content9_0",
          "Content12_0",
          "Feature5_1",
          "Content1_0",
          "Feature5_0",
          "Content9_1",
          "Footer0_0",
        ]}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {this.state.show && children}
      </div>
    );
  }
}
