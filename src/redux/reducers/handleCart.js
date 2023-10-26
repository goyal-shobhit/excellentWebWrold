let cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_TO_CART":
      // check if item is already there
      const isExist = state.find((x) => x.id === product.id);
      if (isExist) {
        // increase the quantity of the item
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELETE_ITEM":
      const exitItem = state.find((item) => item.id === product.id);

      if (exitItem.qty === 1) {
        // only one quantity in the cart
        return state.filter((item) => item.id !== exitItem.id);
      } else {
        // Reduce the quantity if greater than 1
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;
    default:
      return state;
      break;
  }
};

export default handleCart;
