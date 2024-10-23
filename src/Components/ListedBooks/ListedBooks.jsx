import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { getFromLocatlStrg } from "../../Utility/Utillity";
import { useLoaderData } from "react-router-dom";
import ListedBook from "./ListedBook/ListedBook";

const ListedBooks = () => {
    const [listOfBooks, setListOfBooks] = useState([])
    const [nameOfCart, setNameOfCart] = useState("readCart")
    const allItems = useLoaderData()
    useEffect(() => {
        const listedItems = getFromLocatlStrg(nameOfCart)
        const filterBooks = allItems?.filter(item => listedItems.includes(item.bookId))
        setListOfBooks(filterBooks)

    }, [allItems, nameOfCart])

    const handleSortProperty = (property) => {
        const sortedArray = listOfBooks.sort((a, b) => b[property] - a[property])
        setListOfBooks([...sortedArray])
    }
    return (

        <div>
            <h2 className="font-bold text-3xl text-center bg-base-200 py-5">Books</h2>
            <div className="flex justify-center">
                <details className="dropdown">
                    <summary className="btn m-1 bg-custom-primary text-neutral-50">Sort By <MdKeyboardArrowDown className="text-xl" />
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleSortProperty('rating')}><a>Rating</a></li>
                        <li onClick={() => handleSortProperty('totalPages')}><a>Number of pages</a></li>
                        <li onClick={() => handleSortProperty('yearOfPublishing')}><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div role="tablist" className="tabs tabs-lifted flex justify-start boredr">
                <a role="tab" onClick={() => setNameOfCart("readCart")} className={nameOfCart == "readCart" ? `tab tab-active` : "tab"}>Read Books</a>
                <a role="tab" onClick={() => setNameOfCart("wishCart")} className={nameOfCart == "wishCart" ? `tab tab-active` : "tab"}>Wishlist Books</a>
                <a className="tab flex-grow"></a>
            </div>
            <div className="space-y-3">
                {

                    listOfBooks.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;