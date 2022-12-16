import Footer from "./Footer";
import * as S from "./styles";

export default function Layout({ children }) {
  return (
    <>
      <S.Container>{children}</S.Container>
      <Footer />
    </>
  );
}
