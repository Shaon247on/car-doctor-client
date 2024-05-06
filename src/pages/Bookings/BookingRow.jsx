
const BookingRow = ({ booking, handleDelete,handleBookingConfirm }) => {
    const { _id, service, date, service_id, price, img, email, customerName, status } = booking
    console.log(service)



    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded w-32 h-32">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">{service_id}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>${price}</td>
            <td>{date}</td>
            <th>
                {
                    status==='confirm'? <span className="font-bold text-lg text-green-600">Confirmed</span>:
                    <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-sm">Confirm</button>

                }
            </th>
        </tr>
    );
};

export default BookingRow;