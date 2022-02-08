import { Column } from "../interfaces/column-interface";

export const ALL_COLUMNS: Column[] = [{
      columnDef: 'position',
      static: true,
      display: true,
    },
    {
      columnDef: 'name',
      static: false,
      display: true,
    },
    {
      columnDef: 'id',
      static: false,
      display: true,
    },
    {
      columnDef: 'photo',
      static: false,
      display: true,
    },
    {
      columnDef: 'brand',
      static: false,
      display: true,
    },
    {
      columnDef: 'availability',
      static: true,
      display: true,
    },
    {
      columnDef: 'price',
      static: false,
      display: true,
    },
    {
      columnDef: 'oldPrice',
      static: false,
      display: true,
    },
    {
      columnDef: 'date',
      static: false,
      display: true,
    }
  ];