import Image from "next/image";
import { getCurrentUser } from "../utils/data";

const { name, email, avatar } = getCurrentUser();


const TopContent = () => {

    return (
        <div className="grid justify-center justify-items-center">
            {avatar && <Image className="rounded-full mt-[80px]" src={avatar} alt={name} height="145" width="145" />}
            {name && <h1 className="text-[70px]">{name}</h1> }

        </div>
    )
}


export default TopContent;