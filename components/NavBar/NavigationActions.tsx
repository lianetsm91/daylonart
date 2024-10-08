import { LinkButton } from '@common/LinkButton';

type NavigationActionsProps = {
  hideHome?: boolean;
};

export const NavigationActions = ({ hideHome }: NavigationActionsProps) => (
  <>
    {hideHome ? <></> : <LinkButton href="/" label="Home" />}
    <LinkButton href="/contactMe" label="Contact me" />
    <LinkButton href="/aboutMe" label="About me" />
  </>
);
