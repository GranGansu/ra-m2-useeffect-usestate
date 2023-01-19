import PropTypes from 'prop-types';

export default function InputNumber({ number, id, setter }) {
    return (
        <input onChange={(e) => {
            setter(prev => { return { ...prev, number: +e.target.value } })
        }} name="number" id={id} defaultValue={number} type="number" />
    )
}

InputNumber.propTypes = {
    number: PropTypes.number,
    id: PropTypes.string
}