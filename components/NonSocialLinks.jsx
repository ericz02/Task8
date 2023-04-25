import Image from "next/image"
import snapchat from "../images/zip/snapchat.svg"
import facebook from "../images/zip/facebook.svg"
import instagram from "../images/zip/instagram.svg"
import twitter from "../images/zip/twitter.svg"

const NonSocialLinks = () => {

    return (
        <div className="flex justify-center">

        <Image
            className=""
            src={snapchat}
            width={46}
            height={43}
        />

        <Image 
            src={facebook} 
            width={46} 
            height={46}
        />

        <Image 
            src={instagram} 
            width={46} 
            height={46}
        />

        <Image 
            src={twitter} 
            width={46} 
            height={38}
        />


        </div>
    )
}

export default NonSocialLinks