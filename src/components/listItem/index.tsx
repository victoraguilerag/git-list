import { Dispatch, SetStateAction } from "react";
import styles from "styles/Home.module.css";
import { Commit } from "../../models/commit.model";
import { Repository } from "../../models/repository.model";

interface PropTypes {
  content: string;
  item: Commit | Repository;
  onClick: Dispatch<SetStateAction<Commit | Repository>>;
}

const ListItem = ({ content, onClick, item }: PropTypes) => {
  const handleClick = () => onClick(item);
  return (
    <li onClick={handleClick} className={styles.listItem} key={item.id}>
      <p>{content}</p>
    </li>
  );
};

export default ListItem;
