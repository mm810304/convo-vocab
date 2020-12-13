import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

import styles from './lesson.module.css';

const LessonPage = ({data: { lesson }}) => {
  const { title, level, content } = lesson;
  const image = lesson.image.asset.fluid;
  return (
    <React.Fragment>
      <SEO title={title} description={`${title} - Learn how to use it and understand it for fluent English conversations.`} />
      <div className={styles.lessonContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h4 className={styles.level}>{`Most Important Level ${level}`}</h4>
        <main className={styles.mainContent}>
          {ReactHtmlParser(content)}
        </main>
    </div>
    </React.Fragment>
    
  );
};

export const query = graphql`
  query($slug: String!) {
    lesson: sanityVocabLesson(slug: {
      current: {
        eq: $slug
      }
    }) {
      title
      level
      content
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default LessonPage;