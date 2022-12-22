type TButtonVariants = 'primary' | 'secondary' | 'lightGrey' | 'round';

const variantStyle = {
  primary:
    'rounded-lg bg-black text-white p-2.5 w-20 hover:underline hover:decoration-solid',
  secondary:
    'rounded-lg border-2 border-black bg-white text-black p-2.5 mr-2 w-20 hover:underline hover:decoration-solid',
  lightGrey:
    'rounded-lg bg-gray-200 p-3 font-medium no-underline transition hover:underline hover:decoration-solid"',
  round:
    'w-10 h-10 rounded-full pt-0 pb-0.5 bg-black text-white font-semibold text-xl hover:scale-[103%]',
};

interface ButtonProps {
  variant: TButtonVariants;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
}

export const Button = ({ variant, onClick, children }: ButtonProps) => {
  return (
    <button type="button" className={variantStyle[variant]} onClick={onClick}>
      {children}
    </button>
  );
};
