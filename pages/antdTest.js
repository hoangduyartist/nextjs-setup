import { useContext, useState } from 'react';
import { Row, Col, Typography } from 'antd';
import { withTranslation, useTranslation } from '../i18n';
import TestLang from '../components/antdTest/language.js';
import CommonInfo from '../components/antdTest/commonInfo';

const { Title } = Typography;

const myStyle = {
  container: {
    maxWidth: 1224,
    margin: 'auto'
  },
  paddingCol: {
    padding: 12
  },
  topTitle: {
    textAlign: 'center',
    marginTop: 16
  }
}
function AntdTest({ t, i18n }) {

  console.log('current lang + render', i18n);

  return (
    <div style={myStyle.container}>
      <Title level={2} style={myStyle.topTitle}>h2. Ant Design</Title>
      <Row>
        {/* <Col span={24}>col-24</Col> */}
        <Col sm={24} md={12} style={myStyle.paddingCol}>
          <CommonInfo />
        </Col>
        <Col sm={24} md={12} style={myStyle.paddingCol}>
          <TestLang />
        </Col>
      </Row>
    </div>
  );
}

AntdTest.getInitialProps = () => ({namespacesRequired: ['common']})

// export default AntdTest;
export default withTranslation('common')(AntdTest);
