import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData()
    const { title, price, _id, img } = service
    const {user} = useContext(AuthContext)

    const handleBookService =(e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const email = form.email.value
        const booking = {
            customerName: name,
            email,
            date,
            service_id: _id,
            price,
            service: title,
            img
        }
        console.log(booking)        
        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers:{
                'content-type': "application/json"
            },
            body:JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div>
            <h2>Book service: {title}</h2>
            <form onSubmit={handleBookService} className="card-body grid grid-cols-1 md:grid-cols-2">
                <div className="form-control col-span-1">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" required />
                    <label className="label">
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Amount</span>
                    </label>
                    <input type="text" name="due" defaultValue={'$'+price} className="input input-bordered" required />
                    <label className="label">
                    </label>
                </div>                
                <div className="form-control mt-6 md:col-span-2">
                    <button className="btn btn-primary btn-block">Login</button>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;