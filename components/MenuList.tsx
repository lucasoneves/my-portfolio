import MenuListItem from "./MenuListItem";
import menuData from "@/data/menu";

export default function MenuList() {
  return (
    <ul className="flex gap-6 text-md font-medium">
      {menuData.items.map((item) => (
        <MenuListItem path={item.href} title={item.label} key={item.href} />
      ))}
    </ul>
  );
}
