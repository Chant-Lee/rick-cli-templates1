import React from "react";
const style = require("./index.module.less");

const Login = () => {
  function goLogin() {
    const LOGIN_URL = `${
      window.location.origin
    }/api/v1/auth?url=${encodeURIComponent(window.location.origin)}`;
    window.location.assign(LOGIN_URL);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.head}>
          <span className={style.shopeeText}>Rick</span>
          <div className={style.divider} />
          <span className={style.phegdaText}>Project</span>
        </div>
        <section className={style.bot}>
          <p>Welcome to Rick Project! </p>
          <button className={style.btn} onClick={goLogin}>
            Sign in
          </button>
        </section>
      </div>
    </div>
  );
};

export default Login;
