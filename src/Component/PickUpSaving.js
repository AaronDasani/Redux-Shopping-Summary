
import {Row,Col,OverlayTrigger, Tooltip,ButtonToolbar} from 'react-bootstrap';
import React from 'react'

export default function pickUpSaving(props) {
  return (
    <div>
        <Row>
            <Col>
              <ButtonToolbar>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="tooltip-bottom">
                        <p>Picking up your order in the store helps cut cost, and we pass the saving on to you.</p>
                      </Tooltip>
                    }
                  >
                  <span>Tooltip on bottom</span>
                  </OverlayTrigger>
              </ButtonToolbar>
            </Col>
            <Col className="text-danger font-weight-bold text-center">-${props.amount}</Col>
        </Row>
    </div>
  )
}
