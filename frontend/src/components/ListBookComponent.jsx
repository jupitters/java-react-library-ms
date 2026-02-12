import React, {Component, useEffect, useState} from 'react'
import BookService from "../services/BookService";
import { useNavigate } from 'react-router-dom';

const ListBookComponent = () => {
    const[books, setBooks] = useState([]);
    const navigate = useNavigate();

    const deleteBook = (id) => {
        BookService.deleteBook(id).then(res => {
            setBooks({ ...books.filter(book => book.id != id) })
        })
    }

    const viewBook = (id) => {
        navigate(`/view-book/${id}`);
    }

    const editBook = (id) => {
        navigate(`/add-book/${id}`);
    }

    useEffect(()=>{
        BookService.getBooks().then((res) => {
            setBooks(...books, res.data)
        })
    },[])

    const addBook = () => {
        navigate("/add-book/-1");
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Books List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addBook}> Add Book</button>
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
                            this.state.books.map(book =>
                            <tr key={book.id}>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>
                                    <button onClick={() => this.editBook(book.id)} className="btn btn-info">Update</button>
                                    <button style={{marginLeft: "10px"}} onClick={() => this.deleteBook(book.id)} className="btn btn-alert">Delete</button>
                                    <button style={{marginLeft: "10px"}} onClick={() => this.viewBook(book.id)} className="btn btn-info">View</button>
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
}

export default ListBookComponent