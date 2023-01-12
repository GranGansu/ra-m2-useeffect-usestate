export default function Label({children, id}){
    return (
        <label htmlFor={id}>{children}</label>
    )
}