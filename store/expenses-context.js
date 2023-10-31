import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Shoes',
        amount: 59.99,
        date: new Date('2022-12-19')
    },
    {
        id: 'e2',
        description: 'Pants',
        amount: 89.79,
        date: new Date('2023-10-31')
    },
    {
        id: 'e3',
        description: 'Bannas',
        amount: 2.89,
        date: new Date('2022-12-01')
    },
    {
        id: 'e4',
        description: 'Book - The Traitors Mark',
        amount: 29.65,
        date: new Date('2023-07-18')
    },
    {
        id: 'e5',
        description: 'Book - Working Stiff',
        amount: 14.99,
        date: new Date('2022-05-05')
    },
    {
        id: 'e6',
        description: 'Hair supplies',
        amount: 25.48,
        date: new Date('2022-10-31')
    },
    {
        id: 'e7',
        description: 'Sweat Shirt',
        amount: 40.00,
        date: new Date('2023-01-05')
    },
    {
        id: 'e8',
        description: 'Biscotti',
        amount: 9.98,
        date: new Date('2023-10-30')
    },
    {
        id: 'e9',
        description: 'Cat Litter',
        amount: 18.69,
        date: new Date('2023-10-28')
    },
    {
        id: 'e10',
        description: 'Art Supplies',
        amount: 50.37,
        date: new Date('2023-10-30')
    },
    
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;