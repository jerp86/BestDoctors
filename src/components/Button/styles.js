import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;

  width: ${({ theme }) => theme.metrics.px(323)}px;
  height: ${({ theme }) => theme.metrics.px(56)}px;
  border-radius: ${({ theme }) => theme.metrics.px(36)}px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.greyLight};
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
