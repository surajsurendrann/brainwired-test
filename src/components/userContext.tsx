import { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
  website: string;
  company: Company;
}


interface UserContextType {
  users: User[];
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType>({
  users: [],
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};
