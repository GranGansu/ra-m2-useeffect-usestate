export default function InputNumber({number, id}){
    return (
        <input name="number" id={id} defaultValue={number} type="number" />
    )
}