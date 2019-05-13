import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import './App.css';

import PickUpSaving from './Component/PickUpSaving';
import EstimateTaxAndFees from './Component/EstTaxAndFee';
import ItemDetail from './Component/ItemDetail';
import PromoCode from './Component/PromoCode';

import { connect } from 'react-redux';
import {EstTotalCalAction} from "./Component/Actions/EstTotalCalAction";
import DiscountImg from "./Images/ten_percent_off.png";

class App extends Component {
  constructor(){
    super();
    this.state={
      TaxAndFees:8.92,
      PickUpSaving:3.85
    }
  }
  componentDidMount=()=>{
    let EstimateAmount=(this.props.Subtotal-this.state.PickUpSaving)+this.state.TaxAndFees;
    this.props.EstTotalCalAction(EstimateAmount);
    
  }

  render() {
    
    return (
      <div className="font-weight-light">
        <div className="PurchaseSummary">
          <h2 className="mb-4 bg-dark text-light p-2 font-weight-light summaryTitle">Shopping Summary</h2>
          <div className="topSection">
            <Row>
              <Col>Subtotal</Col>
              <Col className="font-weight-bold text-center">${this.props.Subtotal}</Col>
            </Row>
            <PickUpSaving amount={this.state.PickUpSaving}/>
            <EstimateTaxAndFees amount={this.state.TaxAndFees}/>
          </div>

          <hr/>

          <Row className="font-weight-bold mb-3 mt-4">
            <Col><h4 className="font-weight-bold">TOTAL</h4></Col>
            <Col>
              <h3 style={{color:this.props.applyPromoCode && "green"}}>$ {this.props.EstimatedTotal.toFixed(2)}</h3>
              {this.props.applyPromoCode && <small className="DiscountImg"><img src={DiscountImg} alt="DiscountImg"/></small>}
            </Col>
          </Row>

          <div className="bottomSection">
            <ItemDetail/>
            <hr/>
            <PromoCode/>
          </div>

        </div>
      </div>
    )
  }
}
const mapStateToProps=StoreState=>{
  return{
    EstimatedTotal:StoreState.PromoCodeR.EstimateTotal,
    Subtotal:StoreState.PromoCodeR.SubTotal,
    applyPromoCode:StoreState.PromoCodeR.applyPromoCode

  }
}
const actionCreator={
  EstTotalCalAction,
}


export default connect(mapStateToProps,actionCreator)(App);