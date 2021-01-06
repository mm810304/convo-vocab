import React, { useState } from "react";
import { graphql, Link } from 'gatsby';

import { shuffle } from '../utils/shuffle';

import Categories from '../components/Categories';
import LessonsGrid from '../components/LessonsGrid';
import SEO from '../components/SEO';

import styles from './index.module.css';

const allCategories = ['all', '1', '2', '3', '4', '5'];

const HomePage = ({ data: { lessons }}) => {
  const vocabLessons = lessons.nodes;
  const shuffledLessons = shuffle(vocabLessons);

  const [categories, setCategories] = useState(allCategories);
  const [visibleLessons, setVisibileLessons] = useState(shuffledLessons);
  const [isSelectedCategory, setIsSelectedCategory] = useState('all');
 
  const filterLessons = (category) => {
    if (category === 'all') {
      setVisibileLessons(vocabLessons);
      setIsSelectedCategory('all');
      return;
    }

    const newVisibleLessons = vocabLessons.filter((lesson) => {
      return lesson.level === category;
    });
    setVisibileLessons(newVisibleLessons);
    setIsSelectedCategory(category);
  }

    return (
    <React.Fragment>
      <SEO 
        title="English Expressions, Idioms, and Slang" 
        description="Learn English expressions, idioms, and slang to speak English fluently  and understand native English speakers easily!" 
        location="https://www.convovocab.com"
      />
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Convo Vocab</h1>
        <p className={styles.description}>Learn English expressions, idioms, and slang to speak fluently and listen easily!</p>
        <p className={styles.otherLessons}>Looking for a different type of free English lesson?  <Link to="/convo"><span className={styles.colorIt}>Check out our other <strong>amazing free English content</strong> here.</span></Link></p>
      </div>
      <Categories categories={categories} filterLessons={filterLessons} selectedCategory={isSelectedCategory} />
      <LessonsGrid visibleLessons={visibleLessons} />
    </React.Fragment>
  );
};

export const query = graphql`
  query {
    lessons: allSanityVocabLesson {
      nodes {
        id
        title
        level
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default HomePage;

