import { useEffect, useState } from "react";
import SkeletonProfile from "../skeletons/SkeletonProfile";

function User() {
  const [profile, profileSet] = useState(null);
  /*
  useEffect(() => {
    const to = setTimeout(async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const json = await resp.json();
      profileSet(json);
    }, 2000);
    return () => {
      clearTimeout(to);
    };
  }, []);
*/
  return (
    <div className="user">
      <h2>User Details</h2>
      {profile ? (
        <div className="profile">
          <h3>{profile.name}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      ) : (
        <SkeletonProfile theme="dark" />
      )}
    </div>
  );
}

export default User;
