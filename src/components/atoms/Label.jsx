export default function Label({ children, id }) {
  return <label htmlFor={id}>{children}</label>;
}

// Añade validación por prop-types.
