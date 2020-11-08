import { useEffect, useState } from "react";

function User() {
  const [profile, profileSet] = useState(null);

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
        <div className="profile skeleton">
          <h3> </h3>
          <p></p>
          <a href="/"> </a>
        </div>
      )}
    </div>
  );
}

export default User;
