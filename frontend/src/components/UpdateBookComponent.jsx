import React, {  useEffect, useState } from 'react'
import BookService from "../services/BookService";

const UpdateBookComponent = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(() => {
        BookService.getBookById(id).then(res => {
            const book = res.data
            setName(book.name)
            setAuthor(book.author)
        })
    }, [id])

    const updateBook = (e) => {
        e.preventDefault()

        const book = {name, author};
        BookService.updateBook(book, id).then(() => {
            navigate("/books");
        })
    }

    const cancel = () => {
        navigate("/books");
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Update Book</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-3">
                                    <label> Name: </label>
                                    <input placeholder="Name" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.event)} />
                                </div>
                                <div className="form-group">
                                    <label> Author: </label>
                                    <input placeholder="Author" name="author" className="form-control" value={author} onChange={(e) => setAuthor(e.target.event)} />
                                </div>

                                <button className="btn btn-success" onClick={updateBook}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateBookComponent