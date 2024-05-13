import React, { useEffect, useState } from 'react';
import Feedback from './feedback/Feedback';
import styles from './App.module.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);


    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.appContainer}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Feedback />
      )}
    </div>
  );
};

export default App;
