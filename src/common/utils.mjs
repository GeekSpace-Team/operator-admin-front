export const convertTimeStampToDate = (s) => {
  let d = new Date(s);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

export const convertTimeStampToTime = (s) => {
  let d = new Date(s);
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
};

export const checkList = (list) => {
  try {
    let r = list[0];
    return true;
  } catch (err) {
    return false;
  }
};

export const loginChecker = () => {
  try {
    let token = window.sessionStorage.getItem("token");
    if (typeof token === "undefined" || token == null || token == "") {
      window.location.href = "/login";
    }
  } catch (err) {
    window.location.href = "/login";
  }
};
