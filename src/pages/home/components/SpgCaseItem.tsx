import {} from '@ant-design/icons';
import styles from './SpgCaseItem.less';

export type CaseItemProps = {
  title: string;
  desc: string;
  details: {
    point: string;
    infoList: string[];
  }[];
  imgUrl: string;
  reverse?: boolean;
};

const SpgCaseItem = (props: CaseItemProps) => {
  const { title, desc, details, imgUrl, reverse } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles['content-container']}>
        <div className={styles.content}>
          {details.map((item) => {
            return (
              <div key={item.point} className={styles['item-background']}>
                <div className={styles['item-container']}>
                  <div className={styles.point}>
                    <div className={styles.circle}></div>
                    {item.point}
                  </div>
                  <div className={styles['item-list']}>
                    {item.infoList.map((info) => {
                      return (
                        <div className={styles.item} key={info}>
                          • {info}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{ order: reverse ? -1 : 0 }}
          className={styles['img-container']}
        >
          <img src={imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SpgCaseItem;
