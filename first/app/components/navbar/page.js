import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link href="/login">Main Link</Link>
        <Link href="/login/adminlogin">Admin Link</Link>
        <Link href="/login/userlogin">User Link</Link>
      </ul>
    </div>
  );
};

export default Navbar;
