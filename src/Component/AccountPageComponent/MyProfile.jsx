import React from 'react'

const MyProfile = () => {
  return (
    <div>
      <div className='mt-[40px]'>
        <h1 className="mt-[16px] text-[16px] font-poppins font-medium text-Secondary2_color">
          Edit Your Profile
        </h1>
      </div>
      <div className="flex flex-col gap-6 w-[690px]">
        <div className="flex flex-row gap-[50px] mt-[16px]  ">
          <div className="flex flex-col gap-[8px] ">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your frist name"
              className="py-[13px] px-[16px]  w-[320px] bg-secondary_color rounded"
            />
          </div>
          <div className="flex flex-col gap-[8px] ">
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your last name"
              className="py-[13px] px-[16px]  w-[320px] bg-secondary_color rounded"
            />
          </div>
        </div>
        <div className="flex flex-row gap-[50px] mt-[16px] ">
          <div className="flex flex-col gap-[8px] ">
            <label htmlFor="name">Email</label>
            <input
              type="text"
              id="name"
              placeholder="example@email.com"
              className="py-[13px] px-[16px]  w-[320px] bg-secondary_color rounded"
            />
          </div>
          <div className="flex flex-col gap-[8px] ">
            <label htmlFor="name">Address</label>
            <input
              type="text"
              id="name"
              placeholder="Kingston, 5236, United State"
              className="py-[13px] px-[16px]  w-[320px] bg-secondary_color rounded"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[16px] ">
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="password">Password Changes</label>

            <input
              type="text"
              id="password"
              placeholder="Current Password"
              className="py-[13px] pl-[16px]   bg-secondary_color rounded"
            />
          </div>
          <input
            type="text"
            id="password"
            placeholder="New Password"
            className="py-[13px] pl-[16px]   bg-secondary_color rounded"
          />
          <input
            type="text"
            id="password"
            placeholder="Confirm New Password"
            className="py-[13px] pl-[16px]    bg-secondary_color rounded"
          />
        </div>

        <div className="flex flex-row justify-end items-center gap-8">
          <button className="cursor-pointer py-4 px-12 rounded bg-white border text-Black text-[16px] font-poppins font-medium">
            Cancle
          </button>
          <button className="cursor-pointer py-4 px-12 rounded bg-Secondary2_color text-white text-[16px] font-poppins font-medium">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyProfile