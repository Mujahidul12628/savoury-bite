import React from "react";
import Gallery from "../Gallery/Gallery";

const CateringSection = () => {
  return (
    <div className="grid items-center justify-center grid-cols-2 gap-10  py-10 mt-10 sm-grid-cols-5 md:grid-cols-4 px-5 xl:px-0 ">
      <div className="w-full h-full col-span-2 sm:col-span-3 md:col-span-2 " >
        <Gallery ></Gallery>
      </div>

      <div className="col-span-2">
        <h4 className="text-2xl font-semibold tracking-wide underline text-green-500 underline-offset-2">
          Catering
        </h4>
        <h2 className="text-2xl font-semibold">
          AN UNFORGETTABLE CULINARY EXPERIENCE
        </h2>
        <p className="my-5">
          Make your event unforgettable <br /> <br />
          With a personal and professional escort, we are here for you to come
          to the event without worry. Catering services and hospitality trays
          from Al Basha Restaurant are suitable for business and special
          occasions, both small and large. <br />
          <br />
          Together, we tailor our Halal Dairy Food Menu for every hospitality -
          from cup lifts, to hospitality trays for meetings, to parties and
          parties.
        </p>
        <hr className="border-green-400" />
        <ul className="mt-5">
          <li className="flex items-center gap-1">
            <span className="text-2xl text-green-500">•</span> Events are
            adapted to both field and indoor conditions.
          </li>
          <li className="flex items-center gap-1">
            <span className="text-2xl text-green-500">•</span>Hot and cold
            drinks, utensils and furniture for events can be ordered,
            accompanied by courteous and attentive staff.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CateringSection;
