import React, {Component} from 'react'
import BookService from "../services/BookService";

class ListBookComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            books: []
        }
        this.addBook = this.addBook.bind(this);
    }

    componentDidMount() {
        BookService.getBooks().then((res) => {
            this.setState({ books: res.data });
        })
    }

    addBook(){
        this.props.history.push("/add-book");
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
                            <tr key={book.id}>{book.name}
                                <td>{book.name}</td>
                                <td>{book.author}</td>
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