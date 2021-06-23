import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


class CompProp extends Component {

     book1 ={
        title : "Angels and Demons",
        publisher : "Penguin Random House",
        author : "Dan Brown",
        price : 409,
        prodId : 2012,
    }
    
     book2 ={
        title : "Norse Mythology",
        publisher : "Bloomsbury Publishing",
        author : "Neil Gaiman",
        price : 300,
        prodId : 2019,
    }

     createCard = (book) => {
        
        return(
          <>
        <div key={book.title} className="card" style={{ "width": 320,margin:20,padding:15 }}>
          <h4 className="card-title text-center">{book.title}</h4>
          <div className="card-body">
          <p className="card-text">
            <span>Author: <b>{book.author}</b></span><br />
            <span>publisher: <b>{book.publisher}</b></span><br />
            <span>Pricesss: {book.price<400? <span><b>{book.price}</b><span className="text-success"> - Bestseller! </span></span> : <span><b>{book.price}</b></span>}</span><br/>
          </p>
          <p>Product ID: {book.prodId}</p>
        </div>
        </div>
        </>
        )
      }

    getBookDetails = () => {
        const bookArrs = [this.book1, this.book2];

        const element = (
          <div>
              <h3 className="text-center text-primary">Featured Titles</h3>
              <div className="conntainer-fluid">
                  <div className="row">
                  {/* {this.bookArr[]} */}
                  {bookArrs.map( (emp) => { return this.createCard(emp) })}
                  {/* {this.createCard(this.book1)} */}
                  </div>
              </div>        
          </div>
        )
        return element;
      }

  render() {
        return (
            <React.Fragment>
              {
                this.getBookDetails()
              }
            </React.Fragment>
        );
    }
}

export default CompProp;