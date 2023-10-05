import { IconButton } from '@ui/IconButton';
import { FacebookIco } from '@icons/FacebookIco';
import { WhatsAppIco } from '@icons/WhatsAppIco';
import { LinkedInIco } from '@icons/LinkedInIco';
import { InstagramIco } from '@icons/InstagramIco';

interface Props {
  type: string;
  size: string;
}

const SocialButton = ({ type, size = 'large' }: Props) => {
  const style = {
    fontSize: size === 'small' ? '1.5rem' : '3.5rem'
  };

  switch (type) {
    case 'facebook':
      return (
        <IconButton aria-label="Facebook" target="_blank" href="https://www.facebook.com/artedaylon?mibextid=LQQJ4d">
          <FacebookIco sx={style} />
        </IconButton>
      );
    case 'ws':
      return (
        <IconButton aria-label="WhatsApp" target="_blank" href="https://wa.me/+17868528028">
          <WhatsAppIco sx={style} />
        </IconButton>
      );
    case 'linkedin':
      return (
        <IconButton aria-label="LinkedIn">
          <LinkedInIco sx={style} />
        </IconButton>
      );
    case 'instagram':
      return (
        <IconButton
          aria-label="Instragram"
          target="_blank"
          href="https://instagram.com/daylonperezpachec?igshid=OGQ5ZDc2ODk2ZA=="
        >
          <InstagramIco sx={style} />
        </IconButton>
      );

    default:
      return null;
  }
};

export default SocialButton;
