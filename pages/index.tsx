import { useState } from 'react';
import { motion } from 'framer-motion';

function Header({ title }) {
  return <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{title ? title : 'Default title'}</motion.h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [clicked, setClicked] = useState(0);

  function handleClick() {
    setClicked(clicked + 1);
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header title="Develop. Preview. Ship. 🚀" />
      <motion.ul initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        {names.map((name) => (
                  <motion.li key={name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>{name}</motion.li>
        ))}
            </motion.ul>

      <button onClick={handleClick}>Click({clicked})</button>
    </motion.div>);
}