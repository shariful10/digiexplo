import React from 'react'

const items = [
	{
		id: "1",
		title: "all",
	},
	{
		id: "2",
		title: "graphics",
	},
	{
		id: "3",
		title: "photos",
	},
	{
		id: "4",
		title: "video",
	},
	{
		id: "5",
		title: "audio",
	},
	{
		id: "5",
		title: "fonts",
	},
];

const Tabs = () => {
   return (
      <div className="mt-5 grid grid-cols-3 md:grid-cols-none md:flex justify-center gap-6">
         {items.map(({ id, title }) => (
            <button
               key={id}
               className="hover:text-white capitalize bg-gray-100 hover:bg-primary duration-300 transition-all ease-in-out py-3 min-w-[40px] max-w-[150px] md:w-full rounded-lg text-sm sm:text-base"
            >
               {title}
            </button>
         ))}
      </div>
   )
}

export default Tabs