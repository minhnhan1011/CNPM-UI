import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Đăng nhập thành công! Chào ${username}`);
    navigate("/"); // Quay lại trang chủ sau khi đăng nhập
  };

  return (
    <div className="login-page">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Tài khoản"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
