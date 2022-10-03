import { Dispatch, SetStateAction } from 'react';
import styles from 'styles/Home.module.css'
import { Commit } from '../../models/commit.model';
import { Repository } from '../../models/repository.model';
import ListItem from '../listItem';

interface PropTypes {
  items: Commit[] | Repository[];
  onClick?: Dispatch<SetStateAction<Commit | Repository>>;
  linked?: boolean;
}

const List = ({
  items,
  onClick,
  linked,
}: PropTypes) => {
  return <ul className={styles.list}>
    {
      items.map(item => (
        <ListItem
          key={item.id}
          url={linked && item?.html_url}
          content={item.name || item.commit.message}
          onClick={onClick}
          item={item}
          avatar_url={item.author?.avatar_url}
        />
      ))}
  </ul>;
};


export default List;