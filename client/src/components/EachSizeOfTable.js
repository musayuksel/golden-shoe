export default function EachSizeOfTable({
	shoeSize,
	sizesStock,
	setChoosedShoeNum,
	choosedShoeNum,
}) {
	return (
		<li>
			<button
				className={`size-item ${
					!sizesStock.includes(shoeSize) ? "disable" : ""
				} ${choosedShoeNum === shoeSize ? "choosed" : ""}`}
				onClick={() => setChoosedShoeNum(shoeSize)}
				disabled={!sizesStock.includes(shoeSize)}
			>
				{`UK ${shoeSize}`}
			</button>
		</li>
	);
}
