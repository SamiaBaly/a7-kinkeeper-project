import React from 'react';
import { Link } from 'react-router';

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
    id,

  } = friend;
  
  return (
    <div>
      <Link to={`/Friends/${id}`}>
        <div
          className="card bg-base-200 shadow-sm hover:shadow-xl 
  hover:-translate-y-2 
  hover:scale-[1.02] 
  transition-all"
        >
          <figure className="px-10 pt-10">
            <img src={picture} alt="Shoes" className="rounded-full w-[100px]" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-2xl">{name}</h2>
            <p className="text-xl text-gray-500">
              {days_since_contact} days ago
            </p>
            <div>
              {tags.map(tag => (
                <button className="bg-green-100 px-3 mx-2 py-1 rounded-xl text-[16px]">
                  {tag}
                </button>
              ))}
            </div>
            <div className="card-actions">
              <button
                className={`px-3 text-xl my-2 rounded-xl text-white ${
                  status === 'overdue'
                    ? 'bg-amber-500'
                    : status === 'on-track'
                      ? 'bg-red-500 '
                      : 'bg-green-800'
                }`}
              >
                {status}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Friend;