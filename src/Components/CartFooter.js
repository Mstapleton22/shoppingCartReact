import React from 'react';

const CartFooter = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">&copy; {props.copyright}</a>
      </nav>
    </div>
  )
}

export default CartFooter