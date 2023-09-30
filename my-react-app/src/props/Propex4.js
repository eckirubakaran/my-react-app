export default function Propex4(props) {
    let {d}=props;
  return (
    <div>
      <h1>The Name Is {d[1].Name}</h1>
      <h2>The Age Is {d[0].Age}</h2>
      <h2>The City Is {d[1].City}</h2>
       
    </div>
  )
}