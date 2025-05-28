"use client";
import { useEffect, useState } from "react";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { useSearchParams } from "next/navigation";

const CompanionsLibrary = () => {
  const searchParams = useSearchParams();
  const [companions, setCompanions] = useState([]);
  const subject = searchParams.get("subject") || "";
  const topic = searchParams.get("topic") || "";

  useEffect(() => {
    const fetchCompanions = async () => {
      const data = await getAllCompanions({ subject, topic });
      setCompanions(data);
    };

    fetchCompanions();
  }, [subject, topic]);

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companions-grid">
        {companions?.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
