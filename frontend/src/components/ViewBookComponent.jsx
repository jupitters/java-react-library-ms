import React, { Component, useEffect, useState } from 'react';
import BookService from "../services/BookService";
import { useParams } from 'react-router-dom';

const ViewBookComponent = () => {
    const { id } = useParams()
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(() => {
        BookService.getBookById(id).then(book => {
            setName(book.name)
            setAuthor(book.author)
        })
    }, [])

    return (
        <div>
            <br /> <br />
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Book Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label>Title: </label>
                        <div> {this.state.book.name}</div>
                        <label>Author: </label>
                        <div> {this.state.book.author}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBookComponent