import { useEffect, useState } from "react";
import BookService from "../services/BookService";
import { useNavigate, useParams } from "react-router-dom";

const CreateBookComponent = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(()=>{
        if(id === -1) return;

        BookService.getBookById(id).then(res => {
            let book = res.data;
            setName(book.name)
            setAuthor(book.setAuthor)
        })
    }, [id])

    const saveBook = (e) => {
        e.preventDefault()
        let book = {name, author};

        if(this.state.id === -1){
            BookService.createBook(book).then(res => {
                navigate("/books");
            })
        }else{
            BookService.updateBook(book, id).then(() => {
                navigate("/books");
            })
        }


    }

    const cancel = () => {
        navigate("/books");
    }

    const getTitle = () => {
        if(id === -1){
            return <h3 className="text-center">Add Book</h3>
        }else{
            return <h3 className="text-center">Update Book</h3>
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        {
                            getTitle()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-3">
                                    <label> Name: </label>
                                    <input placeholder="Name" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label> Author: </label>
                                    <input placeholder="Author" name="author" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
                                </div>

                                <button className="btn btn-success" onClick={saveBook}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBookComponent