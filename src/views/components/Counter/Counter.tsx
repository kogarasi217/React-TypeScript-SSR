import * as React from 'react';

export interface CounterProps {}

export interface CounterState {
  counter: number;
}

export default class Counter extends React.Component<
  CounterProps,
  CounterState
  > {
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
  }


  incrementCounter() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>
          Counter at: {counter}
        </h1>
        <button type="button" onClick={() => this.incrementCounter()}>
          CountUp
        </button>
      </div>
    );
  }
}
