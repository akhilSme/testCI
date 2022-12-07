export default (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          incomeTransactions: [action.payload, ...state.incomeTransactions]
        };
      case "SIGNUP":
        return {
          ...state,
          expenseTransactions: [action.payload, ...state.expenseTransactions]
        };
      default:
        return state;
    }
  };
  