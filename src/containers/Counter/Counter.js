/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCounter from "../../store/actions/index";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import classes from "./Counter.module.css";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <br />
        <button
          className={classes.Button}
          onClick={() => this.props.onStoreResult(this.props.ctr)}
        >
          Store results
        </button>
        <ul className={classes.Ul}>
          {this.props.storedResults.map(result => (
            <li
              onClick={() => this.props.onDeleteResult(result.id)}
              key={result.id}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCounter.increment()),
    onDecrementCounter: () => dispatch(actionCounter.decrement()),
    onAddCounter: () => dispatch(actionCounter.add(10)),
    onSubtractCounter: () => dispatch(actionCounter.subtract(15)),
    ////////////////////////////////
    ////////////////////////////////
    onStoreResult: result => dispatch(actionCounter.storeResult(result)),
    onDeleteResult: id => dispatch(actionCounter.deleteResult(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
