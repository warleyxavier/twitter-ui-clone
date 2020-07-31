import styled, { css } from 'styled-components';

import { Chat, Favorite, Share } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;
  max-width: 100%;

  border-bottom: 1px solid var(--outline);
`;

export const Retweeted = styled.div`
  font-size: 13px;
  color: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  position: relative;

  margin-top: 3px;
`;

export const Avatar = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  flex-shrink: 0;
  width: 49px;
  height: 49px;
  border-radius: 50%;

  background: var(--gray);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 5px;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const Description = styled.div`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: var(--outline);
  border-radius: 14px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 11px auto;
  width: 100%;

  @media (min-width: 400px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  color: var(--twitter);

  > svg {
    margin-right: 5px;
  }

  > svg path {
    color: var(--twitter);
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${iconCSS}
`;

export const RetweetIcon = styled(Share)`
  ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;