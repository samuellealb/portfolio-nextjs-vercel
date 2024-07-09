import "@/src/styles/index.scss";

export const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div id="wrapper--body">
        <div id="container--sf">{children}</div>
      </div>
      <footer id="footer">Footer</footer>
    </>
  );
};
