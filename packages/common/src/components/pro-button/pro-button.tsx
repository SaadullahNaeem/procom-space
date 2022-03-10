import Button from "@mui/material/Button";

type ProButtonProps = {
  children: React.ReactNode;
  clickHandler: () => void;
};

export const ProButton = ({ children, clickHandler }: ProButtonProps) => {
  return (
    <Button variant="contained" onClick={clickHandler}>
      {children}
    </Button>
  );
};
