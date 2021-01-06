import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

import styles from './lesson.module.css';

const LessonPage = ({data: { lesson }, pageContext}) => {
  const { title, level, content } = lesson;
  const SEOImage = lesson.image.asset.fluid.src;
  const slug = pageContext.slug;
  console.log(SEOImage, slug)
  return (
    <React.Fragment>
      <SEO 
        title={title} 
        description={`Learn the English vocabulary phrase "${title}". Learn how to use it when speaking English and see many example sentences and conversations.`} 
        image={SEOImage}
        location={`https://www.convovocab.com/${slug}`}
      />
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
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default LessonPage;