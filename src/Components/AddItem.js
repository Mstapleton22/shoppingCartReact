import React, { Component } from 'react';

class AddItem extends Component {

  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.addItem}>
          {console.log(this.props.updateList)}
          <div className="form-group">
            <label htmlFor="dropDownList">Products</label>
            <select onChange={this.props.updateList} id="dropDownList">
              {this.props.dropDown.map((item, idx) => {
                return (<option key={idx}>
                  {item.name}
                </option>
                )
              })
              }
            </select>
            <label className="" htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" className="form-control col-md-12" onChange={this.props.cartItems} required></input>
          </div>
          <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.props.addClick}>Add Item</button>
        </form>
      </div >
    )
  }
}

export default AddItem