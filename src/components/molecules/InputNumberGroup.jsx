import { Label, InputNumber } from './atoms'
import PropTypes from 'prop-types';

export default function InputNumberGroup({ id, number, title, setter }) {
    return <><Label id={id}>{title}</Label><InputNumber setter={setter} number={number} id={id} /></>
}

InputNumberGroup.propTypes = {
    id:PropTypes.string,
    number: PropTypes.number,
    title: PropTypes.string,
    setter: PropTypes.func
}