'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Intro = () => {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src='https://s.hdnux.com/photos/51/23/24/10827008/4/1200x0.jpg'
              alt='profile_image'
              width={192}
              height={192}
              quality={80}
              priority={true}
              className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
            />
          </motion.div>
          <motion.span
            className='text-4xl absolute  bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              stiffness: 125,
              delay: 0.1,
              duration: 0.3,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
