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

	return <div className={className}>{formattedAmount}</div>;
};

export default FormattedPrice;
