"use client";

import { useState } from "react";
import { certifications, type Certification } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificationCard } from "@/components/CertificationCard";
import { CertificationModal } from "@/components/CertificationModal";

export function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <section
      id="certifications"
      className="section-padding relative"
      aria-labelledby="certifications-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          label="Credentials"
          title="Certifications"
          description="Industry-validated skills across AI, cloud, and software engineering — continuously expanding."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              index={i}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      <CertificationModal
        certification={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
