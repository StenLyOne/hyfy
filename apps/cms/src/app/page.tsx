import { Hero } from "src/components/sections/Hero/Hero";
import { HowItWorks } from "src/components/sections/HowItWorks/HowItWorks";
import { Props } from "src/components/sections/Props/Props";
import { Partners } from "src/components/sections/Prtners/Partners";
import { Services } from "src/components/sections/Services/Services";
import { WorkFlow } from "src/components/sections/WorkFlow/WorkFlow";
import { Testimonials } from "src/components/sections/Testimonials/Testimonials";
import { GetHomePage } from "src/lib/api/cms";
import { Solutions } from "src/components/sections/Solutions/Solutions";
import { CtaSection } from "src/components/sections/CtaSection/CtaSection";
import { Footer } from "src/components/layouts/Footer/Footer";
import { HeroPlug } from "src/components/sections/Hero/HeroPlug";
import { SectionWrapper } from "src/components/Animation/SectionWrapper";

export default async function Home() {
  const api = new GetHomePage();
  const page = await api.fetch();

  return (
    <>
      <Hero data={page.hero} />
      <HeroPlug />
      <SectionWrapper>
        <WorkFlow data={page.workflow} />
      </SectionWrapper>
      <Partners data={page.partners} />
      <Props data={page.props} />
      <Services data={page.services} />
      <HowItWorks data={page.howItWorks} />
      <Testimonials data={page.testimonials} />
      <Solutions data={page.solutions} />
      <CtaSection data={page.ctaSection} />
    </>
  );
}
