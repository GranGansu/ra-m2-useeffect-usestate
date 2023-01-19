import { SquareSvg } from './molecules/atoms/'
import { InputColorGroup, InputNumberGroup } from './molecules/'
import PropTypes from 'prop-types';

export default function Square({ state, setter }) {
    return (
        <div id="square">
            <form>
                <InputNumberGroup setter={setter} id="squareNumber" title="Square number" number={state.number} />
                <br />
                <InputColorGroup setter={setter} id="squareColor" title="Square color" color={state.color} />
                <SquareSvg color={state.color} size={state.number} />
            </form>
        </div>
    )
}

Square.propTypes = {
    state: PropTypes.object,
    setter: PropTypes.func
}