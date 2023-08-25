import styles from './SpgCaseItem.less';

export type CaseItemProps = {
  title: string;
  desc: string;
  details: {
    point: string;
    infoList: string[];
  }[];
  imgUrl: string;
};

const SpgCaseItem = (props: CaseItemProps) => {
  const { title, desc, details, imgUrl } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.content}>
        {details.map((item) => {
          return (
            <div key={item.point} className={styles['item-container']}>
              <div className={styles.point}>{item.point}</div>
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
          );
        })}
      </div>
      <div className={styles['img-container']}>
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
};

export default SpgCaseItem;
