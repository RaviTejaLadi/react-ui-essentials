import React, { Component } from "react";

import HelmetData, { isDocument } from "./HelmetData";

const defaultValue = {};

export const Context = React.createContext(defaultValue);

export default class HelmetProvider extends Component {
  static canUseDOM = isDocument;

  helmetData;

  constructor(props) {
    super(props);

    this.helmetData = new HelmetData(this.props.context || {}, HelmetProvider.canUseDOM);
  }

  render() {
    return <Context.Provider value={this.helmetData.value}>{this.props.children}</Context.Provider>;
  }
}
