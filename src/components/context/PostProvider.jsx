import { useState, useEffect, useContext } from "react";
import postDataArr from "../../data/postDataArr.json";
import { PostContext, ThemeContext } from "./PostContext";

export const PostProvider = ({ children }) => {
  const LOCAL_KEY = "Posts";

  // post data
  const [postArr, setPostArr] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : postDataArr;
  });

  // theme
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
     if (theme === "dark") {
       document.children[0].className = "dark";
     } else {
       document.children[0].className = "";
     }
  },[theme])

  // password
  const [passwordVal , setPasswordVal] = useState(null)

  // Sync state to LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(postArr));
  }, [postArr]);

  return (
    <PostContext.Provider value={{ postArr, setPostArr, theme, setTheme , passwordVal , setPasswordVal}}>
      {children}
    </PostContext.Provider>
  );
};