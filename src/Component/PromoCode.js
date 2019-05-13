
import React, { Component } from 'react'
import {Collapse,InputGroup,FormControl,ButtonToolbar, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import {PromoCodeAction} from './Actions/PromoCodeAction';

class PromoCode extends Component {
    constructor(){
        super();
        this.state={
            open:false
        }
    }
    componentDidMount(){

    }

    handleSubmit=(event)=>{
        event.preventDefault();
        if (!this.props.applyPromoCode) {
            this.props.PromoCodeAction(event) 
        }
        return;
    }
  render() {
    return (
        <div>
            <button style={{outline:"none"}} className="collaspeBtn" onClick={()=>this.setState({open:!this.state.open})}>Apply promo code {this.state.open? "-":"+"}</button>
            <Collapse in={this.state.open}>
                <form id="promoCode-collapse" className="mt-3" onSubmit={this.handleSubmit}>
                   <InputGroup>
                        <FormControl name="promo_code" placeholder="Enter promo code ..."/>
                   </InputGroup>
                   <small className="text-muted">Tip: enter "DISCOUNT"</small>
                   <ButtonToolbar className="mt-2">
                       <Button variant="success" block type="submit">Apply</Button>
                   </ButtonToolbar>
                </form>
                
            </Collapse>
        </div>
    )
  }
}
const mapStateToProps=StoreState=>{
    return{
      applyPromoCode:StoreState.PromoCodeR.applyPromoCode
  
    }
  }
const actionCreators={
    PromoCodeAction,
}


export default connect(mapStateToProps,actionCreators)(PromoCode);