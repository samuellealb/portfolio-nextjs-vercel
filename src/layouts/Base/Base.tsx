import React from 'react';
import '@/src/styles/index.scss';

export const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div id="wrapper--body">
        <div id="container--sf">{children}</div>
      </div>
      <footer
        id="footer"
        style={{
          maxWidth: '1280px',
          display: 'block',
          margin: '20px auto 0',
          border: 'solid black 2px',
          padding: '16px',
        }}
      >
        Footer
      </footer>
    </>
  );
};
