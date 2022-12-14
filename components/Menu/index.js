import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import * as S from "./styles";

export default function Menu({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <S.Container>
      Haru Design
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.primary}
        onColor={colors.secondary}
      />
    </S.Container>
  );
}
