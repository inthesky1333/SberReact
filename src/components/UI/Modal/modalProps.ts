import { ReactNode } from "react";

import { StatusType } from "@interfaces/status";

export interface IModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
  status: StatusType;
}
