import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import gridStyles from './lessons-grid.module.css';

const LessonsGrid = ({ visibleLessons }) => { 
  return (
    <main className={gridStyles.container}>
      {visibleLessons.map((lesson) => (
        <SingleLessonCard key={lesson.id} lesson={lesson} />
      ))}
    </main>
  );
};

const SingleLessonCard = ({ lesson }) => {
  const { title, slug, level, image } = lesson;
  return (
    <article className={gridStyles.card}>
      <Link to={`/${slug.current}`}>
        <Img 
          fluid={image.asset.fluid}
          alt={title}
          className={gridStyles.image}
        />
        <h4 className={gridStyles.level}>
          <span className={gridStyles.border}>
            {`Most Important ${level}`}
          </span>
        </h4>
        <h2 className={gridStyles.title}>{title}</h2>  
      </Link>
    </article>
  );
};

export default LessonsGrid;