import React from "react";

function LowBalanceMessage(props) {
  let lowBalanceMessage;
  const lowerLimitBalance = 10;
  if(props.balance <= lowerLimitBalance){
    lowBalanceMessage = <h5 style={{color : 'red'}}>Low Balance</h5>;
  }
  return (
    lowBalanceMessage
  );
}

export default LowBalanceMessage;
