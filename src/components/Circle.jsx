import Label from './atoms/Label'
import InputColor from './atoms/InputColor'
import InputNumber from './atoms/InputNumber'
import CircleSvg from './atoms/CircleSvg'
export default function Circle({ state, setter }) {
    return (
        <div id="circle">
            <form onChange={(e) => {
                setter({ color: e.target.form.elements.color.value, number: e.target.form.elements.number.value })
            }}>
                <Label id="circleNumber">Circle size</Label><InputNumber id="circleNumber" number={state.number} />
                <br />
                <Label id="circleColor">Circle color</Label><InputColor id="circleColor" color={state.color} />
                <CircleSvg color={state.color} size={state.number} />
            </form>
        </div>
    )
}