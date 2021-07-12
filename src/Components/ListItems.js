import react from 'react';

let ListItems = (props)=>{
    let {items,deleteItem} =props;
    let length = items.length;
    const list = length >0 ?(items.map((item)=>{
        return(
            <tr key = {item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td className="remove" onClick={()=>deleteItem(item.id)} > &times;</td>
            </tr>
        )
    })) : (<tr><td colSpan="3"><p>there is no item to show</p></td></tr>)
    return(
        <>
            <>{list}</>
        </>
    )
}
export default ListItems;