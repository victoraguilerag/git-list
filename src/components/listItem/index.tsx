import Image from 'next/image';
import { Dispatch, SetStateAction } from "react";
import styles from "styles/Home.module.css";
import { Commit } from "../../models/commit.model";
import { Repository } from "../../models/repository.model";

interface PropTypes {
  content: string;
  item: Commit | Repository;
  onClick: Dispatch<SetStateAction<Commit | Repository>>;
  url?: string;
  avatar_url?: string;
}
const Linked = ({ children, url}) => url ? <a href={url} target="_blank" rel="noreferrer">{children}</a>: <>{children}</>

const ListItem = ({ content, onClick, item, url, avatar_url }: PropTypes) => {
  const handleClick = () => onClick(item);
  return (
    <li onClick={handleClick} className={styles.listItem} key={item.id}>
      {<Linked url={url}>
        <p>{content}</p>
      </Linked>}
      {
        avatar_url && (
          <Image src={avatar_url} alt={content} className={styles.listAvatar} />
        )
      }
    </li>
  );
};


export default ListItem;
