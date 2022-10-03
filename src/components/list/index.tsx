import { Dispatch, SetStateAction } from 'react';
import styles from 'styles/Home.module.css'
import { Commit } from '../../models/commit.model';
import { Repository } from '../../models/repository.model';
import ListItem from '../listItem';

interface PropTypes {
  items: Commit[] | Repository[];
  onClick: Dispatch<SetStateAction<Commit | Repository>>;
}

const List = ({
  items,
  onClick,
}: PropTypes) => {
  return <ul className={styles.list}>
    {items.map(item => <ListItem key={item.id} content={item.name} onClick={onClick} item={item} />)}
  </ul>;
};


export default List;