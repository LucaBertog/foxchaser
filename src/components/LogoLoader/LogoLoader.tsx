import { motion } from 'framer-motion';
import { Container } from './LogoLoader.styles';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  },
};

const LogoLoader = () => (
  <Container>
    <motion.svg
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        d='M25.4543 13.3489C22.3492 15.6652 22.6567 15.5271 21.3347 15.3124C20.4432 15.159 19.9513 15.159 19.1059 15.3124L18.0145 15.4964L16.9692 14.7601C16.4005 14.3613 15.3245 13.5943 14.602 13.0575C13.3415 12.1524 12.8804 11.9377 12.7267 12.1984C12.6498 12.3211 12.7421 13.4409 13.0802 17.0457L13.2493 18.7024L12.6037 20.85C12.0503 22.6907 11.9889 23.0282 12.1733 23.1969C12.2963 23.3043 13.111 23.5191 14.0025 23.6725C14.8941 23.8259 15.924 23.9946 16.2929 24.0559C16.8616 24.148 17.0768 24.3167 17.8147 25.1451C19.3211 26.8478 19.9513 27.4307 20.2895 27.4307C20.5047 27.4307 20.9197 27.1085 21.427 26.5563C23.6712 24.102 23.5021 24.24 24.7626 23.9946C25.3928 23.8719 26.4534 23.6878 27.099 23.5804C27.76 23.4884 28.3595 23.3196 28.4517 23.2123C28.5593 23.0742 28.544 22.8134 28.3903 22.3533C28.2673 21.9851 28.0982 21.4329 28.0213 21.1414C27.9291 20.85 27.7139 20.0983 27.5448 19.4847C27.222 18.3956 27.222 18.3189 27.4526 15.297C27.6678 12.3978 27.6678 11.9223 27.4065 11.953C27.345 11.953 26.4688 12.5819 25.4543 13.3489Z'
        variants={icon}
        initial='hidden'
        animate='visible'
        className='item'
        transition={{
          default: {
            duration: 1,
            ease: 'easeInOut',
            repeatType: 'reverse',
            repeat: Infinity,
            repeatDelay: 0.2,
          },
        }}
      />
    </motion.svg>
  </Container>
);

export default LogoLoader;