import React from 'react';

const Friend = ({ friend }) => {
  const {
    next_due_date,
    goal,
    bio,
    tags,
    status,
    days_since_contact,
    email,
    picture,
    name,
    id

  } = friend;
  return (
    <div className="card bg-base-200 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={picture}
          alt="Shoes"
          className="rounded-full w-[100px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-2xl">{name}</h2>
        <p className='text-xl text-gray-500'>
          62d ago
        </p>
        <div>
          {
            tags.map(tag=><button className='bg-green-200 px-3 mx-2 py-1 rounded-xl text-[16px]'>{tag}</button>)
          }
        </div>
        <div className="card-actions">
          <button className={`px-3 text-xl my-2 rounded-xl ${status==="overdue"?"bg-amber-300":"bg-red-600 text-white"}`}>{status}</button>
        </div>
      </div>
    </div>
  );
};

export default Friend;