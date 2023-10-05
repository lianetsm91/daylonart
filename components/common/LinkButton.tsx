import { Button } from '@ui/Button';
import Link, { LinkProps } from 'next/link';
import { SxProps } from '@mui/system';

type LinkButtonProps = {
  href: LinkProps['href'];
  label: string;
};

const SX: SxProps = { m: '.5rem 0' };

export function LinkButton({ href, label }: LinkButtonProps) {
  return (
    <Link href={href}>
      <Button variant="text" color="inherit" sx={SX}>
        {label}
      </Button>
    </Link>
  );
}
