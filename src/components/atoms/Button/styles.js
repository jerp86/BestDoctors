import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme, outline }) =>
    outline ? theme.colors.background : theme.colors.primary};

  align-items: center;
  justify-content: center;

  width: ${({ theme }) => theme.metrics.px(323)}px;
  height: ${({ theme }) => theme.metrics.px(56)}px;

  border-radius: ${({ theme }) => theme.metrics.px(36)}px;
  border-width: ${({ theme }) => theme.metrics.px(2)}px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const TextButton = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, outline }) =>
    outline ? theme.colors.primary : theme.colors.greyLight};
`;
