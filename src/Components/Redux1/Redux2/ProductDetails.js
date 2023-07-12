import React, { Component } from 'react'
import {connect} from 'react-redux'

class ProductDetails extends Component {
  componentDidMount(){
    console.log(this.props);
  }
  render(){
    return (
      <div>
        {
          Object.keys(this.props.storedata.textReducer.productData).length >0 ?
           (
          <div className='card'>
            <div className="row">
              <div className="col-4 p-5">
                <img src={this.props.storedata.textReducer.productData.image} width="100%" height="100%"/>
              </div>
              <div className="col-8">
              <dl>
                  <dt>Product ID</dt>
                  <dd>{this.props.storedata.textReducer.productData.id}</dd>
                  <dt>Product Title</dt>
                  <dd>{this.props.storedata.textReducer.productData.title}</dd>
                  <dt>Product Category</dt>
                  <dd>{this.props.storedata.textReducer.productData.category}</dd>
                  <dt>Product Price</dt>
                  <dd>${this.props.storedata.textReducer.productData.price}</dd>
                  <dt>Product Description</dt>
                  <dd>{this.props.storedata.textReducer.productData.description}</dd>
                  <dt>Product Rating</dt>
                  <dd>{this.props.storedata.textReducer.productData.rating.rate}</dd>
                </dl>
              </div>
            </div>
            
          </div>
             ):(
             <div>
              <div >
                <div className='text-danger'>
                  <h3>Data not Available</h3>
                </div>
              </div>
             </div>
             )
        }
      </div>
    )
  }
}
//connect() will take 2 parameters, 2nd parameter is not required which will return null so i mentioned null.
export default connect((storeData)=>{
  //Here, below the return object will be available like  props to the productDetails Component 
  return{
    storedata:storeData
  }
},null)(ProductDetails)
//Above is the "closuer" concept
