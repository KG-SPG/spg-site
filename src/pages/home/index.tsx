import {
  COPYRIGHT_INFORMATION_CONFIG,
  PARAGRAPH,
  SPG_CASE_CONFIG,
  SPG_POINT_CONFIG,
} from '@/constants/homepage';
import { Button, Descriptions, Tabs, Select } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import AboutUs from './components/AboutUs';
import CustomItem from './components/CustomItem';
import SpgCaseItem from './components/SpgCaseItem';
import { lang } from '../../constants/homepage';
import styles from './index.less';

export default () => {
  const handleDownload = () => {
    window.open('https://survey.aliyun.com/apps/zhiliao/wUwnL6sPC');
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.middle}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img
                src={
                  'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*JiTDRaNWTQkAAAAAAAAAAAAADtmcAQ/original'
                }
              />
            </div>
            <div className={styles['title-container']}>
              <div className={styles.title}>
                <div>语义增强可编程知识图谱SPG</div>
                <div>(Semantic-enhanced Programmable Graph)</div>
              </div>
            </div>
            <Button
              type="primary"
              className={styles.customBtn}
              onClick={handleDownload}
            >
              {PARAGRAPH.WhitepaperDownload}
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.spg}>
        <div className={styles.content}>
          <div className={styles.title}>{PARAGRAPH.whyChooseSPG}</div>
          <div className={styles.list}>
            {SPG_POINT_CONFIG.map((item) => {
              return <CustomItem key={item.title} {...item} />;
            })}
          </div>
        </div>
      </div>
      <div className={styles.point}>
        <div className={styles.content}>
          <div className={styles.title}>
            {PARAGRAPH.SPGFeaturesSemanticExamples}
          </div>
          <div className={styles.info}>{PARAGRAPH.DeepSemanticNetworking}</div>
          <Tabs
            defaultActiveKey="1"
            centered
            size="large"
            animated
            items={[
              {
                key: '1',
                label: PARAGRAPH.SemanticEnhancedProperties,
                children: (
                  <img src="https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*QQ9tR7YJoLYAAAAAAAAAAAAADtmcAQ/original" />
                ),
              },
              {
                key: '2',
                label: PARAGRAPH.DataToKnowledgeProcess,
                children: (
                  <img src="https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*kCsNRIQ7wB4AAAAAAAAAAAAADtmcAQ/original" />
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className={styles.framework}>
        <div className={styles.content}>
          <div className={styles.title}>{PARAGRAPH.SPGSemanticFramework}</div>
          <div className={styles.info}>
            {PARAGRAPH.AccelerateDataIntegration}
          </div>
          <img src="https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*9BKUQYrL56IAAAAAAAAAAAAADtmcAQ/original" />
        </div>
      </div>
      <div className={styles.case}>
        <div className={styles.content}>
          <div className={styles.title}>{PARAGRAPH.SPGCaseStudies}</div>
          {SPG_CASE_CONFIG.map((item) => {
            return <SpgCaseItem key={item.title} {...item} />;
          })}
        </div>
      </div>
      <div className={styles.footer}>
        <Button
          type="primary"
          className={styles.customBtn}
          onClick={handleDownload}
        >
          {PARAGRAPH.WhitepaperDownload}
        </Button>
      </div>
      <div className={styles.bottom}>
        <div className={styles.content}>
          {COPYRIGHT_INFORMATION_CONFIG.map((item) => {
            return (
              <Descriptions
                title={item.title}
                key={item.title}
                style={item.style}
              >
                {item.unitNames.map((unit) => {
                  return (
                    <Descriptions.Item key={unit}>{unit}</Descriptions.Item>
                  );
                })}
              </Descriptions>
            );
          })}
        </div>
        <div className={styles.language}>
          <GlobalOutlined />
          <Select
            defaultValue={lang}
            onChange={(value) => {
              localStorage.setItem('lang', value);
              window.location.reload();
            }}
            options={[
              { label: '中文(简体)', value: 'zh-CN' },
              { label: 'English(US)', value: 'en-US' },
            ]}
          />
        </div>
      </div>
      <AboutUs />
    </div>
  );
};
