import React, { Component } from "react";

import SeoData, { isDocument } from "./SeoData";

const defaultValue = {};

export const Context = React.createContext(defaultValue);

export default class SeoProvider extends Component {
  static canUseDOM = isDocument;

  seoData;

  constructor(props) {
    super(props);

    this.seoData = new SeoData(this.props.context || {}, SeoProvider.canUseDOM);
  }

  render() {
    return <Context.Provider value={this.seoData.value}>{this.props.children}</Context.Provider>;
  }
}
