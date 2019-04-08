import React, { Component } from "react";
import { TransactionForm } from "./TransactionForm";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ToggelableTransaction.css";

export class ToggleableTransaction extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { showTransactionForm: false, type: "" };
  }

  toggleForm = value => {
    this.setState({
      showTransactionForm: !this.state.showTransactionForm,
      type: value
    });
  };

  render() {
    return (
      <div className={"toggleable-transaction"}>
        <Container>
          <Row>
            <Col md={{ span: 1, offset: 5 }}>
              <Button
                variant="success"
                id="credit"
                onClick={() => this.toggleForm("CREDIT")}
                block
                size="sm"
              >
                Credit
              </Button>
            </Col>
            <Col md={{ span: 1, offset: 0 }}>
              <Button
                variant="danger"
                id="debit"
                onClick={() => this.toggleForm("DEBIT")}
                block
                size="sm"
              >
                Debit
              </Button>
            </Col>
          </Row>
        </Container>
        {(() => {
          if (this.state.showTransactionForm) {
            return (
              <TransactionForm
                type={this.state.type}
                onSuccess={this.props.onSuccess}
                style={{ padding: 100 }}
              />
            );
          }
        })()}
      </div>
    );
  }
}
