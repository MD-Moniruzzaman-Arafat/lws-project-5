import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import InputField from '../common/InputField';
import PasswordInputField from '../common/PasswordInputField';

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const response = await axios.post('http://localhost:3000/api/auth/login', {
      email: data.email,
      password: data.password,
    });
    if (response.status === 200) {
      navigate('/');
    }
    const result = await response.data;
    console.log(result);
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
