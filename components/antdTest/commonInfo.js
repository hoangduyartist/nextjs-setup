// import { I18nContext } from 'next-i18next';
// import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import { Card } from "antd";

const CommonInfo = () => {
  const { t, i18n } = useTranslation("common");
  // const { i18n: { language } } = useContext(I18nContext);
  return (
    <Card title="Common information">
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
    </Card>
  );
};

export default CommonInfo;
