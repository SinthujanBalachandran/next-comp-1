import Image from "next/image";
import React from "react";
import bg from "../../../public/images/bg.jpg";
import car from "../../../public/images/car.png";
import car2 from "../../../public/images/car2.png";
import car3 from "../../../public/images/car3.png";
import car4 from "../../../public/images/car4.png";
import briefcase from "../../../public/images/briefcase-line.png";
import group from "../../../public/images/group-line.png";

export default function Fleets() {
  return (
    <div className="py-24 bg-gray-200">
      <div className="container">
        <h4 className="uppercase font-semibold text-center mb-1 text-red-700 text-xl">{`Let's go with us`}</h4>
        <h2 className="oswald text-center font-semibold text-5xl mt-5">
          Choose Your Taxi to Ride!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          <div className="bg-[#f4f5f8] shadow-md">
            <div className="relative">
              <Image src={bg} alt="background" className="fleet--clip" />
              <div className="absolute right-0 -bottom-10">
                <Image src={car} alt="car" className="w-72" />
              </div>
            </div>
            <div className="p-5">
              <h3 className="oswald mb-1 mt-1 text-xl">First Class</h3>
              <p>Mercedes-Benz EQS (or similar)</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                  <Image src={group} alt="group" />
                </div>
                <p>3 passengers, 2 comfortable</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                  <Image src={briefcase} alt="group" />
                </div>
                <p>2 large, 2 small</p>
              </div>
              <div className="mt-5 bg-red-700 px-10 py-2 w-fit text-white mx-auto">
                Book Now
              </div>
            </div>
          </div>
          <div className="bg-[#f4f5f8] shadow-md">
            <div className="relative">
              <Image src={bg} alt="background" className="fleet--clip" />
              <div className="absolute right-0 -bottom-10">
                <Image src={car2} alt="car" className="w-72" />
              </div>
            </div>
            <div className="p-5">
              <h3 className="oswald mb-1 mt-1 text-xl">Sedan</h3>
              <p>Cadillac XTS (or similar)</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                  <Image src={group} alt="group" />
                </div>
                <p>3 passengers, 2 comfortable</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                  <Image src={briefcase} alt="group" />
                </div>
                <p>2 large, 2 small</p>
              </div>
              <div className="mt-5 bg-red-700 px-10 py-2 w-fit text-white mx-auto">
                Book Now
              </div>
            </div>
          </div>
          <div className="bg-[#f4f5f8] shadow-md">
            <div className="relative">
              <Image src={bg} alt="background" className="fleet--clip" />
              <div className="absolute right-0 -bottom-10">
                <Image src={car3} alt="car" className="w-72" />
              </div>
            </div>
            <div className="p-5">
              <h3 className="oswald mb-1 mt-1 text-xl">Business Class/SUV</h3>
              <p>Cadillac Escalade (or similar)</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                  <Image src={group} alt="group" />
                </div>
                <p>3 passengers, 2 comfortable</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                  <Image src={briefcase} alt="group" />
                </div>
                <p>2 large, 2 small</p>
              </div>
              <div className="mt-5 bg-red-700 px-10 py-2 w-fit text-white mx-auto">
                Book Now
              </div>
            </div>
          </div>
          <div className="bg-[#f4f5f8] shadow-md">
            <div className="relative">
              <Image src={bg} alt="background" className="fleet--clip" />
              <div className="absolute right-0 -bottom-10">
                <Image src={car4} alt="car" className="w-72" />
              </div>
            </div>
            <div className="p-5">
              <h3 className="oswald mb-1 mt-1 text-xl">Business Class</h3>
              <p>BMW 5 series (or similar)</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                  <Image src={group} alt="group" />
                </div>
                <p>3 passengers, 2 comfortable</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-10 w-10 flex items-center justify-center bg-gray-800 rounded-full">
                  <Image src={briefcase} alt="group" />
                </div>
                <p>2 large, 2 small</p>
              </div>
              <div className="mt-5 bg-red-700 px-10 py-2 w-fit text-white mx-auto">
                Book Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
