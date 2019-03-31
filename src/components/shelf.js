import React, { Component } from 'react';

class App extends Component {

constructor(props) {
  super(props)

  this.state = {
     shelfItems: [
         'shampoo',
         'chocolate',
         'yoghort'
     ]
  }
}

onClickAdd = (item) => {
    console.log('item is: '+item)
    this.props.addItem(item)
}


    render() {
        const shelfitems = this.state.shelfItems.map((item, idx)=> {
            return <li key={idx}><button onClick={()=> this.onClickAdd(item)}>[+]</button>{item}</li>
        })
        return (
            <div>
                <h2>Shelf</h2>
                {shelfitems}
            </div>
        );
    }
}

export default App;
