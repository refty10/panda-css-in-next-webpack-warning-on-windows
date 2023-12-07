import { type NextPage } from 'next';

import { css } from '@panda/css';
import { center } from '@panda/patterns';

const Home: NextPage = () => {
  return (
    <main className={center({ h: '100vh' })}>
      <div
        className={css({
          display: 'grid',
          placeContent: 'center',
          fontWeight: 'semibold',
          color: 'yellow.300',
          textAlign: 'center',
          textStyle: '4xl',
        })}
      >
        <span>🐼</span>
        <span>Hello from Panda</span>
      </div>
    </main>
  );
};

export default Home;
