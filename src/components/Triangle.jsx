import Label from './atoms/Label'
import InputColor from './atoms/InputColor'
import InputNumber from './atoms/InputNumber'
import TriangleSvg from './atoms/TriangleSvg'
export default function Triangle({ state, setter }) {
    return (
        <div id="triangle">
            <form onChange={(e) => {
                setter({ color: e.target.form.elements.color.value, number: e.target.form.elements.number.value })
            }}>
                <Label id="triangleNumber">Triangle size</Label><InputNumber id="triangleNumber" number={state.number} />
                <br />
                <Label id="triangleColor">Triangle color</Label><InputColor id="triangleColor" color={state.color} />
                <TriangleSvg color={state.color} size={state.number} />
            </form>
        </div>
    )
}