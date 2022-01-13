import gear from "../../gear";
import { Gear, Weapon } from "../../types";
import weapons from "../../weapons";


const allEquipment: (Gear | Weapon)[] = [...gear, ...weapons];
export default allEquipment;