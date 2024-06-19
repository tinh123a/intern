import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setInLoggedIn] = useState(false);

  const handSubmit = (event) => {;
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form (tải lại trang)

    if (!email || !passWord) {
      setError("vui lòng điền tài khoản và mật khẩu");
    }

    if (email === "tranductinh" && passWord === "1234") {
      setInLoggedIn(true);
      setError("");
    } else {
      setInLoggedIn(false);
      setError("tài khoản mật khẩu không hợp lệ");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassWordChange = (event) => {
    setPassWord(event.target.value);
  };

  return (
    <div>        
      <h3>{error}</h3>
      <h1>login</h1>
      {isLoggedIn ? (
        <div>
            <h2>đăng nhập thành công</h2>
            <button onClick={() => setInLoggedIn(false)}>đăng xuất</button>
        </div>
      ) : (
        <form onSubmit={handSubmit}>
          <div>
            <label htmlFor="user" >
              user name
            </label>
            <input type="username" onChange={handleEmailChange}/>
          </div>
          <div>
            <label htmlFor="pass" >
              pass word
            </label>
            <input type="password" onChange={handlePassWordChange}/>
          </div>
          <button>đăng nhập</button>
        </form>
      )}
    </div>
  );
};

export default Login;
