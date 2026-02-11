import axios from 'axios';
const API_BASE_URL= "http://localhost:8080/api/v1/books"

class BookService {
    getBooks(){
        return axios.get(API_BASE_URL);
    }
}

export default new BookService();