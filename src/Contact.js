import Phonebooks from './components/App';
import styles from './components/Contact.module.css';
function App() {
  return (
    <div className={styles.phonebook}>
      <Phonebooks />
    </div>
  );
}

export default App;
