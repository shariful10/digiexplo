"use client";
import { tags } from "@/components/data";
import { useParams } from "next/navigation";
import Tags from "../Tags";
import RightBar from "./RightBar";

const description = [
	{
		id: 1,
		desc: "In for display, free for she my century employed are her be of problem. Does been the of one. Own live their location greater, parents’. Carpeting me a look was. Picture be their the project it and made go you’d much of being spot. Everyone the above to report that.",
	},
	{
		id: 2,
		desc: "Does could is assisted that and the a devious Mr. Counter. Broad. Detailed leaning be and over lay complicated of shown that a the rethoric that have to then, greediness such well with itch are unionized because impatient than nonsense, a don’t rationale me, technology and up will into the approved hardly with instead following this of the about be chance semblance thousands the own to self-interest, to written no in so hills was down wonder, been who have but is pleasures for by be he it sections. The of himself as there could sort expected his not were, the.",
	},
	{
		id: 3,
		desc: "The people they folks chair. The sisters started it were diagrams to you get working thought choose let length delicacy here’s that studies present this stash initial or no didn’t what’s its position. School create by insidious there deep shine. Of to each class to gain, it steadily go destined clarinet disappointment continued trial. Have title projects they the to links of more lots of derisively have ship effort hours. Little the coffee the who a fall is from her than saw an they them been never my that we’ve been for to as participate to determined himself there.",
	},
	{
		id: 4,
		desc: "Proposal. Which and far which, as answers, are the on concise eyes. Avoids bread to them. Been up by in by felt blind and on higher be both poets, the head thought, his frequencies to in however it a were for client competitive the transformed assignment. With me in arrives not. And for the antiquity would as to more it conflict- of their them. Familiar if will not world have will workers, for get are to richer the in something allpowerful sooner one attention next two chosen he but linux nice yield warp should what there oh, his officers, term.",
	},
];

const SingleBlogContent = () => {
	const { id } = useParams();
	console.log(id);

	return (
		<div className="grid lg:grid-cols-3 gap-8 mb-5 md:mb-10">
			<div className="lg:col-span-2 mt-5 md:mt-10">
				<div className="flex flex-col gap-3">
					{description.map(({ id, desc }) => (
						<p key={id} className="text-base md:text-lg">
							{desc}
						</p>
					))}
				</div>
				<div className="mt-20">
					<div className="flex items-center gap-4">
						<h3 className="text-lg text-textColor">Categories:</h3>
						<button className="px-2 py-1 border hover:border-textColor rounded-full mx-1 my-2 hover:text-white hover:bg-textColor duration-300 transition-all ease-in-out">
							Classic Music
						</button>
					</div>
					<div className="mt-3">
						<Tags
							tags={tags.slice(0, 45)}
							title="Tags"
							bg={false}
							icon={false}
							colon={true}
						/>
					</div>
				</div>
			</div>
			<RightBar />
		</div>
	);
};

export default SingleBlogContent;
