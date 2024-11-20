import Container from "@/components/Container";
import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
