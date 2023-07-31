
function Square({ onSquareClick, value }) {
  const handleClick = () => {
    onSquareClick(value);
  };

  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}

export default Square;
