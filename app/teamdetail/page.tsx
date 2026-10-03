
import React from "react";
import TeamDetail from "@/components/team/TeamDetail";
import Hero from "@/components/ui/Hero";

const Page = () => {
  return (
    <div>
      <Hero page="teamDetails" />
      <TeamDetail />
    </div>
  );
};

export default Page;

