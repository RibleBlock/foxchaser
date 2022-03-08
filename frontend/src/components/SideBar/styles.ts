import styled, { css } from 'styled-components';

import { FoxchaserIcon } from '../../styles/Icons';

export const Container = styled.aside`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    flex-shrink: unset;
    flex-direction: column;

    background-color: #a1a1a1;

    width: min(4.875rem, 8vh);
    min-width: 57px;
    height: 100%;
    padding: 1.5rem 0;

  }
`;

export const Logo = styled(FoxchaserIcon)`
  min-width: 2.5rem;
  min-height: 2.5rem;
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  &:nth-of-type(3) {
    margin-top: 1rem;

    > div:first-of-type {
      margin-bottom: .5rem;
    }

    > div:last-of-type {
      margin-top: .5rem;
    }
  }

  &:last-of-type {
    margin-top: auto;
    padding: 0;
  }
`;

export const WrapperGames = styled(Wrapper)`
  background-color: #afafaf;
  border-radius: 1.25rem;

  padding: .5rem 0;

  /* @media (max-height: 850px) {
    height: 200px;
  } */
`;

export const Avatar = styled.div`
  width: max(1.87rem, 71.8%);
  padding-top: 71.8%;

  background-color: #6a6a6a;
  border-radius: 100%;

  margin-top: 1.5rem;
  margin-bottom: .5rem;

  & + div {
    margin-bottom: 1rem;
  }
`;

export const Separator = styled.div<{ small?: boolean }>`
  width: ${(props) => (props.small ? '1rem' : '2rem')};
  height: .06rem;
  background-color: #ffffff;
`;

const iconCSS = css`
  width: max(1.56rem, 51.3%);
  padding-top: 51.3%;
  background-color: #c4c4c4;
  border-radius: 100%;
  margin: .5rem 0;
`;

const miniIconCSS = css`
  width: max(1rem, 30.78%);
  padding-top: 30.78%;

  background-color: #909090;
  border-radius: 100%;
`;

export const ControlIcon = styled.div`${iconCSS}`;
export const BusinessIcon = styled.div`${iconCSS}`;
export const GameIcon = styled.div`${iconCSS}`;
export const NewsIcon = styled.div`${iconCSS}`;
export const ChatIcon = styled.div`${iconCSS}`;
export const SavesIcon = styled.div`${iconCSS}`;

export const NotificationIcon = styled.div`${miniIconCSS}`;
export const SupportIcon = styled.div`${miniIconCSS}
  margin: 1rem 0 .5rem 0;
`;
export const SettingsIcon = styled.div`${miniIconCSS}

`;
