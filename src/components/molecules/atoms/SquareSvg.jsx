import PropTypes from 'prop-types';
export default function SquareSvg({ size, color }) {
    return (
        <svg height="200" width="100%">
            <rect width={size} height={size} fill={color} />
        </svg>
    )
}
SquareSvg.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string
}