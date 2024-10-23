import { toast } from "react-toastify"

const getFromLocatlStrg = (name) => {
    const items = localStorage.getItem(name)
    if (items) {
        return JSON.parse(items)
    }
    return []
}

const saveToLocalStrg = (name, id) => {
    const items = getFromLocatlStrg(name)
    items.push(id)
    localStorage.setItem(name, JSON.stringify(items))
}

const readAndWishCalculate = (nameOfCart, bookId) => {
    const items = getFromLocatlStrg(nameOfCart)
    const findDouble = items.includes(bookId)
    if (findDouble) {
        return true;
    }
   

}

export { getFromLocatlStrg, saveToLocalStrg, readAndWishCalculate }