import { Component } from "react";
import shallowEqual from "shallowequal";

import handleStateChangeOnClient from "./client";
import mapStateOnServer from "./server";
import { reducePropsToState } from "./utils";
import Provider from "./Provider";

export default class SeoDispatcher extends Component {
  rendered = false;

  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }

  componentDidUpdate() {
    this.emitChange();
  }

  componentWillUnmount() {
    const { seoInstances } = this.props.context;
    seoInstances.remove(this);
    this.emitChange();
  }

  emitChange() {
    const { seoInstances, setSeo } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      seoInstances.get().map((instance) => {
        const props = { ...instance.props };
        delete props.context;
        return props;
      })
    );
    if (Provider.canUseDOM) {
      handleStateChangeOnClient(state);
    } else if (mapStateOnServer) {
      serverState = mapStateOnServer(state);
    }
    setSeo(serverState);
  }

  init() {
    if (this.rendered) {
      return;
    }

    this.rendered = true;

    const { seoInstances } = this.props.context;
    seoInstances.add(this);
    this.emitChange();
  }

  render() {
    this.init();

    return null;
  }
}
