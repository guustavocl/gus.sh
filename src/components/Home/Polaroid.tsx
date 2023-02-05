import React from "react";
import Image from "next/image";
import Link from "next/link";

const Polaroid = () => {
  return (
    <Link
      className="lights polaroid group col-span-8 h-72 bg-[#f2effc] p-3.5 pb-14 backdrop-blur sm:col-span-6 md:col-span-5 md:h-80"
      href="https://flickr.com/photos/guustavocl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="h-full bg-violet-700/70 backdrop-blur">
        {/* TODO: make this photo change every refresh */}
        <Image
          src="https://live.staticflickr.com/65535/52660123015_851be77ecd_c.jpg"
          height={512}
          width={512}
          className="h-full w-full select-none border border-slate-200 object-cover opacity-70 saturate-50 group-hover:saturate-100"
          alt="flickr photo"
        />
      </div>
      <h3 className="mt-3 w-full text-center font-mono text-lg text-black text-glow-violet-500">My photos on Flickr</h3>
    </Link>
  );
};

export default React.memo(Polaroid);
