import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/SEO';

import styles from './list-of-lessons.module.css';

const ListOfAllLessonsPage = ({ data: { lessons } }) => {
  const allLessons = lessons.nodes;
  const levels = ['1', '2', '3', '4', '5'];
  return (
    <React.Fragment>
      <SEO 
        title="List of all lessons on Convo Vocab" description="Complete list of English Expressions, Idioms, and Slang covered in Convo Vocab lessons.  All the key English vocabulary you need to start speaking fluent English." 
        location="https://www.convovocab.com/listoflessons"
      />
      <div className={styles.wrapper}>
        <h1 className={styles.header}><span className={styles.underline}>All Lessons</span></h1>
        {levels.map((levelCategory, index) => {
          return (
            <div key={index}>
              <h2 className={styles.levelHeader}>{`Level ${levelCategory}`}</h2>
              <ol className={styles.list}>
                {allLessons.map((lesson) => {
                  if (lesson.level === levelCategory) {
                    return (
                      <li key={lesson._id} className={styles.listItem}><Link to={`/${lesson.slug.current}`} className={styles.link}>{lesson.title}</Link></li>
                    )
                  } else {
                    return null
                  }
                })}
              </ol>
            </div>
          )
        })}
        <div className={styles.spacer}></div>
      </div>
    </React.Fragment>
  );
};

export const query = graphql`
  query AllLesonsQuery {
    lessons: allSanityVocabLesson(sort: { fields: level}) {
      nodes {
        _id
        level
        title
        slug {
          current
        }
      }
    }
  }
`;

export default ListOfAllLessonsPage;