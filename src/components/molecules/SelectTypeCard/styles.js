import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: ${({ theme }) => theme.metrics.baseWidth}px;
  height: ${({ theme }) => theme.metrics.px(120)}px;
  padding: ${({ theme }) => theme.metrics.px(8)}px;

  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  border-width: ${({ theme, selected }) =>
    theme.metrics.px(selected ? 2 : 1)}px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.greyDark};

  background-color: ${({ theme }) => theme.colors.background};
`;

export const CheckView = styled.View`
  align-items: center;
  justify-content: center;

  width: 20%;
  height: 100%;
`;

export const TextView = styled.View`
  align-items: flex-start;
  justify-content: flex-start;

  width: 80%;
  height: 100%;
`;

export const CheckCircle = styled.View`
  width: ${({ theme }) => theme.metrics.px(24)}px;
  height: ${({ theme }) => theme.metrics.px(24)}px;

  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  border-width: ${({ theme }) => theme.metrics.px(2)}px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.greyDark};

  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.background};
`;
