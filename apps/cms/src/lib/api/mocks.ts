import { HeroData } from "../types/sections/hero";
import { PartnersData } from "../types/sections/partners";
import { WorkFlowData } from "../types/sections/workFlow";
import { PropsData } from "../types/sections/props";
import { ServicesData } from "../types/sections/services";
import { HowItWorksData } from "../types/sections/howItWorks";
import { TestimonialsData } from "../types/sections/testimonials";
import { SolutionsData } from "../types/sections/solutions";
import { CtaSectionData } from "../types/sections/ctaSection";
import { GlobalSettingData } from "../types/globalSetting";
import { FooterData } from "../types/sections/footer";

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

export const Mock: Page = {
  globalSetting: {
    logo: "/logos/logo.png",
    shortLogo: "/logos/logo-short.png",
    socialMedia: [
      {
        label: "youTube",
        link: "https://www.hyfe.com/about",
      },
      {
        label: "linkedin",
        link: "https://www.hyfe.com/about",
      },
      {
        label: "x",
        link: "https://www.hyfe.com/about",
      },
    ],
  },
  hero: {
    title: "Accurate, continuous, real-time cough measurement at scale. ",
    subtitle: "Designed for pharma",
    text: "A comprehensive, clinically validated research tool that measures cough as an endpoint accurately and at scale while preserving privacy. Successfully deployed in FDA trials.",
    video: "/video/test.mp4",
    ctas: [
      {
        label: "Get a Demo",
        color: "primary",
        link: "/adasd",
        type: "arrow-right",
        variant: "solid",
      },
      {
        label: "See Moore",
        color: "white",
        link: "#workflow",
        type: "arrow-bottom",
        variant: "outline",
      },
    ],
  },
  workflow: {
    title:
      "The Hyfe CoughMonitor Suite is an end-to-end system for continuous, objective cough monitoring in clinical trials.",
    subtitle: "workflow",
    text: "With a lightweight medical-grade watch, mobile app, and secure cloud dashboard, CMS delivers real-time cough frequency data without capturing audio. It is built for long-term, real-world use — offering reliable, scalable, and privacy-safe monitoring with virtually no burden on patients or researchers.",
    ctas: [
      {
        label: "see validation data",
        color: "primary",
        link: "/adasd",
        type: "arrow-right",
        variant: "solid",
      },
    ],
    cards: [
      {
        title: "CoughMonitor",
        subtitle: "Step 1",
        text: "",
        media: {
          url: "/images/workflow.clock.png",
          alt: "alt-seo",
        },
      },
      {
        title: "CoughMonitor Companion app",
        subtitle: "Step 2",
        text: "",
        media: {
          url: "/images/workflow.app.png",
          alt: "alt-seo",
        },
      },
      {
        title: "Hyfe cloud",
        subtitle: "Step 3",
        text: "",
        media: {
          url: "/images/workflow.cloud.png",
          alt: "alt-seo",
        },
      },
      {
        title: "Insights Dashboard",
        subtitle: "Step 4",
        text: "",
        media: {
          url: "/images/workflow.dashboard.png",
          alt: "alt-seo",
        },
      },
    ],
  },
  partners: {
    title: "We have partnered with",
    text: "Make this a bigger selling point rather than just a footer",
    logos: [
      {
        url: "/logos/imperial-college.png",
        alt: "logo",
      },
      {
        url: "/logos/johns-hopkins.png",
        alt: "logo",
      },
      {
        url: "/logos/mc-gill.png",
        alt: "logo",
      },
      {
        url: "/logos/ucsf.png",
        alt: "logo",
      },
      {
        url: "/logos/sensory-cloud.png",
        alt: "logo",
      },
      {
        url: "/logos/renovion.png",
        alt: "logo",
      },
    ],
  },
  props: {
    cards: [
      {
        title: "Extensive Clinical Validation",
        subtitle: "50+ trials",
        text: "Hyfe’s CoughMonitor System has been used in +50 field and clinical trials to date, including phase 1 and phase 2 clinical trials. Rigorous validation studies show Hyfe’s tools outperform alternatives with consistent, scientifically backed results and very low false positives. Validation results - 90% sensitivity & 1 FP/ h",
        media: {
          url: "/images/props.validation.png",
          alt: "seo-alt",
        },
      },
      {
        title: "Continuous Monitoring",
        subtitle: "From days to years",
        text: "Hyfe’s tools provide uninterrupted cough monitoring for weeks, months, or even years, unlike other technologies that are limited to 24-hour or overnight sessions. No changing of devices or device parts, and no visits are required for continuous monitoring.",
        media: {
          url: "/images/props.monitoring.png",
          alt: "seo-alt",
        },
      },
      {
        title: "Unobtrusive Form Factor",
        subtitle: "Simple by design, powerful in trials",
        text: "Hyfe’s watch is a familiar, convenient form factor that appeals to users of all tech literacy levels and requires minimal patient interaction. Its simplicity and ease of use ensure patient compliance and data collection success.",
        media: {
          url: "/images/props.factor.png",
          alt: "seo-alt",
        },
      },
      {
        title: "Compliant",
        subtitle: "Built to meet regulatory standards",
        text: "Hyfe’s CoughMonitor SUite is fully aligned with FDA’s guidance on Digital Health Technologies,  ‘V3+ framework by DiMe Society’ and built according to the needs of the industry and investigators. ",
        media: {
          url: "/images/props.compliant.png",
          alt: "seo-alt",
        },
      },
      {
        title: "Privacy Preserving",
        subtitle: "100% data privacy. No audio, ever",
        text: "Hyfe’s AI cough detection models run entirely on device, ensuring 100% privacy by recording only text based timestamps without recording any sounds, ever.",
        media: {
          url: "/images/props.preserving.png",
          alt: "seo-alt",
        },
      },
    ],
  },
  services: {
    title: "Comprehensive Services for Reliable Study Execution",
    subtitle: "services",
    cards: [
      {
        id: 0,
        title: "Study Protocol Support",
        text: "Researching, consultations, and resources for developing the literature and research components of protocol development and scientific review.",
        icon: "/svg/services.study.svg",
        media: {
          url: "/images/services.validation.png",
          alt: "seo-alt",
        },
      },
      {
        id: 1,
        title: "Database Setup & Continuous Data Quality Verification",
        text: "Database setup for storing cough monitoring data with full control and privacy, combined with daily performance monitoring to ensure regular syncing and reliable data.",
        icon: "/svg/services.database.svg",
        media: {
          url: "/images/services.verification.png",
          alt: "seo-alt",
        },
      },
      {
        id: 2,
        title: "Logistics",
        text: "Ensuring timely shipping and arrival of CMS components worldwide while complying with import/export regulations and customs laws.",
        icon: "/svg/services.logistics.svg",
        media: {
          url: "/images/services.logistics.png",
          alt: "seo-alt",
        },
      },
      {
        id: 4,
        title: "Training & Support",
        text: "Comprehensive training on site, remote, and online via Knowledge Hive, combined with self-served videos, user guides, and responsive phone support across timezones.",
        icon: "/svg/services.training.svg",
        media: {
          url: "/images/services.training.png",
          alt: "seo-alt",
        },
      },
      {
        id: 5,
        title: "Validated PROs Collection",
        text: "The Companion phone app collects validated PROs, such as VAS and LCQ, and health questionnaires as required. The surveys can be tailored to your study, with timely notifications to drive adherence.",
        icon: "/svg/services.validated.svg",
        media: {
          url: "/images/services.collection.png",
          alt: "seo-alt",
        },
      },
      {
        id: 6,
        title: "Statistical Analysis",
        text: "Data analysis to maximize the insights you get from cough monitoring data.",
        icon: "/svg/services.statistical.svg",
        media: {
          url: "/images/services.analysis.png",
          alt: "seo-alt",
        },
      },
    ],
  },
  howItWorks: {
    title: "Inside the CoughMonitor Suite",
    subtitle: "How it works",
    text: "Cough Monitor Suite combines wearable technology, mobile connectivity, and cloud-based analytics to provide continuous, objective cough monitoring - backed by full study support services.",
    cards: [
      {
        title: "CoughMonitor",
        text: "CoughMonitor continuously deploys an acoustic signal processing algorithm to automatically identify coughs. The times at which coughing occurred are sent via Bluetooth to a dedicated mobile app.",
        media: {
          url: "/images/howItWorks.coughmonitor.png",
          alt: "seo-alt",
        },
        icon: "/svg/howItWorks.coughmonitor.svg",
      },
      {
        title: "CoughMonitor Companion app",
        text: "The Companion app automatically sends data via the phone's Internet connection to Hyfe's Cloud. It also collects PROs, both standard and tailored to each study.",
        media: {
          url: "/images/howItWorks.app.png",
          alt: "seo-alt",
        },
        icon: "/svg/howItWorks.app.svg",
      },
      {
        title: "Hyfe Cloud",
        text: "The data is securely stored in the Cloud and can be accessed for review through the Insights Dashboard.",
        media: {
          url: "/images/howItWorks.cloud.png",
          alt: "seo-alt",
        },
        icon: "/svg/howItWorks.cloud.svg",
      },
      {
        title: "Insights Dashboard",
        text: "The Dashboard allows researchers to monitor study participants and download data.",
        media: {
          url: "/images/howItWorks.dashboard.png",
          alt: "seo-alt",
        },
        icon: "/svg/howItWorks.dashboard.svg",
      },
    ],
  },
  testimonials: {
    title: "What Our Partners say",
    subtitle: "Testimonials",
    text: "Overall, Hyfe’s technology has been robust, accurate, and user-friendly for both participants and study staff. Communication with the Hyfe team - including data science, clinical operations, and technical support - has been timely and solution-oriented. We are pleased with the data quality and the overall collaboration.",
    ctas: [
      {
        label: "Get a Demo",
        color: "primary",
        link: "/adasd",
        type: "default",
        variant: "solid",
      },
      {
        label: "Get a Demo",
        color: "primary",
        link: "/asdad",
        type: "arrow-bottom",
        variant: "outline",
      },
    ],
    cards: [
      {
        title: "David A. Edwards",
        subtitle: "CEO | Sensory Cloud Inc.",
        id: 4.9,
        text: "Overall, Hyfe’s technology has been robust, accurate, and user-friendly for both participants and study staff. Communication with the Hyfe team - including data science, clinical operations, and technical support - has been timely and solution-oriented. We are pleased with the data quality and the overall collaboration.",
        media: {
          url: "/avatars/testimonials.david.png",
          alt: "seo-alt",
        },
      },
      {
        title: "Dan Copeland",
        subtitle: "CEO | Renovion",
        id: 5.0,
        text: "Hyfe’s team is excellent.  They are responsive and collaborative and their technology performed reliably in a real-world chronic bronchitis population. The accuracy of cough detection, clarity of dashboards, and availability of Hyfe’s support contributed to a smooth study experience. We are satisfied with the partnership and confident in continuing with Hyfe’s platform in future trials.",
        media: {
          url: "/avatars/testimonials.david.png",
          alt: "seo-alt",
        },
      },
      {
        title: "Dan Copeland",
        subtitle: "CEO | Renovion",
        id: 4.8,
        text: "Hyfe’s team is excellent.  They are responsive and collaborative and their technology performed reliably in a real-world chronic bronchitis population. The accuracy of cough detection, clarity of dashboards, and availability of Hyfe’s support contributed to a smooth study experience. We are satisfied with the partnership and confident in continuing with Hyfe’s platform in future trials.",
        media: {
          url: "/avatars/testimonials.david.png",
          alt: "seo-alt",
        },
      },
      {
        title: "Dan Copeland",
        subtitle: "CEO | Renovion",
        id: 5.0,
        text: "Hyfe’s team is excellent.  They are responsive and collaborative and their technology performed reliably in a real-world chronic bronchitis population. The accuracy of cough detection, clarity of dashboards, and availability of Hyfe’s support contributed to a smooth study experience. We are satisfied with the partnership and confident in continuing with Hyfe’s platform in future trials.",
        media: {
          url: "/avatars/testimonials.david.png",
          alt: "seo-alt",
        },
      },
      {
        title: "Dan Copeland",
        subtitle: "CEO | Renovion",
        id: 5.0,
        text: "Hyfe’s team is excellent.  They are responsive and collaborative and their technology performed reliably in a real-world chronic bronchitis population. The accuracy of cough detection, clarity of dashboards, and availability of Hyfe’s support contributed to a smooth study experience. We are satisfied with the partnership and confident in continuing with Hyfe’s platform in future trials.",
        media: {
          url: "/avatars/testimonials.david.png",
          alt: "seo-alt",
        },
      },
      {
        title: "Dan Copeland",
        subtitle: "CEO | Renovion",
        id: 4.7,
        text: "Hyfe’s team is excellent.  They are responsive and collaborative and their technology performed reliably in a real-world chronic bronchitis population. The accuracy of cough detection, clarity of dashboards, and availability of Hyfe’s support contributed to a smooth study experience. We are satisfied with the partnership and confident in continuing with Hyfe’s platform in future trials.",
        media: {
          url: "/avatars/testimonials.david.png",
          alt: "seo-alt",
        },
      },
    ],
  },
  solutions: {
    title: "Explore Hyfe Solutions for Consumer Wellness",
    subtitle: "Our solutions",
    text: "Discover our full suite of products for research, digital therapeutics, and patient care.",
    ctas: [
      {
        label: "see validation data",
        color: "primary",
        link: "/adasd",
        type: "arrow-right",
        variant: "solid",
      },
    ],
    cards: [
      {
        title: "Hyfe.com",
        text: "Corporate hub: science, publications, investors, and strategic updates.",
        link: "/",
        media: {
          url: "/images/solution.hyfy.png",
          alt: "seo-alt",
        },
        gradient: {
          colorStart: "FDC500",
          colorEnd: "E3655B",
        },
      },
      {
        title: "Resolve DTx",
        text: "AI-powered digital therapeutic for chronic cough. Flexible pharma partnerships.",
        link: "/",
        media: {
          url: "/images/solution.dtx.png",
          alt: "seo-alt",
        },
        gradient: {
          colorStart: "3F6DCF",
          colorEnd: "9A67D9",
        },
      },
      {
        title: "Hyfe Cough Diary",
        link: "/",
        text: "FDA-regulated cough diary for payers & healthcare organizations.",
        media: {
          url: "/images/solution.diary.png",
          alt: "seo-alt",
        },
        gradient: {
          colorStart: "0E6EB8",
          colorEnd: "25C3F4",
        },
      },
      {
        title: "CoughPro",
        link: "/",
        text: "Consumer cough tracking app — empowering individuals worldwide.",
        media: {
          url: "/images/solution.pro.png",
          alt: "seo-alt",
        },
        gradient: {
          colorStart: "24479E",
          colorEnd: "3898C1",
        },
      },
    ],
  },
  ctaSection: {
    title: "Partner with Hyfe for clinical innovation",
    text: "Discover our suite of digital health solutions, from clinical research to patient care.",
    ctas: [
      {
        label: "see validation data",
        color: "primary",
        link: "/adasd",
        type: "arrow-right",
        variant: "solid",
      },
    ],
    video: "/video/test.mp4",
  },
  footer: {
    columns: [
      {
        title: "Company",
        links: [
          { label: "Workflow", type: "anchor", url: "workflow" },
          { label: "Services", type: "anchor", url: "services" },
          { label: "How it works", type: "anchor", url: "how-it-works" },
          { label: "Testimonials", type: "anchor", url: "testimonials" },
          { label: "Our Solutions", type: "anchor", url: "our-solutions" },
        ],
      },
      {
        title: "Hyfy ecosistem",
        links: [
          { label: "Hyfe", type: "external", url: "https://hyfe.com" },
          { label: "Resolve DTx", type: "external", url: "https://hyfe.com" },
          {
            label: "Hyfe Cough Diary",
            type: "external",
            url: "https://hyfe.com",
          },
          { label: "CoughPro", type: "external", url: "https://hyfe.com" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", type: "internal", url: "/blog" },
          {
            label: "About",
            type: "external",
            url: "https://www.hyfe.com/about",
          },
          {
            label: "Publications",
            type: "external",
            url: "https://www.hyfe.com/publications",
          },
          {
            label: "Careers",
            type: "external",
            url: "https://www.hyfe.com/careers",
          },
        ],
      },
    ],
  },
};
