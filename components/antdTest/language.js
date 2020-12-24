// import { I18nContext } from 'next-i18next';
// import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Button, Dropdown, Menu, Select, Row } from 'antd';

const Language = () => {
  const { t, i18n } = useTranslation('common');
  // const { i18n: { language } } = useContext(I18nContext);
  // console.log(i18n.languages)
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const menu = (
    // <Menu>
    //   {['en', 'vi'].map((l, index) => (
    //     <Menu.Item key={index}>{l}</Menu.Item>
    //   ))}
    //   <Menu.Item>
    //     <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
    //       3rd menu item
    //     </a>
    //   </Menu.Item>
    // </Menu>
    <Select onChange={(val) => i18n.changeLanguage(val)} defaultValue={i18n.language} style={{width: 100}}>
      {['en', 'vi'].map((l, i) => (
        <Select.Option value={l} key={i}>{l}</Select.Option>
      ))}
    </Select>
  );

  return (
    <Card title="Test language">
      <Row>
        {menu}
        <div>{t('test-lang-1')}</div>
      </Row>
    </Card>
  );
}

export default Language