export default function Cuadrado({ estado, setter }) {
  return (
    <div id="cuadrado">
      <form
        onChange={(e) => {
          // Elinia el console.log una vez entregas
          console.log(e.target.form.elements.numero.value);
          setter({
            color: e.target.form.elements.color.value,
            numero: e.target.form.elements.numero.value,
          });
        }}
      >
        {/* Utiliza una estructura atómica y mueve el Label y el InputNumber e InputColor a sus respectivos componentes en components/atoms*/}
        <label>Square size</label>
        <input name="numero" defaultValue={estado.numero} type="number"></input>
        {/* Puedes autocerrar los tags vacios <br></br> => <br /> <input></input> => <input /> */}
        <br></br>
        {/* falta htmlFor */}
        <label>Square color</label>
        {/* falta ID */}
        <input name="color" defaultValue={estado.color} type="color"></input>
        {/* Mover cada figura a un componente SVG con proptypes */}
        <div
          style={{
            backgroundColor: estado.color,
            width: estado.numero + "px",
            height: estado.numero + "px",
          }}
        ></div>
      </form>
    </div>
  );
}
