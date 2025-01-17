// bg-[#23BE0A]
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { RingLoader } from "react-spinners";
function Cart({ data,loading }) {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
  } = data || {};

  // loading spinner 
  if(loading){
    return <RingLoader color="#36d7b7" />
  }
  
  return (
    <Link to={`/bookdetails/${bookId}`}>
      <div className="card  bg-base-100 shadow-xl border">
        <figure className="px-10 m-10 mb-0  pt-10 bg-[#F3F3F3]">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body p-10 text-start">
          <div className="flex items-center gap-10">
            <button className="bg-[#F3F3F3] p-2 rounded-lg font-semibold text-[#23BE0A] text-">
              Young adult
            </button>
            <button className="bg-[#F3F3F3] p-2 rounded-lg font-semibold text-[#23BE0A] text-">
              Identify
            </button>
          </div>
          <h2>{bookName}</h2>
          <h2 className="font-semibold">By : {author}</h2>
          <hr className="border-dashed border" />
          <div className="flex justify-between">
            <h1>Fiction</h1>
            <div className="flex items-center gap-x-4">
                <h2>{rating}</h2>
                <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cart;
