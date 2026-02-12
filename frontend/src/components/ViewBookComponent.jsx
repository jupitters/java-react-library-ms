import React, { useEffect, useState } from 'react';
import BookService from "../services/BookService";
import { useParams } from 'react-router-dom';

const ViewBookComponent = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})

    useEffect(() => {
        BookService.getBookById(id).then(res => {
            setBook(res.data)
        })
    }, [id])

    return (
        <div>
            <br /> <br />
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Book Details</h3>
                <div className="card-body">
                    <div className="row">
                        <h4>Title: </h4>
                        <div style={{fontWeight: "bold"}}>{book.name}</div>
                        <h4>Author: </h4>
                        <div style={{fontWeight: "bold"}}>{book.author}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBookComponent