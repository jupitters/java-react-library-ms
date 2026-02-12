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
    }, [])

    const saveBook = (e) => {
        e.preventDefault()
        let book = {name, author};

        if(this.state.id == -1){
            BookService.createBook(book).then(res => {
                navigate("/books");
            })
        }else{
            BookService.updateBook(book, id).then(() => {
                navigate("/books");
            })
        }


    }

    changeNameHandler = (e) => {
        this.setState({ name: e.target.value })
    }

    changeAuthorHandler = (e) => {
        this.setState({ author: e.target.value })
    }

    cancel(){
        this.props.history.push("/books");
    }

    getTitle(){
        if(this.state.id == -1){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">update Employee</h3>
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Name: </label>
                                        <input placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Author: </label>
                                        <input placeholder="Author" name="author" className="form-control" value={this.state.author} onChange={this.changeAuthorHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveBook}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateBookComponent