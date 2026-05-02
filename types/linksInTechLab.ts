export interface ButtonItem {
  label: string;
  route: string;
  color?: string;
}

export type ButtonGroup = ButtonItem[];

export type Links = ButtonGroup[];
