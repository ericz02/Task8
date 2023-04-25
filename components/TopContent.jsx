import Image from "next/image";
import { getCurrentUser } from "../utils/data";

const { name, email, avatar } = getCurrentUser();


const TopContent = () => {

    return (
        <div className="grid justify-center justify-items-center">
            {avatar && <Image className="rounded-full" src={avatar} alt={name} height="145" width="145" />}
            {name && <h1 className="h1">{name}</h1> }
            {name && <p className="h2">{email}</p> }
        </div>
    )
}


export default TopContent;