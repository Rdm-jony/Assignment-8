import { CiLocationOn } from "react-icons/ci";
import { MdOutlineContactPage, MdOutlineGroup } from "react-icons/md";

const ListedBook = ({ book }) => {
    console.log(book)
    const { bookName, image, author, rating, category, tags, bookId, yearOfPublishing, publisher, totalPages } = book;
    return (
        <div className="card  lg:card-side bg-base-100 shadow-xl">
            <figure className="w-1/3 bg-base-200 py-5">
                <img
                    src={image} className="w-1/3 rounded-lg"
                    alt="Album" />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <p className="flex-grow-0">By : {author}</p>
                <div className="flex text-custom-primary">
                    <p className="font-bold text-black">Tag : </p>
                    {
                        tags.map((tag, idx) => <p key={idx}>#{tag}</p>)
                    }
                    <p className="flex items-center text-black"><CiLocationOn /> <span>Year of Publishing: {yearOfPublishing}</span>
                    </p>
                </div>
                <div className="flex">
                    <p className="flex items-center"><MdOutlineGroup className="text-2xl mr-2" />
                        Publisher: {publisher}</p>
                    <p className="flex items-center"><MdOutlineContactPage
                        className="text-2xl mr-2" />
                        Page {totalPages}</p>
                </div>
                <hr />
                <div className="space-x-4">
                    <span className="bg-primary bg-opacity-20 p-3 rounded-full">Category: {category}</span>
                    <span className="bg-warning bg-opacity-20 p-3 rounded-full">Rating: {rating}</span>
                    <span className="btn bg-custom-primary text-neutral-100 rounded-full">View Details</span>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;