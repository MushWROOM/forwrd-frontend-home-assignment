import { useEffect, useLayoutEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import  size  from 'lodash/size.js';
import  map  from 'lodash/map.js';

import { Button, Typography } from '@mui/material';
import { useUsersContext } from '../../../context/usersContext';
import UserRow from '../userRow/UserRow';
import AddButton from '../../../components/AddButton';
import styles from '../users.module.css';

function UsersList() {
  const { usersData, editUser, deleteUser, addUser } = useUsersContext();
const listRef = useRef(null)

  useLayoutEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [usersData]);

  const onAddClickHandler = ()=>{
    const newUser = { id: nanoid(), name: '', email: '', country: '', phone: ''}
    addUser(newUser);

  }

  return (
    <div className={styles.usersList}>
      <div className={styles.usersListHeader}>
        <Typography variant="h6">Users List ({size(usersData)})</Typography>
        <AddButton handleClick={onAddClickHandler} />
      </div>
      <div className={styles.usersListContent} ref={listRef}>
        {map(usersData, ((user) => (
          <UserRow key={user.id} user={user} onDelete={deleteUser}/>
        )))}
      </div>
    </div>
  );
}

export default UsersList;
