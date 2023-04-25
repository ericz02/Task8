import Image from "next/image";
import profilePic from "../images/zip/red.webp"
import { getCurrentUser } from "../app/utils/data"

const { name, email } = getCurrentUser;

const TopContent = () => {

    return (
        <div className="">
            <Image
                className="mx-auto rounded-full border-black border-2 mt-[40px]"
                src={profilePic}
                alt="LinkBarge"
                width={200}
                height={200}
            />
            <p className="flex justify-center items-center">Mat Gargano</p>
        </div>
    )   
}

export default TopContent