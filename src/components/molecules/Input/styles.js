import styled from 'styled-components/native';

export const InputContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;

  width: ${({ theme }) => theme.metrics.baseWidth}px;
  height: ${({ theme }) => theme.metrics.px(56)}px;

  padding-horizontal: ${({ theme }) => theme.metrics.px(8)}px;
  padding-vertical: ${({ theme }) => theme.metrics.px(6)}px;

  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  border-width: ${({ theme, focus }) => theme.metrics.px(focus ? 2 : 1)}px;
  border-color: ${({ theme, focus }) =>
    focus ? theme.colors.primary : theme.colors.greyDark};

  background-color: ${({ theme }) => theme.colors.background};
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: ({ theme }) => theme.colors.greyDark,
})`
  width: 100%;
  margin: 0;
  padding: 0;

  color: ${({ theme }) => theme.colors.dark};

  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
