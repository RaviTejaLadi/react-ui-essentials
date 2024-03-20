export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FLEX_DIRECTION":
      return { ...state, flexDirection: action.payload };
    case "SET_JUSTIFY_CONTENT":
      return { ...state, justifyContent: action.payload };
    case "SET_ALIGN_ITEMS":
      return { ...state, alignItems: action.payload };
    case "SET_ALIGN_CONTENT":
      return { ...state, alignContent: action.payload };
    case "SET_FLEX_WRAP":
      return { ...state, flexWrap: action.payload };
    case "SET_GAP":
      return { ...state, gap: action.payload };
    case "SET_ROW_GAP":
      return { ...state, rowGap: action.payload };
    case "SET_COLUMN_GAP":
      return { ...state, columnGap: action.payload };
    case "SET_ALIGN_SELF":
      return { ...state, alignSelf: action.payload };
    case "SET_ORDER":
      return { ...state, order: action.payload };
    case "SET_FLEX_GROW":
      return { ...state, flexGrow: action.payload };
    case "SET_FLEX_SHRINK":
      return { ...state, flexShrink: action.payload };
    case "SET_FLEX_BASIS":
      return { ...state, flexBasis: action.payload };
    case "SET_FLEX":
      return { ...state, flex: action.payload };
    case "SET_DIVS":
      return { ...state, divs: action.payload };
    case "SET_CODE":
      return { ...state, code: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
