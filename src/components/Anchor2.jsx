import { Link } from "react-router";

const Anchor2 = ({ path, link }) => {
  return (
    <Link
      to={path}
      className={`text-black dark:text-white font-semibold mr-5 cursor-pointer hover:underline`}>
      {link}
    </Link>
  );
};

export default Anchor2;
