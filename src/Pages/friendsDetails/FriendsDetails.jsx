import { Archive, MessageSquare, PhoneForwarded, SquarePen, Trash, Video } from 'lucide-react';
import React, { useContext } from 'react';
import { MdOutlineSnooze } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import { TimelineContextPro } from '../../context/TimelineContext';
import { toast } from 'react-toastify';


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
   
    if (type === 'Meetup') {
    toast.success(`Call with ${name}`);
  } else if (type === 'text') {
    toast.info(`Texted ${name}`);
  } else if (type === 'video') {
    toast(`Video call with ${name}`);
  };
};
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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

              <div>
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="bg-green-100 px-3 mx-2 py-1 rounded-xl text-[16px]"
                  >
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
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-3">
          {/* Days Since Contact */}
          <div className="bg-base-200 shadow-sm rounded-xl flex justify-center items-center p-6">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#244D3F]">
                {days_since_contact}
              </h2>
              <p className="text-sm md:text-[18px] text-[#64748B]">
                Days Since Contact
              </p>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-base-200 shadow-sm rounded-xl flex justify-center items-center p-6">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#244D3F]">
                {goal}
              </h2>
              <p className="text-sm md:text-[18px] text-[#64748B]">
                Goal (Days)
              </p>
            </div>
          </div>

          {/* Next Due */}
          <div className="bg-base-200 shadow-sm rounded-xl flex justify-center items-center p-6">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#244D3F]">
                {next_due_date}
              </h2>
              <p className="text-sm md:text-[18px] text-[#64748B]">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-base-200 shadow-sm rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center p-5 gap-4 text-left">
            <div>
              <p className="text-[#244D3F] font-bold text-lg mb-2">
                Relationship Goal
              </p>
              <p className="text-[#64748B] text-sm md:text-base">
                Connect every <span className="font-bold">{goal} days</span>
              </p>
            </div>

            <button className="btn w-full md:w-auto">
              <SquarePen />
              Edit
            </button>
          </div>

          {/* Quick Check-in */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-base-200 shadow-sm rounded-xl p-4">
            <h2 className="text-left text-lg font-bold text-gray-500 mb-3">
              Quick check in
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div
                onClick={() => handleTimelineData('Meetup')}
                className="bg-base-100 rounded-xl flex flex-col justify-center items-center shadow-md cursor-pointer py-5"
              >
                <PhoneForwarded className="mb-2" />
                Call
              </div>

              <div
                onClick={() => handleTimelineData('text')}
                className="bg-base-100 rounded-xl flex flex-col justify-center items-center shadow-md cursor-pointer py-5"
              >
                <MessageSquare className="mb-2" />
                Text
              </div>

              <div
                onClick={() => handleTimelineData('video')}
                className="bg-base-100 rounded-xl flex flex-col justify-center items-center shadow-md cursor-pointer py-5"
              >
                <Video className="mb-2" />
                Video
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;