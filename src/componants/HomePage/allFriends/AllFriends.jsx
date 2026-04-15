import React, { use } from 'react';
import Friend from '../Friend/Friend';

const friendsPromise=fetch("/data.json").then(res=>res.json());

const AllFriends = () => {

  const friends=use(friendsPromise);
  console.log(friends);
  return (
    <div className='my-10 border-t border-gray-200'>
      <h2 className="text-3xl font-bold my-5">Your Friends</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {friends.map((friend,i) => (
          <div>
            <Friend key={i} friend={friend}></Friend>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFriends;