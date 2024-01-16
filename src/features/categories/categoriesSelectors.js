export const getSelectedCategoryState = (state) => state?.localCategory;

export const getSelectedCategoryIndex = (state) =>
  getSelectedCategoryState(state)?.category;
