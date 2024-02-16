"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const route = useRouter();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => route.push("about")}>Go to about page.</button>
    </div>
  );
};

export default Home;
