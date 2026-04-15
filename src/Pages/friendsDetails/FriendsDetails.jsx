import { Archive, MessageSquare, PhoneForwarded, SquarePen, Trash, Video } from 'lucide-react';
import React, { useContext } from 'react';
import { MdOutlineSnooze } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import { TimelineContextPro } from '../../context/TimelineContext';

const FriendsDetails = () => {
  const users=useLoaderData();
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
  } = users;
  

  const {timelineData, setTimelineData}=useContext(TimelineContextPro);

  const handleTimelineData=(type)=>{
    const newData={
      ...users, type, time:new Date().toLocaleDateString()
    };

    setTimelineData(prev=>[...prev, newData]);
    console.log(setTimelineData);
  }
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-1">
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
              <button
                className={`px-3 text-xl my-2 rounded-xl ${
                  status === 'overdue'
                    ? 'bg-amber-100'
                    : status === 'on-track'
                      ? 'bg-red-100 '
                      : 'bg-green-100'
                }`}
              >
                {status}
              </button>

              <div>
                {tags.map(tag => (
                  <button key={id} className="bg-green-100 px-3 mx-2 py-1 rounded-xl text-[16px]">
                    {tag}
                  </button>
                ))}
              </div>
              <p className="italic font-semibold text-gray-500 text-[16px]">
                " {bio} "
              </p>
              <p className="text-gray-500 text-[16px]">Preferred: {email}</p>
            </div>
          </div>
          <div>
            <p className="flex justify-center items-center gap-3 my-2 bg-base-200 py-3 shadow-md">
              <MdOutlineSnooze className="text-2xl" />
              Snooze 2 Weeks
            </p>
            <p className="flex justify-center items-center gap-3 my-2 bg-base-200 py-3 shadow-md">
              <Archive />
              Archive
            </p>
            <p className="flex justify-center items-center gap-3 my-2 bg-base-200 py-3 shadow-md text-red-500">
              <Trash />
              Delete
            </p>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-3 text-center">
          <div className="col-span-1 bg-base-200 m-2 shadow-sm rounded-xl flex justify-center items-center">
            <div>
              <h2 className="text-[20px] font-bold text-[#244D3F] mb-">
                {days_since_contact}
              </h2>
              <p className="text-[18px] text-[#64748B]">Days Since Contact</p>
            </div>
          </div>
          <div className="col-span-1 bg-base-200 m-2 shadow-sm rounded-xl flex justify-center items-center">
            <div>
              <h2 className="text-[20px] font-bold text-[#244D3F] mb-">
                {goal}
              </h2>
              <p className="text-[18px] text-[#64748B]">Goal (Days)</p>
            </div>
          </div>
          <div className="col-span-1 bg-base-200 m-2 shadow-sm rounded-xl flex justify-center items-center">
            <div>
              <h2 className="text-[20px] font-bold text-[#244D3F] mb-">
                {next_due_date}
              </h2>
              <p className="text-[18px] text-[#64748B]">Next Due</p>
            </div>
          </div>
          <div className="col-span-3 bg-base-200 m-2 shadow-sm rounded-xl text-left  px-10 text-2xl flex justify-between items-center">
            <div>
              <p className="text-[#244D3F] font-bold mb-5">Relationship Goal</p>
              <p className="text-[#64748B]">
                Connect every <span className="font-bold">{goal} days</span>
              </p>
            </div>
            <div>
              <button className="btn">
                <SquarePen />
                Edit
              </button>
            </div>
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-2 p-3 bg-base-200 m-2 shadow-sm rounded-xl">
            <div
              onClick={() => handleTimelineData('Meetup')}
              className="bg-base-100 rounded-2xl flex justify-center items-center font-bold text-xl text-gray-500 flex-col shadow-md cursor-pointer"
            >
              <PhoneForwarded className="mb-3" />
              Call
            </div>
            <div
              onClick={() => handleTimelineData('text')}
              className="bg-base-100 rounded-2xl flex justify-center items-center font-bold text-xl text-gray-500 flex-col shadow-md cursor-pointer"
            >
              <MessageSquare className="mb-3" /> text
            </div>
            <div
              onClick={() => handleTimelineData('video')}
              className="bg-base-100 rounded-2xl flex justify-center items-center font-bold text-xl text-gray-500 flex-col shadow-md cursor-pointer"
            >
              <Video className="mb-3" /> video
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;