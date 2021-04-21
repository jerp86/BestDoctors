import styled from 'styled-components/native';

export const BaseContainer = styled.View`
  flex-direction: ${({ dir }) => dir || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};

  width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : '100%')};

  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;

  padding-top: ${({ theme, pt }) => theme.metrics.px(pt || 0)}px;
  padding-right: ${({ theme, pr }) => theme.metrics.px(pr || 0)}px;
  padding-bottom: ${({ theme, pb }) => theme.metrics.px(pb || 0)}px;
  padding-left: ${({ theme, pl }) => theme.metrics.px(pl || 0)}px;
`;

export const BaseTouchContainer = styled.TouchableOpacity`
  flex-direction: ${({ dir }) => dir || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};

  width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : '100%')};

  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;

  padding-top: ${({ theme, pt }) => theme.metrics.px(pt || 0)}px;
  padding-right: ${({ theme, pr }) => theme.metrics.px(pr || 0)}px;
  padding-bottom: ${({ theme, pb }) => theme.metrics.px(pb || 0)}px;
  padding-left: ${({ theme, pl }) => theme.metrics.px(pl || 0)}px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;
