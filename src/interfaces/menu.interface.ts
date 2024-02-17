// interfaces/menu.interface.ts
interface MenuItem {
  label: string;
  icon?: string;
  disabled?: boolean;
}

// interfaces/menu.interface.ts
export interface Menu {
  id: number; // tambahan id:number
  title: string;
  description?: string;
  items: MenuItem[];
  price: number;
}
