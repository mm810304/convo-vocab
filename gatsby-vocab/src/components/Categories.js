import React from 'react';
import cx from 'classnames';

import styles from './categories.module.css';

const Categories = ({ categories, filterLessons, selectedCategory }) => {
  return (
    <React.Fragment>
      <div className={styles.btnContainer}>
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              key={index}
              className={cx(styles.filterBtn, [selectedCategory === category ? styles.selected : styles.unselected])}
              onClick={() => filterLessons(category)}
            >
              {category === 'all' ? 'All' : `Most Important ${category}`}
            </button>
          )
        })}
      </div>
      <div className={styles.explainerContainer}>
        <p className={styles.explainer}>All these expressions, idioms, and slang are used a lot by native English speakers, but the ones covered in <span className={styles.emphasize}>'Most Important 1'</span> are the most common and important to know!</p>
      </div>
      
    </React.Fragment>
    
  )
};

export default Categories;