import { useLocation } from "react-router-dom";
import { getFromLocatlStrg, readAndWishCalculate, saveToLocalStrg } from "../../Utility/Utillity";
import { toast } from "react-toastify";

const BookDetails = () => {
    const { state } = useLocation();
    const { bookName, image, author, bookId, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = state;

    const handleReadBtn = () => {
        const isDubleId = readAndWishCalculate("readCart", bookId)
        if (isDubleId) {
            return toast.error("Already read this book")
        }
        saveToLocalStrg("readCart", bookId)
    }
    const handleWishListBtn = () => {
        const isInReadList = readAndWishCalculate("readCart", bookId)
        if (isInReadList) {
            return toast.error("Already read this book")
        }
        const isDubleIdInWishList = readAndWishCalculate("wishCart", bookId)
        if (isDubleIdInWishList) {
            return toast.error("Already Added this book in wishList")
        }
        else {
            saveToLocalStrg("wishCart", bookId)
        }
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-1/3 bg-base-200">
                <img
                    className="w-2/3 h-2/3 rounded-lg"
                    src={image}

                    alt="Movie" />
            </figure>
            <div className="card-body w-2/3 space-y-2">
                <h2 className="card-title text-3xl">{bookName}</h2>
                <p>By : {author}</p>
                <hr />
                <p className="flex-grow-0">{category}</p>
                <hr />
                <p><span className="font-bold">Review : </span>{review}</p>
                <div className="flex text-custom-primary">
                    <p className="font-bold text-black">Tag : </p>
                    {
                        tags.map((tag, idx) => <p key={idx}>#{tag}</p>)
                    }
                </div>
                <hr />
                <div className="flex gap-10">
                    <div className="space-y-3">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="space-y-3">
                        <p className="font-bold">{totalPages}</p>
                        <p className="font-bold">{publisher}</p>
                        <p className="font-bold">{yearOfPublishing}</p>
                        <p className="font-bold">{rating}</p>
                    </div>
                </div>
                <div className="card-actions">
                    <button onClick={handleReadBtn} className="btn btn-outline">Read</button>
                    <button onClick={handleWishListBtn} className="btn btn-primary">Wishlist</button>
                </div>
            </div>
        </div >
    );
};

export default BookDetails;