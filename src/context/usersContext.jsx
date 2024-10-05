import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import  filter from 'lodash/filter.js';
import data from '../data/initialUsersData.json';
import map from 'lodash/map.js';

// initial value
const UsersContext = createContext({
  usersData: [],
  setUsersData: () => {},
  loading: false,
});

// value provider
export const ContextProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log('usersData', usersData);

  useEffect(() => {
    const t = setTimeout(() => {
      setUsersData(data);
    }, 2000);

    return () => {
      clearTimeout(t);
    };
  }, []);

  const addUser = (newUser) => {
    setUsersData((prevUsers) => [newUser,...prevUsers ]);

  };

  const editUser = (updatedUser) => {
    setUsersData((prevUsers) =>
      map(prevUsers,((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ))
    );
  };

  const deleteUser = (userId) => {
    setUsersData((prevUsers) => filter(prevUsers,((user) => user.id !== userId)));
  };

  const contextValue = useMemo(
    () => ({
      usersData,
      addUser,
      editUser,
      deleteUser,
    }),
    [usersData]
  );


  return <UsersContext.Provider value={contextValue}>{children}</UsersContext.Provider>;
};

// consumer
export const useUsersContext = () => useContext(UsersContext);

export default UsersContext;
