import PropTypes from 'prop-types';
export default function CircleSvg({ size, color }) {
    return (
        <svg height="200" width="100%">
            <circle cx={size} cy={size} r={size} fill={color} />
        </svg>
    )
}
CircleSvg.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string
}