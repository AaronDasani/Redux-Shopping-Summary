
import React, { Component } from 'react'
import {Collapse,Row,Col} from 'react-bootstrap';
import productImage from '../Images/adidasShoes2.jpg'
export default class ItemDetail extends Component {
    constructor(){
        super();
        this.state={
            open:false
        }
    }
  render() {
    return (
        <div>
            <button style={{outline:"none"}} className="collaspeBtn" onClick={()=>this.setState({open:!this.state.open})}>See item details {this.state.open? "-":"+"} </button>
            <Collapse in={this.state.open}>
                <div id="itemDetail-collapse" className="mt-2">
                   <Row>
                       <Col><img src={productImage} alt="product img"/></Col>
                       <Col><small>A remarkable shoe that's naturally soft, cozy all over, and fits your every move.</small></Col>
                   </Row>
                </div>
        </Collapse>
        </div>
    )
  }
}
