import { Row, Col, Button } from "antd";

export default function AntdTest() {
  return (
    <div>
			<div>antdTest</div>
      <div><a href="https://ourcodeworld.com/articles/read/497/top-10-best-ui-frameworks-for-reactjs">Top 10 best UI frameworks for reactjs</a></div>
      <div><a href="https://dev.to/burhanuday/using-ant-design-with-nextjs-custom-variables-for-ant-design-57m5">Using Next + customize var with full styled support</a></div>
      <div><a href="https://github.com/vercel/next-plugins/issues/598">Compose plugin issue in next js</a></div>
      <Button type="primary">Primary Button</Button>
      <Row>
        <Col span={24}>col</Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
    </div>
  );
}
