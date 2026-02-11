import React, {Component} from 'react'

class ListBookComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            books: []
        }
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Books List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Book Author</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListBookComponent