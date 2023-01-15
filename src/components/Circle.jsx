import Label from "./atoms/Label";
import InputColor from "./atoms/InputColor";
import InputNumber from "./atoms/InputNumber";
import CircleSvg from "./atoms/CircleSvg";
// Importar desde el modulo atoms => import { Label, InputColor, InputNumber, CircleSvg } from './atoms'
export default function Circle({ state, setter }) {
  return (
    <div id="circle">
      <form
        onChange={(e) => {
          // Tienes que pasar el onChange a los atomos
          setter({
            color: e.target.form.elements.color.value,
            number: e.target.form.elements.number.value,
          });
        }}
      >
        {/* Label e input siempre van unidos. */}
        {/* Crea componentes de InputColorGroup e InputNumberGroup para luego usar Circle, Square y Triangle a nivel de organisms */}
        <Label id="circleNumber">Circle size</Label>
        <InputNumber id="circleNumber" number={state.number} />
        <br />
        <Label id="circleColor">Circle color</Label>
        <InputColor id="circleColor" color={state.color} />
        <CircleSvg color={state.color} size={state.number} />
      </form>
    </div>
  );
}

// Falta validación por prop-types.
