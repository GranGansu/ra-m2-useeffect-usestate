export default function InputColor({color, id}){
    return (
        <input name="color" id={id} defaultValue={color} type="color"/>
    )
}