import React from 'react';
import { Route, Routes } from 'react-router-dom';

import GlobalStyle from 'theme/GlobalStyle';
import Root from 'views/Root/Root';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </div>
  );
};

export default App;
