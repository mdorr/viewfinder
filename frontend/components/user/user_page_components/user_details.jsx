import React from 'react';

const UserDetails = ({details}) => {
	const displayedUserName = (details) => {
		let userName = details.username;
		if (details.firstname || details.lastname) {
			userName = `${details.firstname} ${details.lastname}`;
		}
		return userName.trim();
	};

  const userStats = (userDetails) => {
		let stats = [];

		stats.push((<li key="Followers"><span>{ userDetails.followers.length }</span> Followers</li>));
		stats.push((<li key="Following"><span>{ userDetails.followed.length }</span> Following</li>));

		let locationString = "";
		if (userDetails.city && userDetails.country) {
			locationString = `${userDetails.city}, ${userDetails.country}`;
		} else if (userDetails.city) {
			locationString = userDetails.city;
		} else if (userDetails.country) {
			locationString = userDetails.country;
		}

		if (locationString != "") {
			stats.push(<li key="Location">{ locationString }</li>);
		}

		return (<ul>{ stats }</ul>);
	};

  return (
    <div className="userInfo">
      <h2>{ displayedUserName(details) }</h2>
      { userStats(details) }
    </div>
  );
};

export default UserDetails;
