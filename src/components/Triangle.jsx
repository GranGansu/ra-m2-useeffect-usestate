import { TriangleSvg } from './molecules/atoms/'
import { InputColorGroup, InputNumberGroup } from './molecules/'
import PropTypes from 'prop-types';

export default function Triangle({ state, setter }) {
    return (
        <div id="triangle">
            <form >
                <InputNumberGroup setter={setter} id="triangleNumber" title="Triangle number" number={state.number} />
                <br />
                <InputColorGroup setter={setter} id="triangleColor" title="Triangle color" color={state.color} />
                <TriangleSvg color={state.color} size={state.number} />
            </form>
        </div>
    )
}

Triangle.propTypes = {
    state: PropTypes.object,
    setter: PropTypes.func
}