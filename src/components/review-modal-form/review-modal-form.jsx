import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './review-modal-form.module.scss';
import Button from '../button/button';
import ButtonPrimary from '../button-primary/button-primary';
import { DECIMAL_RADIX } from '../../const';

const ErrorMessage = {
  REQUIRED: 'Пожалуйста, заполните поле',
};

const RATING_INPUT_NAME = 'rating';
const RATING_VALUES = [1, 2, 3, 4, 5];

function ReviewModalForm({ className, onClose }) {
  const [ isUsernameErrorVisible, setIsUsernameErrorVisible ] = useState(false);
  const [ isCommentErrorVisible, setIsCommentErrorVisible ] = useState(false);
  const [ formData, setFormData ] = useState({
    username: '',
    advantages: '',
    disadvantages: '',
    rating: '',
    comment: '',
  });

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (formData.username === '') {
      setIsUsernameErrorVisible(true);
      return;
    }

    if (formData.comment === '') {
      setIsCommentErrorVisible(true);
      return;
    }

    return null;
  };

  const handleInputChange = (evt) => {
    const value = evt.target.name === RATING_INPUT_NAME
      ? parseInt(evt.target.value, DECIMAL_RADIX)
      : evt.target.value;

    setFormData((state) => ({
      ...state,
      [evt.target.name]: value,
    }));
  };

  const handleNameInputFocus = () => setIsUsernameErrorVisible(false);

  return (
    <section className={styles['review-modal-form']}>
      <h2 className={styles['review-modal-form__title']}>
        Оставить отзыв
      </h2>
      <Button
        className={styles['review-modal-form__close-button']}
        onClick={onClose}
      />
      <form
        className={classNames(className, styles['review-modal-form__form'])}
        action={'#'}
        method="POST"
        onSubmit={handleFormSubmit}
      >
        <div className={classNames(
          styles['review-modal-form__container'],
          styles['review-modal-form__container--left'],
        )}
        >
          <label className={classNames(
            styles['review-modal-form__label'],
            styles['review-modal-form__label--required'],
            styles['review-modal-form__label--username'],
          )}
          >
            <span className="visually-hidden">Имя</span>
            <span className={styles['review-modal-form__input-error-message']}>
              {isUsernameErrorVisible && ErrorMessage.REQUIRED}
            </span>
            <input
              className={classNames(
                styles['review-modal-form__text-input'],
                styles['review-modal-form__text-input--required'],
                { [styles['review-modal-form__text-input--error']]: isUsernameErrorVisible },
              )}
              type="text"
              name="username"
              value={formData.username}
              placeholder="Имя"
              onFocus={handleNameInputFocus}
              onChange={handleInputChange}
            />
          </label>

          <label className={classNames(
            styles['review-modal-form__label'],
            styles['review-modal-form__advantages-label'],
          )}
          >
            <span className="visually-hidden">Достоинства</span>
            <input
              className={styles['review-modal-form__text-input']}
              type="text"
              name="advantages"
              value={formData.advantages}
              placeholder="Достоинства"
              onChange={handleInputChange}
            />
          </label>

          <label className={classNames(
            styles['review-modal-form__label'],
            styles['review-modal-form__disadvantages-label'],
          )}
          >
            <span className="visually-hidden">Недостатки</span>
            <input
              className={styles['review-modal-form__text-input']}
              type="text"
              name="disadvantages"
              value={formData.disadvantages}
              placeholder="Недостатки"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className={classNames(
          styles['review-modal-form__container'],
          styles['review-modal-form__container--right'],
        )}
        >
          <fieldset className={styles['review-modal-form__rating-fieldset']}>
            <div className={styles['review-modal-form__rating-container']}>
              <p className={styles['review-modal-form__rating-title']}>
                Оцените товар:
              </p>
              <div className={styles['review-modal-form__rating-stars-container']}>
                <input
                  className={classNames(
                    'visually-hidden',
                    styles['review-modal-form__rating-stars-input'],
                  )}
                  id="rating-5"
                  type="radio"
                  name={RATING_INPUT_NAME}
                  value={RATING_VALUES[4]}
                  checked={formData.rating === RATING_VALUES[4]}
                  onChange={handleInputChange}
                />
                <label
                  className={styles['review-modal-form__rating-label']}
                  htmlFor="rating-5"
                >
                  <span className="visually-hidden">Рейтинг 5</span>
                  <svg
                    className={styles['review-modal-form__rating-star']}
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"
                    />
                  </svg>
                </label>

                <input
                  className={classNames(
                    'visually-hidden',
                    styles['review-modal-form__rating-stars-input'],
                  )}
                  id="rating-4"
                  type="radio"
                  name={RATING_INPUT_NAME}
                  value={RATING_VALUES[3]}
                  checked={formData.rating === RATING_VALUES[3]}
                  onChange={handleInputChange}
                />
                <label
                  className={styles['review-modal-form__rating-label']}
                  htmlFor="rating-4"
                >
                  <span className="visually-hidden">Рейтинг 4</span>
                  <svg
                    className={styles['review-modal-form__rating-star']}
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"
                    />
                  </svg>
                </label>

                <input
                  className={classNames(
                    'visually-hidden',
                    styles['review-modal-form__rating-stars-input'],
                  )}
                  id="rating-3"
                  type="radio"
                  name={RATING_INPUT_NAME}
                  value={RATING_VALUES[2]}
                  checked={formData.rating === RATING_VALUES[2]}
                  onChange={handleInputChange}
                />
                <label
                  className={styles['review-modal-form__rating-label']}
                  htmlFor="rating-3"
                >
                  <span className="visually-hidden">Рейтинг 3</span>
                  <svg
                    className={styles['review-modal-form__rating-star']}
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"
                    />
                  </svg>
                </label>

                <input
                  className={classNames(
                    'visually-hidden',
                    styles['review-modal-form__rating-stars-input'],
                  )}
                  id="rating-2"
                  type="radio"
                  name={RATING_INPUT_NAME}
                  value={RATING_VALUES[1]}
                  checked={formData.rating === RATING_VALUES[1]}
                  onChange={handleInputChange}
                />
                <label
                  className={styles['review-modal-form__rating-label']}
                  htmlFor="rating-2"
                >
                  <span className="visually-hidden">Рейтинг 2</span>
                  <svg
                    className={styles['review-modal-form__rating-star']}
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"
                    />
                  </svg>
                </label>

                <input
                  className={classNames(
                    'visually-hidden',
                    styles['review-modal-form__rating-stars-input'],
                  )}
                  id="rating-1"
                  type="radio"
                  name={RATING_INPUT_NAME}
                  value={RATING_VALUES[0]}
                  onChange={handleInputChange}
                />
                <label
                  className={styles['review-modal-form__rating-label']}
                  htmlFor="rating-1"
                >
                  <span className="visually-hidden">Рейтинг 1</span>
                  <svg
                    className={styles['review-modal-form__rating-star']}
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </fieldset>

          <label className={classNames(
            styles['review-modal-form__label'],
            styles['review-modal-form__label--required'],
            styles['review-modal-form__label--comment'],
          )}
          >
            <span className="visually-hidden">Комментарий</span>
            <span className={classNames(
              styles['review-modal-form__input-error-message'],
              styles['review-modal-form__input-error-message--comment'],
            )}
            >
              {isCommentErrorVisible && ErrorMessage.REQUIRED}
            </span>
            <textarea
              className={classNames(
                styles['review-modal-form__text-input'],
                styles['review-modal-form__comment-textarea'],
              )}
              name="comment"
              placeholder="Комментарий"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className={classNames(
          styles['review-modal-form__container'],
          styles['review-modal-form__container--submit'],
        )}
        >
          <ButtonPrimary
            className={styles['review-modal-form__submit']}
            type="submit"
          >
            оставить отзыв
          </ButtonPrimary>
        </div>
      </form>
    </section>
  );
}

ReviewModalForm.propTypes = {
  className: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

ReviewModalForm.defaultProps = {
  className: '',
};

export default ReviewModalForm;
