import React, {Component} from 'react'
import Shelf from '../components/Shelf'
import AddABook from '../components/AddABook'
import {getAll} from '../BooksAPI'

export default class Home extends Component {
    async componentDidMount() {
        try {
            const books = await getAll();
            const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
            const alreadyRead = books.filter(book => book.shelf === "alreadyRead");
            const wantToRead = books.filter(book => book.shelf === "wantToRead");
            console.log(currentlyReading, wantToRead, alreadyRead);
        }
        catch(error) {
            console.log(error);
        } 
    }
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf title="Currently Reading"/>
                    <Shelf title="Want to Read"/>
                    <Shelf title="Already Read"/>
                </div>
                <AddABook/>
            </div>
        )
    }
}