import armor from "../../armor";
import gear from "../../gear";
import { Armor, Gear, Weapon } from "../../types";
import weapons from "../../weapons";


const allEquipment: (Gear | Weapon | Armor)[] = [...gear, ...weapons, ...armor];
export default allEquipment;