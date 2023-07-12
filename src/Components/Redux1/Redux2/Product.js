import React, { Component } from 'react'
import axios from 'axios'
// import productDetails from './productDetails'
import productDetailsAction from '../../../Actions/productaction'

class Product extends Component {
    constructor(props){
        super(props)
        this.state={
            image:"",
            title:"",
            Price:"",
        }

    }
    componentDidMount(){
        axios.get(`https://fakestoreapi.com/products/11`).then((productDetails)=>{

            console.log(productDetails.data);
            // productDetails(productDetails.data)
                productDetailsAction(productDetails.data)
            this.setState({
                image: productDetails.data.image,
                title: productDetails.data.title,
                Price: productDetails.data.price,
            })
        })
    }
  render() {
    return (
      <div className='container mt-5' >
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="card">
                <div className="card-header">
                    <img src={this.state.image} width="120px" height="120px" />
                <div className="card-body">
                    <h4>{this.state.title}</h4>
                    <h4>${this.state.Price}</h4>
                    <button className='btn btn-primary'>product details</button>
                </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Product