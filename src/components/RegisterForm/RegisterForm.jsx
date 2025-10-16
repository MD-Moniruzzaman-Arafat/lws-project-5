import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import InputField from '../common/InputField';
import PasswordInputField from '../common/PasswordInputField';

export default function RegisterForm() {
  const { setAuth } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const navigate = useNavigate();
  const password = watch('password');
  const onSubmit = async (data) => {
    const response = await axios.post('http://localhost:3000/api/auth/signup', {
      email: data.email,
      name: data['full-name'],
      password: data.password,
    });
    if (response.status === 201) {
      navigate('/profile');
      const result = await response.data;
      setAuth(result);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <!-- Email/Phone Field --> */}
        <InputField
          name={'email'}
          label={'email'}
          type={'email'}
          placeholder={'Email'}
          register={register}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email format',
            },
          }}
          errors={errors}
        />
        {/* <!-- Full Name Field --> */}
        <InputField
          name={'full-name'}
          label={'full-name'}
          type={'text'}
          placeholder={'Full Name'}
          register={register}
          rules={{
            required: 'Full Name is required',
          }}
          errors={errors}
        />
        {/* <!-- Password Field --> */}
        <PasswordInputField
          name={'password'}
          label={'password'}
          placeholder={'Password'}
          register={register}
          rules={{
            required: 'Password is required',
          }}
          errors={errors}
        />
        {/* <!-- Confirm Password Field --> */}
        <PasswordInputField
          name={'confirm-password'}
          label={'confirm-password'}
          placeholder={'Confirm Password'}
          register={register}
          rules={{
            validate: (value) => value === password || 'Passwords do not match',
          }}
          errors={errors}
        />
        {/* <!-- Sign Up Button --> */}
        <div className="mb-2">
          <button type="submit" className="signup-button">
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}
