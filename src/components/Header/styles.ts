import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.header)`
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 0.1);

  text-align: center;
  font-size: 40px;
  padding: 40px;

  position: fixed;
  top: 0;
  z-index: 999;
`;
