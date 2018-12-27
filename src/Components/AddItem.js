import React, { Component } from 'react';

class AddItem extends Component {

  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.addClick}>
          {/* {console.log(this.props.addClick)} */}
          <div className="form-group">
            <div>
              <label htmlFor="dropDownList">Products: </label>
            </div>
            <select onChange={this.props.updateList} id="dropDownList">
              <option value="" id="option" disabled selected>Add to order...</option>
              {this.props.dropDown.map((item, idx) => {
                return (<option key={idx}>
                  {item.name}
                </option>
                )
              })
              }
            </select>
            <div>
              <label className="" htmlFor="quantity">Quantity: </label>
              <input type="number" id="quantity" className="form-control col-md-12" onChange={this.props.updateQuantity} required></input>
            </div>
            <h3>Total Price: ${this.props.total}</h3>
          </div>
          <button className="btn btn-primary btn-lg btn-block" type="submit">Add Item</button>
        </form>
      </div >
    )
  }
}

export default AddItem