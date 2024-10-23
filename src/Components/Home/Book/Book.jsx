import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Book = ({ book }) => {
    const navigate = useNavigate()
    const { bookName, image, author, rating, category, tags, bookId } = book;

    const handleNavigate = () => {
        navigate(`/book/${bookId}`, {state: book })
    }
    return (
        <div onClick={handleNavigate} className="card shadow-xl border cursor-pointer">
            <div className="p-5" >
                <figure className="bg-base-200 py-3">
                    <img
                        className="w-32 h-40"
                        src={image}
                        alt="Shoes" />
                </figure>
            </div>
            <div className="card-body">
                <div className="flex text-custom-primary">
                    {
                        tags.map((tag, idx) => <p key={idx}>{tag}</p>)
                    }
                </div>
                <h2 className="card-title">{bookName}</h2>
                <p>By : {author}</p>
                <hr />
                <div className="flex justify-between">
                    <p>{category}</p>
                    <p className="flex items-center gap-1 justify-end">{rating} <CiStar /></p>
                </div>
            </div>
        </div>
    );
};

export default Book;