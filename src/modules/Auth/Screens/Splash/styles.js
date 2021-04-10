import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: ${({ theme }) => theme.metrics.px(246)}px;
  height: ${({ theme }) => theme.metrics.px(246)}px;
`;
