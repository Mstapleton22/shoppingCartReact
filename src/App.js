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
        quantity: this.state.newItemQuantity
      }
    }
    const cartItemsList = [...cartItemsList, newItem]
    let total = this.state.totalSum
    total += (cartItemsList[cartItemsList.length - 1].priceInCents * cartItemsList[cartItemsList.length - 1].quantity)
    console.log(total)
    this.setState({
      cartItemsList: this.state.cartItemsList.concat([newItem]),
      total: this.state.totalSum
    })
  }

  updateList = (event) => {
    // event.preventDefault()
    // console.log(event.target.value)
    let filtered = this.state.dropDown.filter((item) => {
      return item.name === event.target.value
    })
    // console.log(filtered)
    this.setState({
      newItemName: event.target.value,
      newItemPrice: (filtered[0].priceInCents / 100).toFixed(2)
    })
    // console.log(this.setState)
  }

  updateQuantity = (event) => {
    event.preventDefault()
    // console.log(event.target.value)
    this.setState({
      newItemQuantity: event.target.value
    })
  }

  render() {

    return (
      <div className="App">
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
          total={this.state.total}
        />
        <CartFooter copyright={'2016'} />
      </div >
    );
  }
}

export default App;
