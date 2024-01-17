export const getPagesState = (state) => state?.localPage;

export const getPageIndex = (state) => getPagesState(state)?.page;
