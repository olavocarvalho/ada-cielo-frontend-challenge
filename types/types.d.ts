export type Option = {
  label: string;
  value: string;
  imagePath?: string;
};

export type DataTableFilterableColumn<TData> = {
  id: keyof TData;
  title: string;
  options: Option[];
};
