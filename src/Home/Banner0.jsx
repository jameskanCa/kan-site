import React from "react";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { isImg } from "./utils";
import Link from "rc-scroll-anim/lib/ScrollLink";

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={["bottom", "top"]}
          delay={200}
          {...dataSource.textWrapper}
        >
          <div key="title" {...dataSource.title}>
            {typeof dataSource.title.children === "string" &&
            dataSource.title.children.match(isImg) ? (
              <img
                src={dataSource.title.children}
                style={{ marginTop: 100, marginBottom: 50, marginRight: 100 }}
                width="100%"
                alt="img"
              />
            ) : (
              dataSource.title.children
            )}
          </div>
          <div key="content" {...dataSource.content}>
            {dataSource.content.children}
          </div>
          <Link key="Teams0_0" to="Teams0_0">
            <Button ghost key="button" {...dataSource.button}>
              {dataSource.button.children}
            </Button>
          </Link>
        </QueueAnim>
        <TweenOne
          animation={{
            y: "-=20",
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <DownOutlined />
        </TweenOne>
      </div>
    );
  }
}
export default Banner;
