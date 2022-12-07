import { IAuthor } from "@interfaces/author";
import { StatusType } from "@interfaces/status";

export interface IUserReducer {
  user: IAuthor;
  token: string;
  status: StatusType;
  error: string;
}
