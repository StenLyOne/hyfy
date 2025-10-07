import { HOME_TAG } from "../cache-tags";
import { GlobalSettingData } from "../types/globalSetting";
import { CtaSectionData } from "../types/sections/ctaSection";
import { FooterData } from "../types/sections/footer";
import { HeroData } from "../types/sections/hero";
import { HowItWorksData } from "../types/sections/howItWorks";
import { PartnersData } from "../types/sections/partners";
import { PropsData } from "../types/sections/props";
import { ServicesData } from "../types/sections/services";
import { SolutionsData } from "../types/sections/solutions";
import { TestimonialsData } from "../types/sections/testimonials";
import { WorkFlowData } from "../types/sections/workFlow";
import { apiClient } from "./client";
import { Mock } from "./mocks";

interface Page {
  globalSetting: GlobalSettingData;
  hero: HeroData;
  workflow: WorkFlowData;
  partners: PartnersData;
  props: PropsData;
  services: ServicesData;
  howItWorks: HowItWorksData;
  testimonials: TestimonialsData;
  solutions: SolutionsData;
  ctaSection: CtaSectionData;
  footer: FooterData;
}

export class GetHomePage {
  async fetch(): Promise<Page> {
    if (process.env.USE_MOCK === "true") {
      // локальные моки, без apiClient
      return {
        globalSetting: Mock.globalSetting,
        hero: Mock.hero,
        workflow: Mock.workflow,
        partners: Mock.partners,
        props: Mock.props,
        services: Mock.services,
        howItWorks: Mock.howItWorks,
        testimonials: Mock.testimonials,
        solutions: Mock.solutions,
        ctaSection: Mock.ctaSection,
        footer: Mock.footer,
      };
    }

    // 👉 здесь уже только реальное API (Strapi)
    const res = await apiClient<{
      data: {
        globalSetting: GlobalSettingData;
        hero: HeroData;
        workflow: WorkFlowData;
        partners: PartnersData;
        props: PropsData;
        services: ServicesData;
        howItWorks: HowItWorksData;
        testimonials: TestimonialsData;
        solutions: SolutionsData;
        ctaSection: CtaSectionData;
        footer: FooterData;
      };
    }>("/home", {
      next: { tags: [HOME_TAG] },
    });

    return {
      globalSetting: res.data.globalSetting,
      hero: res.data.hero,
      workflow: res.data.workflow,
      partners: res.data.partners,
      props: res.data.props,
      services: res.data.services,
      howItWorks: res.data.howItWorks,
      testimonials: res.data.testimonials,
      solutions: res.data.solutions,
      ctaSection: res.data.ctaSection,
      footer: res.data.footer,
    };
  }
}

