import Label from './atoms/Label'
import InputColor from './atoms/InputColor'
import InputNumber from './atoms/InputNumber'
import SquareSvg from './atoms/SquareSvg'
export default function Square({ state, setter }) {
    return (
        <div id="square">
            <form onChange={(e) => {
                setter({ color: e.target.form.elements.color.value, number: e.target.form.elements.number.value })
            }}>
                <Label id="squareNumber">Square size</Label><InputNumber id="squareNumber" number={state.number} />
                <br />
                <Label id="squareColor">Square color</Label><InputColor id="squareColor" color={state.color} />
                <SquareSvg color={state.color} size={state.number} />
            </form>
        </div>
    )
}