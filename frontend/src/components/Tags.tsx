import React from "react";
import Link from "next/link";

const tags = [
	{
		id: 1,
		tag: "Classic Music",
	},
	{
		id: 2,
		tag: "Pop Music",
	},
	{
		id: 3,
		tag: "Music",
	},
	{
		id: 4,
		tag: "Pop Music",
	},
	{
		id: 5,
		tag: "Music",
	},
	{
		id: 6,
		tag: "Classic Music",
	},
	{
		id: 7,
		tag: "Music",
	},
	{
		id: 8,
		tag: "Music",
	},
	{
		id: 9,
		tag: "Music",
	},
	{
		id: 10,
		tag: "Music",
	},
	{
		id: 11,
		tag: "Music",
	},
   {
		id: 12,
		tag: "Classic Music",
	},
	{
		id: 13,
		tag: "Pop Music",
	},
	{
		id: 14,
		tag: "Music",
	},
	{
		id: 15,
		tag: "Pop Music",
	},
	{
		id: 16,
		tag: "Music",
	},
	{
		id: 17,
		tag: "Classic Music",
	},
   {
		id: 18,
		tag: "Classic Music",
	},
	{
		id: 19,
		tag: "Pop Music",
	},
	{
		id: 20,
		tag: "Music",
	},
	{
		id: 21,
		tag: "Pop Music",
	},
	{
		id: 22,
		tag: "Music",
	},
	{
		id: 23,
		tag: "Classic Music",
	},
	{
		id: 24,
		tag: "Music",
	},
	{
		id: 25,
		tag: "Music",
	},
	{
		id: 26,
		tag: "Music",
	},
	{
		id: 27,
		tag: "Music",
	},
	{
		id: 28,
		tag: "Music",
	},
   {
		id: 29,
		tag: "Classic Music",
	},
	{
		id: 30,
		tag: "Pop Music",
	},
	{
		id: 31,
		tag: "Music",
	},
	{
		id: 32,
		tag: "Pop Music",
	},
	{
		id: 33,
		tag: "Music",
	},
	{
		id: 34,
		tag: "Classic Music",
	},
];

const Tags = () => {
	return (
		<>
			{tags.map(({ id, tag }) => (
				<Link href="#" key={id}>
					<button className="px-2 py-1 border hover:border-textColor rounded-full mx-1 my-2 hover:text-white hover:bg-textColor duration-300 transition-all ease-in-out">
						{tag}
					</button>
				</Link>
			))}
		</>
	);
};

export default Tags;
