import React from 'react'

const ScheduleForm = () => {
  return (
    <div>
         <h3 className="text-center text-3xl mb-3 font-bold text-blue-500">
        Schedule A Tour
      </h3>
      <form action="" className="px-4">
        <input
          type="text"
          placeholder="name"
          className="mb-3 w-full border px-3 py-3"
        />
        <input
          type="email"
          placeholder="email"
          className="mb-3 w-full border px-3 py-3"
        />
        <input
          type="number"
          minLength={5}
          placeholder="phone"
          className="mb-3 w-full border px-3 py-3"
        />
        <input
          type="date"
          placeholder="name"
          className="mb-3 w-full border px-3 py-3"
        />
        <button className="w-full rounded-md bg-blue-500 py-3 text-white">
          Schedule A Tour
        </button>
      </form>
    </div>
  )
}

export default ScheduleForm