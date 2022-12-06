import React from "react";
import { RiCustomerService2Fill, RiSearchEyeLine } from "react-icons/ri";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
      <div className=" col-span-2">
        <div>
          <h2 className="font-bold text-3xl uppercase my-4">
            luxury included vacations for two people
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nam
            ratione! Voluptatum a porro explicabo deserunt dolorum et quod,
            incidunt cum eius quos nihil odio ipsa placeat at aliquam omnis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-5 gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center ">
            <button className="bg-[blue] text-white p-4 rounded-lg">
              <RiCustomerService2Fill size={40} />
            </button>
            <div>
              <h4 className="font-bold text-2xl uppercase mb-4">
                leading services
              </h4>
              <p className=" uppercase text-lg">
                all - inclusive company for 20 years in-a-row
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-center">
            <button className="bg-[blue] text-white p-4 rounded-lg">
              <RiSearchEyeLine size={40} />
            </button>
            <div>
              <h4 className="font-bold text-2xl uppercase mb-4">
                automated bookings
              </h4>
              <p className=" uppercase text-lg">
                all - inclusive company for 20 years in-a-row
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border p-2 text-center">
          <p className=" uppercase mb-5">get an additional 10% off</p>
          <p className=" uppercase mb-5">12 hours left</p>
          <button className=" bg-gray-700 text-white uppercase p-2 w-full rounded-lg">
            book now and safe
          </button>
        </div>
        <form className="my-4">
          <div className="my-4 flex flex-col">
            <h5 className="text-xl mb-2 font-bold">destination</h5>
            <select className="border p-1 focus:outline-none">
              <option>key weist</option>
              <option>maldives</option>
              <option>grand</option>
              <option>tora pora</option>
            </select>
          </div>
          <div className="my-4 flex flex-col">
            <label className="font-bold text-xl mb-2">check-in</label>
            <input type="date" className="border p-1 focus:outline-none" />
          </div>
          <div className="my-4 flex flex-col">
            <label className="font-bold text-xl mb-2">check-out</label>
            <input type="date" className="border p-1 focus:outline-none" />
          </div>
          <button className="text-white text-xl font-bold bg-[blue] rounded-lg w-full p-2 capitalize my-4">
            rates & availabilites
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
