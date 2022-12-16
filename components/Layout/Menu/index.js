import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import * as S from "./styles";

export default function Menu({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  const menuItems = ["about", "portfolio", "commission", "partners", "contact"];

  return (
    <>
      <S.NavBar>
        {menuItems.map((item, index) => (
          <S.MenuItem key={index}>
            <Link href={item}>{item}</Link>
          </S.MenuItem>
        ))}
      </S.NavBar>
    </>
  );
}
