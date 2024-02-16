"use client";

import { useRouter } from "next/navigation";

const About = () => {
  const route = useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => route.push("/")}>Go to home page.</button>
    </div>
  );
};

export default About;
