import React, { Component } from "react";
import fastCompare from "react-fast-compare";
import invariant from "invariant";
import useSeo from "./useSeo";
import SeoProvider, { Context } from "./Provider";
import SeoData from "./SeoData";
import Dispatcher from "./Dispatcher";
import { without } from "./utils";
import { TAG_NAMES, VALID_TAG_NAMES, HTML_TAG_MAP } from "./constants";

class Seo extends Component {
  static defaultProps = {
    defer: true,
    encodeSpecialCharacters: true,
    prioritizeSeoTags: false,
  };

  shouldComponentUpdate(nextProps) {
    return !fastCompare(without(this.props, "seoData"), without(nextProps, "seoData"));
  }

  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }

    switch (child.type) {
      case TAG_NAMES.SCRIPT:
      case TAG_NAMES.NOSCRIPT:
        return {
          innerHTML: nestedChildren,
        };

      case TAG_NAMES.STYLE:
        return {
          cssText: nestedChildren,
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }

  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...(arrayTypeChildren[child.type] || []),
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren),
        },
      ],
    };
  }

  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case TAG_NAMES.TITLE:
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps },
        };

      case TAG_NAMES.BODY:
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps },
        };

      case TAG_NAMES.HTML:
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps },
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps },
        };
    }
  }

  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };

    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName],
      };
    });

    return newFlattenedProps;
  }

  warnOnInvalidChildren(child, nestedChildren) {
    invariant(
      VALID_TAG_NAMES.some((name) => child.type === name),
      typeof child.type === "function"
        ? `You may be attempting to nest <Seo> components within each other, which is not allowed. Refer to our API for more information.`
        : `Only elements types ${VALID_TAG_NAMES.join(", ")} are allowed. Seo does not support rendering <${
            child.type
          }> elements. Refer to our API for more information.`
    );

    invariant(
      !nestedChildren ||
        typeof nestedChildren === "string" ||
        (Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string")),
      `Seo expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );

    return true;
  }

  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};

    React.Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }

      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});

      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }

      switch (type) {
        case TAG_NAMES.FRAGMENT:
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;

        case TAG_NAMES.LINK:
        case TAG_NAMES.META:
        case TAG_NAMES.NOSCRIPT:
        case TAG_NAMES.SCRIPT:
        case TAG_NAMES.STYLE:
          arrayTypeChildren = this.flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren);
          break;

        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });

    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }

  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { seoData } = props;

    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }

    if (seoData && !(seoData instanceof SeoData)) {
      const data = seoData;
      seoData = new SeoData(data.context, true);
      delete newProps.seoData;
    }

    return seoData ? (
      <Dispatcher {...newProps} context={seoData.value} />
    ) : (
      <Context.Consumer>{(context) => <Dispatcher {...newProps} context={context} />}</Context.Consumer>
    );
  }
}

export { Seo, SeoData, SeoProvider, useSeo };
