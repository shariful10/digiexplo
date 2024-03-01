interface FormattedAmountProps {
	amount: number;
	className?: string;
}

const FormattedPrice = ({ amount, className }: FormattedAmountProps) => {
	const formattedAmount = new Number(amount).toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 2,
	});

	return <p className={className}>{formattedAmount}</p>;
};

export default FormattedPrice;
