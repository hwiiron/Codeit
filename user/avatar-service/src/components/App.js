import ToasterProvider from '../contexts/ToasterProvider';
import { AuthProvider } from '../contexts/AuthProvider';

function Providers({ children }) {
  return (
    <ToasterProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToasterProvider>
  );
}

function App({ children }) {
  return (
    <Providers>
      {children}
    </Providers>
  );
}

export default App;
