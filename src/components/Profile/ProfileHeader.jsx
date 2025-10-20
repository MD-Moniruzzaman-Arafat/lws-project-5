import { useEffect, useReducer } from 'react';
import { Link } from 'react-router';
import { actions } from '../../actions';
import { useAuth } from '../../hooks/useAuth';
import { useAxios } from '../../hooks/useAxios';
import { initialState, ProfileReducer } from '../../reducers/ProfileReducer';
import ProfileBio from './ProfileBio';

export default function ProfileHeader() {
  const [state, dispatch] = useReducer(ProfileReducer, initialState);
  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    const fetchProfileData = async () => {
      dispatch({ type: actions.profile.PROFILE_FETCHING });
      try {
        const response = await api.get(
          `http://localhost:3000/api/users/${auth?.user?._id}`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.profile.PROFILE_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.profile.PROFILE_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfileData();
  }, [auth?.user?._id]);

  return (
    <>
      <div className="flex flex-col md:flex-row mb-10">
        {/* <!-- Profile Picture --> */}
        <div className="flex justify-items-end md:justify-start md:w-1/3 mb-6 md:mb-0 relative">
          <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border border-gray-300 mx-auto">
            <img
              src={state?.user?.avatar}
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* <!-- Profile Info --> */}
        <div className="md:w-2/3">
          {/* <!-- Username and Buttons --> */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
            <h2 className="text-xl font-normal mb-4 sm:mb-0 sm:mr-4">
              {state?.user?.name}
            </h2>
          </div>
          <div className="flex space-x-2">
            <Link
              to="/edit-profile"
              className="bg-gray-100 px-4 py-1.5 rounded-md text-sm font-medium"
            >
              Edit profile
            </Link>
          </div>

          {/* <!-- Stats --> */}
          <div className="flex justify-center sm:justify-start space-x-8 mb-4 mt-2">
            <div>
              <span className="font-semibold">53</span> posts
            </div>
          </div>
          {console.log(state)}

          {/* <!-- Bio --> */}
          <ProfileBio data={state?.user?.email} />
        </div>
      </div>
    </>
  );
}
