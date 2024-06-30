const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGE_TYPE":
      return { ...state, pageType: action.payload };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
export default reducer;
