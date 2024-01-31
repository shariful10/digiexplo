import React from "react";
import { CgClose } from "react-icons/cg";

interface Props {
	showCart: boolean;
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartPage = ({ showCart, setShowCart }: Props) => {
	return (
		<div
			className={`fixed top-0 h-screen w-full bg-black/70 z-50 ${
				showCart ? "-right-[280px]" : "-right-[1950px]"
			}`}
		>
			<div
				className={`w-[400px] bg-white h-screen p-10 fixed top-0 ${
					showCart
						? "right-0 duration-500 overflow-hidden"
						: "-right-[450px] duration-500"
				}`}
			>
				<div className="flex justify-between items-center text-[#1b2430]">
					<div className="flex items-center gap-2">
						<h3 className="text-xl font-medium">Cart</h3>
						<span>(0)</span>
					</div>
					<CgClose
						onClick={() => setShowCart(false)}
						className="cursor-pointer"
						size={24}
					/>
				</div>
				<h4 className="text-lg text-[#1b2430] mt-10">
					Your cart is empty.
				</h4>
			</div>
		</div>
	);
};

export default CartPage;
