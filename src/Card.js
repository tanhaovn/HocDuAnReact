function Card(props) {
  const { countProps, handleCount } = props;
  console.log(handleCount);
  return (
    <>
      <div className="Card">
        <h1>Card {countProps}</h1>
      </div>
    </>
  );
}
export default Card;
