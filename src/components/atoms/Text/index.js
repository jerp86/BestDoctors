import styled from 'styled-components/native';

const BaseText = styled.Text`
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-right: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
`;

export const Title = styled(BaseText)`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.metrics.px(28)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CardTitle = styled(BaseText)`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const LinkText = styled(BaseText)`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const RegularText = styled(BaseText)`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0;
  margin: 0;
`;
