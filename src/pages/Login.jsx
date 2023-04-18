import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { getAlltechnicians } from '../services/handleTechnicians';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'ricardo.dias@example.com',
      password: '123456',
    },
  });
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log('Login attempt:', email, password);
    const technicians = getAlltechnicians();
    console.log('technicians', technicians);
    const technician = technicians.find(
      (tech) => tech.email === email && tech.password === password
    );
    
    if (technician) {
      console.log('Login successful:', technician);
      setIsAuthenticated(true);
      navigate('/services');
    } else {
      console.log('Login failed: Invalid email or password');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', paddingTop: '100px' }}>
      <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item
        hasFeedback
        validateStatus={errors.email ? 'error' : ''}
        help={errors.email?.message}
      >
        <Controller
          name="email"
          control={control}
          rules={{ required: 'Email is required' }}
          render={({ field }) => (
            <Input
              {...field}
              prefix={<UserOutlined />}
              placeholder="Email"
              type="email"            />
          )}
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        validateStatus={errors.password ? 'error' : ''}
        help={errors.password?.message}
        >
        <Controller
          name="password"
          control={control}
          rules={{ required: 'Password is required' }}
          render={({ field }) => (
            <Input.Password
            {...field}
            prefix={<LockOutlined />}
            placeholder="Password"
            />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
