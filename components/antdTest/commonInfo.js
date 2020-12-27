// import { I18nContext } from 'next-i18next';
// import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import { Card } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import styles from './antdTest.module.less';

const links = [
  { title: "Nextjs and Antd plugin", url: "https://www.npmjs.com/package/next-plugin-antd-less" },
  { title: "Comparing Styling Methods In Next.js", url: "https://www.smashingmagazine.com/2020/09/comparison-styling-methods-next-js/" },
  { title: "Top 10 best UI frameworks for reactjs", url: "https://ourcodeworld.com/articles/read/497/top-10-best-ui-frameworks-for-reactjs" },
  { title: "The best UI frameworks for reactjs 2020", url: "https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/" },
  { title: "Using Next + customize var with full styled support", url: "https://dev.to/burhanuday/using-ant-design-with-nextjs-custom-variables-for-ant-design-57m5" },
  { title: "Compose plugin issue in next js", url: "https://github.com/vercel/next-plugins/issues/598" },
  { title: "Next.js next-i18next is always routing to EN", url: "https://stackoverflow.com/questions/64822738/next-js-next-i18next-is-always-routing-to-en" },
]

const LinkDetail = ({ title, url }) => {
  return (
    <div className={styles.linkWrapper}>
      <a href={url}>{title}</a>
    </div>
  )
}

const CommonInfo = () => {
  const { t, i18n } = useTranslation("common");
  // const { i18n: { language } } = useContext(I18nContext);
  return (
    <Card title="Common information">
      {links.map((link, index) => (
        <LinkDetail key={index} title={link.title} url={link.url}/>
      ))}
    </Card>
  );
};

export default CommonInfo;
