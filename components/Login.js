import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';  
import './DangKy.css';  

const schema = yup.object().shape({
  account: yup.string().required('Tên đăng nhập không được để trống').min(3, 'Tên đăng nhập phải có ít nhất 3 ký tự'),
  password: yup.string().required('Mật khẩu không được bỏ trống').min(3, 'Mật khẩu phải có ít nhất 3 ký tự'),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();  // Khởi tạo useNavigate

  const onSubmit = (data) => {
    console.log(data);  // Bạn có thể xử lý dữ liệu đăng nhập ở đây
  };

  return (
    <div className="boxmain">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Tên đăng nhập</p>
          <input {...register('account')} placeholder="Account" />
          {isSubmitted && errors.account && (
            <p style={{ color: 'red' }}>{errors.account.message}</p>
          )}
        </div>

        <div>
          <p>Mật khẩu</p>
          <input {...register('password')} type="password" placeholder="Password" />
          {isSubmitted && errors.password && (
            <p style={{ color: 'red' }}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit">Đăng nhập</button>
      </form>
      <div>
        <p>Chưa có tài khoản? <button onClick={() => navigate('/dangky')}>Đăng ký</button></p>
      </div>
    </div>
  );
};

export default Login;
