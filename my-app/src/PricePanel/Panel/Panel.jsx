export const Panel = (props) => {
  return (
    <div className="box">
      <h3 className="box__name">{props.name}</h3>
      <p className="box__price">{props.price}</p>
      <ul className="box__offers">
        {props.condition.map((element) => { return <li key={element} className="offer__condition">{element}</li> })}
      </ul>
    </div>
  )
}