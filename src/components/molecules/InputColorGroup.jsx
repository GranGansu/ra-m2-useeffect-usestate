import { Label, InputColor } from './atoms'
import PropTypes from 'prop-types';

export default function InputColorGroup({ id, color, title, setter }) {
    return <><Label id={id}>{title}</Label><InputColor setter={setter} color={color} id={id} /></>
}

InputColorGroup.propTypes = {
    id:PropTypes.string,
    number: PropTypes.number,
    title: PropTypes.string,
    setter: PropTypes.func
}