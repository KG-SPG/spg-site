import { PARAGRAPH } from '@/constants/homepage';
import { WechatOutlined } from '@ant-design/icons';
import { Typography, message } from 'antd';
import copy from 'copy-to-clipboard';
import React, { useEffect, useRef } from 'react';
import styles from './AboutUs.less';

const { Text, Title } = Typography;

const AboutUs = () => {
  const [showQRCode, setShowQRCode] = React.useState(window.innerWidth >= 1280);
  const QRCodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const attributes = showQRCode
      ? { width: '220px', padding: '10px', opacity: 1 }
      : { width: '100px', padding: 0, opacity: 0 };
    if (QRCodeRef.current) {
      Object.assign(QRCodeRef.current?.style || {}, attributes);
    }
  }, [showQRCode]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        QRCodeRef.current &&
        !QRCodeRef.current.contains(e.target as HTMLElement)
      ) {
        setShowQRCode(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div className={styles['img-container']} ref={QRCodeRef}>
        <div className={styles.top}>
          <Text strong>{PARAGRAPH.ContactUs}</Text>
          <br />
          <Text
            onClick={() => {
              copy('feidongni.fdn@antgroup.com', {
                onCopy: () => {
                  message.success(PARAGRAPH.CopiedToClipboard);
                },
              });
            }}
          >
            feidongni.fdn@antgroup.com
          </Text>
          <br />
          <Text strong>{PARAGRAPH.FollowUs}</Text>
          <br />
          <Text>{PARAGRAPH.SPGFramework}</Text>
        </div>
        <div className={styles.content}>
          <img src="https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*FYxHT5WP0pUAAAAAAAAAAAAADtmcAQ/original" />
        </div>
      </div>
      {!showQRCode && (
        <WechatOutlined
          className={styles.icon}
          onClick={(e) => {
            e.stopPropagation();
            setShowQRCode(true);
          }}
        />
      )}
    </>
  );
};

export default AboutUs;
