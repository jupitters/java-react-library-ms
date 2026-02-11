import React, { Component } from 'react'

class CreateBookComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            author: ''
        }
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