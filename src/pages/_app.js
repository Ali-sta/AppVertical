import '@/styles/globals.scss'
import { Layout } from '@/components/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import { motion } from "framer-motion";
import "../styles/fonts.scss";
// import '../fonts/fonts.css'; 

export default function App({ Component, pageProps }) {

  return(
    <Layout>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
      <Component {...pageProps} />
      </motion.div>
    </Layout>
    
  ) 
}
