import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../actions/cart'
import Shelf from './shelf'

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    removeItem = (item) => {
        this.props.action.removeFromCart(item);
    }

    render() {
        console.log('log from cart')
        console.log(this.props)
        const CartItems = this.props.cartItems.cart.map((item, idx) => {
            return <li key={idx}><button onClick={() => this.removeItem(item)}>[-]</button>{item}</li>
        })
        return (
            <div className="Cart">
            <h1>Default user: {this.props.auth.user_id}</h1>
                <Shelf
                    addItem={this.props.action.addToCart}
                />
                <h2>Cart Items</h2>
                <ol>
                    {CartItems}
                </ol>
            </div>
        )
    }
}

const mapStateToProps = ({cart, auth}) => {
    return {
        cartItems: cart,
        auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
