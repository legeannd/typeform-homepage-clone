import React from 'react';
import FirstAndSecond from './components/FirstAndSecond';
import { Main, Section, Sticky } from './styles';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />

      <Main style={{ height: '1610vh' }}>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>

        <Section>
          <Sticky className="third" style={{ height: '9.7%' }}/>
        </Section>

        <Section>
          <Sticky className="fourth" style={{ height: '10.1%' }}/>
        </Section>
      </Main>
    </>
  );
}

export default App;
