import mapStateOnServer from "./server";

export function clearInstances() {
  instances.length = 0;
}

export const isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);

export default class HelmetData {
  instances = [];
  canUseDOM = isDocument;
  context;

  value = {
    setHelmet: (serverState) => {
      this.context.helmet = serverState;
    },
    helmetInstances: {
      get: () => (this.canUseDOM ? instances : this.instances),
      add: (instance) => {
        (this.canUseDOM ? instances : this.instances).push(instance);
      },
      remove: (instance) => {
        const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
        (this.canUseDOM ? instances : this.instances).splice(index, 1);
      },
    },
  };

  constructor(context, canUseDOM) {
    this.context = context;
    this.canUseDOM = canUseDOM || false;

    if (!canUseDOM) {
      context.helmet = mapStateOnServer({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {},
      });
    }
  }
}
