import { IconButton } from '@ui/IconButton';
import { FacebookIco } from '@icons/FacebookIco';
import { WhatsAppIco } from '@icons/WhatsAppIco';
import { LinkedInIco } from '@icons/LinkedInIco';
import { InstagramIco } from '@icons/InstagramIco';
import { SvgIconComponent } from '@mui/icons-material';

type TSocial = 'facebook' | 'ws' | 'linkedin' | 'instagram';
type TSocialItem = { arialLabel: string; href: string; Component: SvgIconComponent };

interface Props {
  socialType: TSocial;
  size: string;
}

const SOCIAL_TYPE_ITEMS: Record<TSocial, TSocialItem> = {
  facebook: {
    arialLabel: 'Facebook',
    href: 'https://www.facebook.com/artedaylon?mibextid=LQQJ4d',
    Component: FacebookIco
  },
  ws: { arialLabel: 'WhatsApp', href: 'https://wa.me/+17868528028', Component: WhatsAppIco },
  linkedin: { arialLabel: 'LinkedIn', href: '', Component: LinkedInIco },
  instagram: {
    arialLabel: 'Instragram',
    href: 'https://instagram.com/daylonperezpachec?igshid=OGQ5ZDc2ODk2ZA==',
    Component: InstagramIco
  }
};

export const SocialButton = ({ socialType, size = 'large' }: Props) => {
  const style = {
    fontSize: size === 'small' ? '1.5rem' : '3.5rem'
  };
  const { arialLabel, href, Component } = SOCIAL_TYPE_ITEMS[socialType];

  return (
    <IconButton aria-label={arialLabel} target="_blank" href={href}>
      <Component sx={style} />
    </IconButton>
  );
};
