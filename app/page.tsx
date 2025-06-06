import { InfoComponents } from "@/components/InfoComponents";
import { Banner } from "@/components/Banner";
import { CTAProfile } from "@/components/CTAProfile";
import { ListProjects } from "@/components/projects/ListProjects";
import { Stacking } from "@/components/Stacking";
import { Experience } from "@/components/Experience";
import { ReviewInfo } from "@/components/ReviewInfo";
export default function Home() {
  return (
    <section className="size-full p-5 lg:p-20">
      <div className="size-full flex flex-col gap-10  ">
        <div className="">
          {/* Banner */}
          <Banner />
          {/* Info */}
          <InfoComponents />
        </div>
        {/* CTA Profile */}
        <CTAProfile />
        {/* About */}
        {/* Stacking */}
        <Stacking />
        {/* Experience */}
        <Experience />
        {/* Project */}
        <ListProjects type="CAROUSEL" />
        {/* CTA */}
        <ReviewInfo />
      </div>
    </section>
  );
}
