import {Row,Col} from 'react-bootstrap';
import React from 'react'

export default function EstTaxAndFee(props) {
  return (
    <div>
        <Row>
            <Col>
              <span className="d-block">Est. taxes & fees</span>
              <small>(Based on 94085)</small>
            </Col>
            <Col className="font-weight-bold text-center">${props.amount}</Col>
          </Row>
    </div>
  )
}
