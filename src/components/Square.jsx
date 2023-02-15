function Square({ value, onSquareClick }) {
    console.log("square");
    return (
      <button className='square' onClick={onSquareClick}>
        {value}
      </button>
    );
}

export default Square;