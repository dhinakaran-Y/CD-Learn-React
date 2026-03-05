import { Link } from "react-router";

const Anchor = ({path , link}) => {
    return <Link to={path} className={`text-black dark:text-white font-semibold top-5 absolute right-5 mr-5 cursor-pointer hover:underline`}>{link}</Link>
}

export default Anchor;