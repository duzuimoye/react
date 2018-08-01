class Component {
  constructor (props = {}) {
    this.isReactComponent = true;
    this.state = {};
    this.props = props;
  }

  setState (stateChange) {
    Object.assign(this.state, stateChange);
  }
}

export default Component;
