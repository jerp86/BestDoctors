import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SuccessImg = styled.Image`
  width: ${({ theme }) => theme.metrics.px(230)}px;
  height: ${({ theme }) => theme.metrics.px(230)}px;
`;
