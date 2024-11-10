import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';  
import './DangKy.css';

const schema = yup.object().shape({
  email: yup.string().required('Email không được để trống').email('Email không hợp lệ'),
  password: yup.string().required('Mật khẩu không được bỏ trống').min(3, 'Mật khẩu phải có ít nhất 3 ký tự'),
  checkpass: yup.string()
    .oneOf([yup.ref('password'), null], 'Mật khẩu xác nhận không đúng')
    .required('Xác nhận mật khẩu không được bỏ trống'),
});

const DangKy = () => {
  const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();  // Khởi tạo useNavigate

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <div className="boxmain">
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Email</p>
          <input {...register('email')} placeholder="Email" />
          {isSubmitted && errors.email && (
            <p style={{ color: 'red' }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <p>Mật khẩu</p>
          <input {...register('password')} type="password" placeholder="Password" />
          {isSubmitted && errors.password && (
            <p style={{ color: 'red' }}>{errors.password.message}</p>
          )}
        </div>

        <div>
          <p>Xác nhận mật khẩu</p>
          <input {...register('checkpass')} type="password" placeholder="Confirm Password" />
          {isSubmitted && errors.checkpass && (
            <p style={{ color: 'red' }}>{errors.checkpass.message}</p>
          )}
        </div>

        <button type="submit">Đăng ký</button>
      </form>
          <p>quay lại?</p>
          <button onClick={() => navigate('/l') }>đăng nhập </button>
    </div>
  );
};

export default DangKy;
