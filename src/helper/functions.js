//Check the Title Movie Charracter is less than specific number........
export const cardTitleShorter = (title, maxWords) => {
  const lengthTitle = title.length > maxWords ? "..." : "";
  const subedTitle = `${title.substring(0, maxWords)}${lengthTitle}`;
  return subedTitle;
};

export const genreTitleSeperator = (genre) => {
  const newArray = genre.split(" , ");
  return newArray;
};

export const loginValidator = (userData) => {
  const error = {};

  if (!userData.username.trim()) {
    error.username = "لطفا نام کاربری را وارد کنید";
  } else if (userData.username.trim().length < 4) {
    error.username = "نام کاربری باید بیشتر از 4 حرف باشد";
  } else {
    error.username = "";
  }

  if (!userData.password) {
    error.password = "لطفا رمز عبور را وارد کنید";
  } else if (userData.password.length < 6) {
    error.password = "رمز عبور باید بیشتر از 6 کاراکتر باشد";
  } else {
    error.password = "";
  }
  return error;
};

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const signUpValidator = (userData) => {
  const error = {};

  if (!userData.username.trim()) {
    error.username = "لطفا نام کاربری را وارد کنید";
  } else if (userData.username.trim().length < 4) {
    error.username = "نام کاربری باید بیشتر از 4 حرف باشد";
  } else {
    error.username = "";
  }

  if (!userData.email.trim()) {
    error.email = "لطفا آدرس ایمیل را وارد کنید";
  } else if (!emailRegex.test(userData.email)) {
    error.email = "فرمت ایمیل وارد شده درست نیست";
  } else {
    error.email = "";
  }

  if (!userData.password) {
    error.password = "لطفا رمز عبور را وارد کنید";
  } else if (userData.password.length < 6) {
    error.password = "رمز عبور باید بیشتر از 6 کاراکتر باشد";
  } else {
    error.password = "";
  }

  if (!userData.confirmPassword) {
    error.confirmPassword = "لطفا رمز عبورتان را دوباره تایید کنید";
  } else if (userData.confirmPassword !== userData.password) {
    error.confirmPassword = "رمز عبورتان با رمز عبور قبلی مغایرت دارد ";
  } else {
    error.confirmPassword = "";
  }
  return error;
};
