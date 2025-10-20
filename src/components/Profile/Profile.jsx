import { useQuery } from '@tanstack/react-query';
import { api } from '../../api/api';
import ProfileHeader from './ProfileHeader';
import ProfilePost from './ProfilePost';

export default function Profile() {
  async function fetchProfile() {
    const res = await api.get('http://localhost:3000/api/users/me');
    return res.data;
  }
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  });
  if (isLoading) {
    return <p>loading profile .............</p>;
  }
  if (isError) {
    return error;
  }
  console.log(data);
  return (
    <>
      <ProfileHeader data={data} />
      <ProfilePost />
    </>
  );
}
