import {useParams} from "react-router-dom"
export default function Orders(){
    const{orderId = "",userId=""}=useParams();
    return(
        <div>
        <h1>Orders</h1>
        <h3>Order Id={orderId} and UserId={userId}</h3>
        </div>
    )
}