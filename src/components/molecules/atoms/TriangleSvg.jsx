import PropTypes from 'prop-types';
export default function TriangleSvg({ size, color }) {
    return (
        <svg height="200" width="100%">
            <polygon points={size / 2 + ',0 ' + size + ',' + size + ' 0,' + size} fill={color} />
        </svg>
    )
}
TriangleSvg.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string
}