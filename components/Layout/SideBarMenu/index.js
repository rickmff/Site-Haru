import Image from "next/image";
import * as S from "./styles";

export default function SideBarMenu() {
  return (
    <S.SideNavBar>
      <S.Logo>
        <Image
          src={"/img/logo.png"}
          width={80}
          height={80}
          alt={"Logo"}
        ></Image>
      </S.Logo>
      <S.Bar></S.Bar>
      <S.SocialsMedia>
        <S.SocialMedia href={`https://twitter.com/harugraphics`}>
          <Image
            src={`/img/socialMedias/twitter.png`}
            width={30}
            height={30}
            alt={"twitter"}
          ></Image>
        </S.SocialMedia>
        <S.SocialMedia href={`https://instagram.com/harugraphics`}>
          <Image
            src={`/img/socialMedias/instagram.png`}
            width={30}
            height={30}
            alt={"instagram"}
          ></Image>
        </S.SocialMedia>
        <S.SocialMedia href={`https://ko-fi.com/harugraphics`}>
          <Image
            src={`/img/socialMedias/ko-fi.png`}
            width={35}
            height={35}
            alt={"ko-fi"}
          ></Image>
        </S.SocialMedia>
        <S.SocialMedia href={`https://behance.com/harugraphics`}>
          <Image
            src={`/img/socialMedias/behance.png`}
            width={32}
            height={32}
            alt={"behance"}
          ></Image>
        </S.SocialMedia>
      </S.SocialsMedia>
    </S.SideNavBar>
  );
}
