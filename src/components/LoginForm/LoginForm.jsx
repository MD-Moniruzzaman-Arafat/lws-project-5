import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import InputField from '../common/InputField';
import PasswordInputField from '../common/PasswordInputField';

export default function LoginForm() {
  const { setAuth } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/login',
        {
          email: data.email,
          password: data.password,
        }
      );
      if (response.status === 200) {
        console.log('Login successful', response.data);
        navigate('/profile');
        const result = await response.data;
        setAuth(result);
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <!-- Username/Email Field --> */}
        <InputField
          name={'email'}
          label={'email'}
          type={'email'}
          placeholder={'email'}
          register={register}
          rules={{
            required: 'email is required',
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

        {/* <!-- Login Button --> */}
        <div className="mb-4">
          <button type="submit" className="login-button">
            Log in
          </button>
        </div>

        {/* <!-- OR Separator --> */}
        <div className="or-separator">OR</div>

        <div className="mb-4">
          <button type="submit" className="login-button">
            Log in with Google
          </button>
        </div>
      </form>
    </>
  );
}
