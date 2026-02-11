import React, { Component } from 'react'

class CreateBookComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            author: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this)
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this)
        this.saveBook = this.saveBook.bind(this)
    }

    saveBook = (e) => {
        e.preventDefault()

        let book = {name: this.state.name, author: this.state.author};

    }

    changeNameHandler = (e) => {
        this.setState({ name: e.target.value })
    }

    changeAuthorHandler = (e) => {
        this.setState({ author: e.target.value })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Book</h3>
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