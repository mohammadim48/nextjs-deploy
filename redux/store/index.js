import { createStore } from 'redux';

// تعریف وضعیت اولیه
const initialState = {
  language: 'fa', // زبان پیش‌فرض
  texts: require('./../../components/locales/localFa.json'), // متون پیش‌فرض
};

// تعریف Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: action.payload.language,
        texts: action.payload.texts,
      };
    default:
      return state;
  }
};

// ایجاد Redux store
const store = createStore(rootReducer);

export default store;