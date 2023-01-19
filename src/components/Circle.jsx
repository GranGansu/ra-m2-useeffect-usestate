import { CircleSvg } from './molecules/atoms/'
import { InputColorGroup, InputNumberGroup } from './molecules/'
import PropTypes from 'prop-types';

export default function Circle({ state, setter }) {
    return (
        <div id="circle">
            <form>
                <InputNumberGroup setter={setter} id="circleNumber" title="Circle number" number={state.number} />
                <br />
                <InputColorGroup setter={setter} id="circleColor" title="Circle color" color={state.color} />
                <CircleSvg color={state.color} size={state.number} />
            </form>
        </div>
    )
}

Circle.propTypes = {
    state: PropTypes.object,
    setter: PropTypes.func
}