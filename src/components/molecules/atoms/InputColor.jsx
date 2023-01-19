import PropTypes from 'prop-types';

export default function InputColor({ color, id, setter }) {
    return (
        <input onChange={(e) => {
            setter(prev => { return { ...prev, color: e.target.value } })
        }} name="color" id={id} defaultValue={color} type="color" />
    )
}

InputColor.propTypes = {
    color: PropTypes.string,
    id: PropTypes.string
}