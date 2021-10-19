import { SAVE_API, SAVE_API_EXPENSE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_API:
    return {
      ...state, currencies: action.currencies,
    };
  case SAVE_API_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        value: action.state.valor,
        description: action.state.descrição,
        currency: action.state.moeda,
        method: action.state.pagamento,
        tag: action.state.tag,
        exchangeRates: action.exchangeRates,
      }],
    };
  default:
    return {
      ...state,
    };
  }
}

export default wallet;
