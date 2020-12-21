import { useContext, useState } from 'react';
import { Row, Col, Button } from 'antd';
import { withTranslation, useTranslation } from '../i18n';

function AntdTest({ t, i18n }) {
  // const { t, i18n } = useTranslation('common');
  // const [lang, setLang] = useState(i18n.language);
  const changeLanguage = (lang) => {
    // setLang(lang);
    i18n.changeLanguage(lang);
  };

  console.log('current lang + render', i18n.language);

  return (
    <div>
      <div>antdTest</div>
      <div>
        <a href="https://ourcodeworld.com/articles/read/497/top-10-best-ui-frameworks-for-reactjs">
          Top 10 best UI frameworks for reactjs
        </a>
      </div>
      <div>
        <a href="https://dev.to/burhanuday/using-ant-design-with-nextjs-custom-variables-for-ant-design-57m5">
          Using Next + customize var with full styled support
        </a>
      </div>
      <div>
        <a href="https://github.com/vercel/next-plugins/issues/598">
          Compose plugin issue in next js
        </a>
      </div>
      <div>
        <a href="https://stackoverflow.com/questions/64822738/next-js-next-i18next-is-always-routing-to-en">
          Next.js next-i18next is always routing to EN
        </a>
      </div>
      <Button type="primary" onClick={() => changeLanguage('en')}>
        Endlish
      </Button>
      <Button type="primary" onClick={() => changeLanguage('vi')}>
        Vietnamese
      </Button>
      <div>Test language - current language: {i18n.language}</div>
      <div>{t('test-lang-1')}</div>
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

AntdTest.getInitialProps = () => ({namespacesRequired: ['common']})

// export default AntdTest;
export default withTranslation('common')(AntdTest);
