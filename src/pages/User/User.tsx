import { useEffect } from 'react';
import { useRouteParams, type UserRouteParams } from '@router/index';

function User() {
  const { id } = useRouteParams<UserRouteParams>();

  useEffect(() => {
    console.log('User ID:', id);
    // Fetch user data using the 'id'
  }, [id]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
      {/* Display user information here */}
    </div>
  );
}

export default User;
