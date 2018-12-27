import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CartHeader from './Components/CartHeader.js'
import CartFooter from './Components/CartFooter.js'
import CartItems from './Components/CartItems.js'
import CartItem from './Components/CartItem.js'
import AddItem from './Components/AddItem.js'
// import Total from './Components/Total.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dropDown: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      cartItemsList: [],
      newItemName: '',
      newItemPrice: 0,
      newItemQuantity: 0,
      totalSum: 0
    }
  }

  addClick = (event) => {
    event.preventDefault()
    let newItem = {
      product: {
        name: this.state.newItemName,
        price: this.state.newItemPrice,
        quantity: this.state.newItemQuantity,
        itemTotal: Number(((this.state.quantity * this.state.price)).toFixed(2))
      }
    }
    this.setState({
      cartItemsList: [...this.state.cartItemsList, newItem],
      totalSum: this.state.totalSum + newItem.itemTotal
    })
  }

  updateList = (event) => {

    let filtered = this.state.dropDown.filter((item) => {
      return item.name === event.target.value
    })
    this.setState({
      newItemName: event.target.value,
      newItemPrice: (filtered[0].priceInCents / 100).toFixed(2)
    })
  }

  updateQuantity = (event) => {
    event.preventDefault()
    this.setState({
      newItemQuantity: event.target.value
    })
  }

  render() {

    return (
      <div className="App" >
        <CartHeader />
        <CartItems
          cartItems={this.state.cartItemsList}
        />
        {/* <Total

        /> */}
        <AddItem
          dropDown={this.state.dropDown}
          updateList={this.updateList}
          updateQuantity={this.updateQuantity}
          addClick={this.addClick}
          total={this.state.totalSum}
        />
        <CartFooter copyright={'2016'} />
      </div >
    );
  }
}

export default App;
