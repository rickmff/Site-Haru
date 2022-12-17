import Footer from "./Footer";
import SideBarMenu from "./SideBarMenu";
import * as S from "./styles";

export default function Layout({ children }) {
  return (
    <>
      <SideBarMenu/>
      <S.Container>{children}</S.Container>
      <Footer />
    </>
  );
}
