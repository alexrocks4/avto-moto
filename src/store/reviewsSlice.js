import { createSlice } from '@reduxjs/toolkit';
import { loadReviewsState } from '../local-storage';
import { reviews } from '../mocks/reviews';

const initialState = {
  reviews: reviews,
  isLoading: true,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    reviewAdded(state, { payload }) {
      state.reviews.push(payload);
    },

    reviewsLoaded(state, { payload }) {
      state.reviews = payload;
      state.isLoading = false;
    },
  },
});

const {
  reviewAdded,
  reviewsLoaded,
} = reviewsSlice.actions;

const selectReviews = (state) => state.reviews.reviews;
const selectIsReviewsLoading = (state) => state.reviews.isLoading;

const loadReviews = () => (dispatch, _getState) => {
  const persistedReviews = loadReviewsState();
  const loadedReviews = persistedReviews === undefined
    ? initialState.reviews
    : persistedReviews;
  dispatch(reviewsLoaded(loadedReviews));
};

export {
  reviewsSlice,
  reviewAdded,
  loadReviews,
  selectReviews,
  selectIsReviewsLoading
};
