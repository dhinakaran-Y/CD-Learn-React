import { createContext, useState, useEffect } from "react";
import postDataArr from "../data/postDataArr.json";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const LOCAL_KEY = "Posts";

  const [postArr, setPostArr] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : postDataArr;
  });

  // Sync state to LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(postArr));
  }, [postArr]);

  return (
    <PostContext.Provider value={{ postArr, setPostArr }}>
    {children}
    </PostContext.Provider>
  );
};
