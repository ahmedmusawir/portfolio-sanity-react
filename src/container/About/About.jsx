import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import './About.scss';

// const abouts = [
//   {
//     title: 'Web Development',
//     description:
//       "I'm an awesome Web Developer with passion for creating beautiful, responsive and functional Websites",
//     imgUrl: images.about01,
//   },
//   {
//     title: 'React/Next.js Frontend',
//     description:
//       "I'm a React/Next.js Engineer with passion for creating pixel perfect Ui/Ux and efficient Web Applications",
//     imgUrl: images.about04,
//   },
//   {
//     title: 'Full Stack',
//     description:
//       "I'm a great Full Stack Developer with CMS/API backends (Sanity.io, WordPress, GraphCMS, OpenAI etc.) ",
//     imgUrl: images.about03,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <h2 className='head-text'>
        I Know that <span>A Good App</span>
        <br />
        means <span>Good Business!</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profiles-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
