import PropTypes from 'prop-types';

export default function Label({ children, id }) {
    return (
        <label htmlFor={id}>{children}</label>
    )
}

Label.propTypes = {
    children: PropTypes.string,
    id: PropTypes.string
}