import "../styles/globals.css";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
