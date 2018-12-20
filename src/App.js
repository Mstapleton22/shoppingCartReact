import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CartHeader from './Components/CartHeader.js'
import CartFooter from './Components/CartFooter.js'
import CartItems from './Components/CartItems.js'
import CartItem from './Components/CartItem.js'
import AddItem from './Components/AddItem.js'

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
      cart: [],
      newItemName: '',
      newItemPrice: 0
    }
  }
  addClick = (event) => {
    event.preventDefault()
    console.log(event.target)
    this.setState({

    })
  }


  updateList = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    let filtered = this.state.dropDown.filter((item) => {
      return item.name === event.target.value
    })
    console.log(filtered)
    this.setState({
      newItemName: event.target.value,
      newItemPrice: (filtered[0].priceInCents / 100)
    })
    console.log(this.setState)
  }

  render() {
    const cartItemsList =
      [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]

    return (
      <div className="App">
        <CartHeader />
        <CartItems
          cartItems={cartItemsList} // should this be cartNewItems???????
        />
        <AddItem
          dropDown={this.state.dropDown}
          updateList={this.updateList}
          addClick={this.addClick}
        />
        <CartFooter copyright={'2016'} />
      </div >
    );
  }
}

export default App;
