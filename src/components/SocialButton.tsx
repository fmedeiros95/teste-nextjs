import React from 'react';
import { Button } from './ui/button';

type SocialButtonProps = React.ComponentProps<typeof Button> & {
  label: string;
  icon: React.ElementType;
};
const SocialButton: React.FC<SocialButtonProps> = ({ label, icon: Icon, ...props }) => {
  return (
    <Button type='button' variant={'outline'} {...props} className='flex items-center'>
      <Icon className='size-6' />
      <span className='grow'>{label}</span>
    </Button>
  );
};

SocialButton.displayName = 'SocialButton';
export default SocialButton;
