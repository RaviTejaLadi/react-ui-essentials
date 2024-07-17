import mapStateOnServer from "./server";

const instances = [];

export function clearInstances() {
  instances.length = 0;
}

export const isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);

export default class SeoData {
  instances = [];
  canUseDOM = isDocument;
  context;

  value = {
    setSeo: (serverState) => {
      this.context.seo = serverState;
    },
    seoInstances: {
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
      context.seo = mapStateOnServer({
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
