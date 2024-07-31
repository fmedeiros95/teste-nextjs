import RouterLink from 'next/link';
import React from 'react';
import { cn } from '~/lib/utils';

type LinkProps = React.ComponentProps<typeof RouterLink>;
const Link: React.FC<LinkProps> = ({ children, className, ...props }) => {
  return (
    <RouterLink className={cn('font-medium text-primary hover:underline', className)} {...props}>
      {children}
    </RouterLink>
  );
};

Link.displayName = 'Link';
export default Link;
