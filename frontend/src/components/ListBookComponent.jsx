import React, { useEffect, useState} from 'react'
import BookService from "../services/BookService";
import { useNavigate } from 'react-router-dom';

const ListBookComponent = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        BookService.getBooks().then((res) => {
            setBooks(res.data)
        })
    },[])

    const deleteBook = (id) => {
        BookService.deleteBook(id).then(() => {
            setBooks(books.filter(book => book.id !== id))
        })
    }

    const viewBook = (id) => {
        navigate(`/view-book/${id}`);
    }

    const editBook = (id) => {
        navigate(`/add-book/${id}`);
    }

    const addBook = () => {
        navigate("/add-book/-1");
    }

    return(
        <div>
            <h2 className="text-center">Books List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addBook}> Add Book</button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Book Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        books.map((book) =>
                        <tr key={book.id}>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>
                                <button onClick={() => editBook(book.id)} className="btn btn-info">Update</button>
                                <button style={{marginLeft: "10px"}} onClick={() => deleteBook(book.id)} className="btn btn-alert">Delete</button>
                                <button style={{marginLeft: "10px"}} onClick={() => viewBook(book.id)} className="btn btn-info">View</button>
                            </td>
                        </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListBookComponent