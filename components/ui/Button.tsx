interface ButtonProps {
  round: string;
  text: string;
}

interface ButtonRoundedProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ round, text }: ButtonProps) => {
  return <button className={`${round}`}>{text}</button>;
};

const ButtonRoundedFull = ({ text }: ButtonRoundedProps) => {
  return <Button round="rounded-full" text={text} />;
};

const ButtonRoundedLg = ({ text }: ButtonRoundedProps) => {
  return <Button round="rounded-lg" text={text} />;
};

export { Button, ButtonRoundedFull, ButtonRoundedLg };
