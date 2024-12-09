import ToasterProvider from '../contexts/ToasterProvider';

function Providers({ children }) {
  return <ToasterProvider>{children}</ToasterProvider>;
}

function App({ children }) {
  return (
    <Providers>
      {children}
    </Providers>
  );
}

export default App;
