export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.stringify(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};
