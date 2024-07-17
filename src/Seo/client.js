import { SEO_ATTRIBUTE, TAG_NAMES, TAG_PROPERTIES } from "./constants";
import { flattenArray } from "./utils";

const updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
  const tagNodes = headElement.querySelectorAll(`${type}[${SEO_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;

  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);

      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === TAG_PROPERTIES.INNER_HTML) {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }

      newElement.setAttribute(SEO_ATTRIBUTE, "true");

      // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
      if (
        oldTags.some((existingTag, index) => {
          indexToDelete = index;
          return newElement.isEqualNode(existingTag);
        })
      ) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }

  oldTags.forEach((tag) => tag.parentNode?.removeChild(tag));
  newTags.forEach((tag) => headElement.appendChild(tag));

  return {
    oldTags,
    newTags,
  };
};

const updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];

  if (!elementTag) {
    return;
  }

  const seoAttributeString = elementTag.getAttribute(SEO_ATTRIBUTE);
  const seoAttributes = seoAttributeString ? seoAttributeString.split(",") : [];
  const attributesToRemove = [...seoAttributes];
  const attributeKeys = Object.keys(attributes);

  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";

    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }

    if (seoAttributes.indexOf(attribute) === -1) {
      seoAttributes.push(attribute);
    }

    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }

  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }

  if (seoAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(SEO_ATTRIBUTE);
  } else if (elementTag.getAttribute(SEO_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(SEO_ATTRIBUTE, attributeKeys.join(","));
  }
};

const updateTitle = (title, attributes) => {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }

  updateAttributes(TAG_NAMES.TITLE, attributes);
};

const commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title,
    titleAttributes,
  } = newState;
  updateAttributes(TAG_NAMES.BODY, bodyAttributes);
  updateAttributes(TAG_NAMES.HTML, htmlAttributes);

  updateTitle(title, titleAttributes);

  const tagUpdates = {
    baseTag: updateTags(TAG_NAMES.BASE, baseTag),
    linkTags: updateTags(TAG_NAMES.LINK, linkTags),
    metaTags: updateTags(TAG_NAMES.META, metaTags),
    noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
    scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
    styleTags: updateTags(TAG_NAMES.STYLE, styleTags),
  };

  const addedTags = {};
  const removedTags = {};

  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];

    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });

  if (cb) {
    cb();
  }

  onChangeClientState(newState, addedTags, removedTags);
};

let _seoCallback = null;

const handleStateChangeOnClient = (newState) => {
  if (_seoCallback) {
    cancelAnimationFrame(_seoCallback);
  }

  if (newState.defer) {
    _seoCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _seoCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _seoCallback = null;
  }
};

export default handleStateChangeOnClient;
