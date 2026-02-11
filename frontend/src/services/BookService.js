import axios from 'axios';
const API_BASE_URL= "http://localhost:8080/api/v1/books"

class BookService {
    getBooks(){
        return axios.get(API_BASE_URL);
    }

    createBook(book){
        return axios.post(API_BASE_URL, book);
    }

    getBookById(id){
        return axios.get(API_BASE_URL + '/' + id);
    }

    updateBook(book, id){
        return axios.put(API_BASE_URL + '/' + id, book);
    }
}

export default new BookService();