import React, { createContext, useState } from 'react';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  // @ts-ignore
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
