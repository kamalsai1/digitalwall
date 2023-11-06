import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataVal, setData] = useState([]); // Your data state

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ dataVal, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
