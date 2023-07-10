"use client";

interface ModalsProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: string;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modals: React.FC<ModalsProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Modals;
