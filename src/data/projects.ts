import nhs from "../assets/images/nhs.png";
import provincialpark from "../assets/images/provincialpark.png";
import restorationplan from "../assets/images/restorationplan.png";
import designpage from "../assets/images/designpage.png";
import restorationThumb from "../assets/images/restorationplan.png"; // main page
import restorationHero from "../assets/images/restorationHero.png";  // detail page
import restoration2 from "../assets/images/restoration2.png";
import restoration3 from "../assets/images/restoration3.png";
import ecp1 from "../assets/images/ecp1.jpg"
import ecp2 from "../assets/images/ecp2.jpg"
import Picture7 from "../assets/images/sd/ecp/Picture7.png"
import Picture8 from "../assets/images/sd/ecp/Picture8.png"
import Picture9 from "../assets/images/sd/ecp/Picture9.png"
import Picture10 from "../assets/images/sd/ecp/Picture10.jpg"
import Picture11 from "../assets/images/sd/ecp/Picture11.png"
import Picture1 from "../assets/images/sd/nhs/Picture1.png"
import Picture2 from "../assets/images/sd/nhs/Picture2.png"
import Picture3 from "../assets/images/sd/nhs/Picture3.png"
import Picture4 from "../assets/images/sd/nhs/Picture4.png"
import Picture5 from "../assets/images/sd/nhs/Picture5.png"
import park1 from "../assets/images/sd/park/park1.png"
import Park2 from "../assets/images/sd/park/park2.png"
import Park3 from "../assets/images/sd/park/park3.png"
import mid1 from "../assets/images/sd/mid/mid1.png"
import mid2 from "../assets/images/sd/mid/mid2.png"
import mid3 from "../assets/images/sd/mid/mid3.png"
import mid4 from "../assets/images/sd/mid/mid4.png"
import mid5 from "../assets/images/sd/mid/mid5.png"



export type Project = {
  slug: string;
  title: string;
  summary: string;
  details: string;

  thumbnail: any;      // used on main page cards
  heroImage?: any;     // used on detail page only
  gallery?: any[];     // optional extra images for detail page

  pdf?: string;
};

//export const projects: Project[] = [
  //{
    //slug: "ecological-compensation-plan",
    //title: "Ecological Compensation Plan",
    //summary: "Developed a comprehensive policy document...",
    //details: "Full case study text here...",

    //thumbnail: restorationThumb,  // ✅ main page stays same
    //heroImage: restorationHero,   // ✅ detail page image changes
    //gallery: [restoration2, restoration3], // optional

    //pdf: "/pdfs/ecological-compensation-plan.pdf",
  //},
//];
export const projects: Project[] = [
  {
    slug: "mid-rise-residential-lindsay-on",
    title: "Mid-Rise Residential",
    summary:
      "Prepared a planning rationale for a 6-storey mid-rise residential building in Lindsay, Ontario.",
    details:
      "located at 35 county road Kawarthas lakes in the heart of the community of the Town of Lindsay, the site presents an optimal opportunity for the development of under-utilized land ( Currently open space). The proposed development includes 6-storey Mid-rise modern residential infill featuring 3-bedroom, 2-bedroom, and 1-bedroom apartment units built on approximately 1 ha area. The project supports compact, transit-supportive development while contributing to local housing supply within the existing urban boundary. This project includes a planning rationale report, explaining the proposed development, area context, policy conformity, and justification principles, and a Zoning-by-law and official plan amendment draft report. Spatial analysis and geoprocessing tools in ArcGIS Pro and ArcGIS Urban were used to evaluate site suitability, analyze constraints, and develop a conceptual site design informed by planning policy and urban form considerations.",
    thumbnail: designpage,
    heroImage: designpage,
    gallery: [mid1,mid2,mid3,mid4,mid5],
    pdf: "/pdfs/mid-rise-residential-lindsay-on.pdf",
  },
  {
    slug: "ecological-compensation-plan",
    title: "Ecological Compensation Plan",
    summary:
      "Developed a comprehensive policy document and management plan on ecological compensation for the Municipality of Port Hope.",
    details:
      "The Ecological Compensation Plan was an academic planning project focused on strengthening the Official Plan of the Municipality of Port Hope by introducing clear, defensible policies to address ecological loss associated with future development. The project aimed to prioritize the protection of Key natural features within the municipal boundary, while establishing practical compensation mechanisms where impacts are unavoidable.Deep Research about the project involved a detailed analysis of the Ecosystem using spatial analysis tools such as ArcGIS Pro and best compensation practices throughout different successful projects and municipal documents from different municipalities and conservation authorities in Ontario, and from international areas. The report also includes the Pre, post-construction, and post-construction monitoring activities required. The final output established clear compensation and monitoring requirements spanning pre-construction, post-construction, and long-term ecological performance.",
    thumbnail: restorationplan,
    heroImage: restorationplan,
    gallery: [Picture7,Picture8,Picture9,Picture10,Picture11],
    pdf: "${https://harvey2809.github.io/harvey-portfolio28}/pdfs/Municipality%20of%20Port%20Hope-%20compensation%20plan%20(1).pdf",
  },
 
  {
    slug: "maitland-river-provincial-park",
    title: "Maitland River Provincial Park",
    summary:
      "Developed a management and site analysis plan for a new provincial park in the Town of Goderich.",
    details:
      "The Maitland River Provincial Park project proposes to convert the significantly important Elements in the municipality to a provincial park to protect and preserve the ecological and natural integrity of the area. The proposed provincial park will protect provincially significant elements of Ontario's natural and cultural landscape and maintain biodiversity while offering opportunities for ecologically sustainable outdoor recreation. The management plan establishes a comprehensive planning framework, including a zoning system, site-specific management policies, and the development of four-season campgrounds, day-use areas, and backcountry facilities. These management policies are designed to guide the park's operation over 20 year period while complying with legislative frameworks like the Provincial Parks and Conservation Act,  Ontario provincial parks: Planning and management policies, and Ontario's Living Legacy Land use strategy. ",
    thumbnail: provincialpark,
    heroImage: provincialpark,
    gallery: [park1,Park2,Park3],
    pdf:'${https://harvey2809.github.io/harvey-portfolio28}/pdfs/Maitland%20River%20Provincial%20Park%20Management%20Plan%20(1).pdf',
  },
   {
    slug: "natural-heritage-evaluation",
    title: "Natural Heritage Evaluation",
    summary:
      "Compiled a Natural Heritage Evaluation report for a 5-hole golf course development.",
    details:
      "The Project applicant for 10604 Old Scugog Road, Township of Scugog, aims to build a privately owned 5-hole golf course, which requires a detailed Natural Heritage Evaluation site, as the project is close to natural features. The purpose of this assessment is to identify important ecological features surrounding the development area, applicable legislations and potential environmental constraints using available federal, provincial, and regional frameworks. GIS-based analysis was used to delineate core natural areas and corridors. The final report outlines the Legal applicable policies and framework, desktop-based flora and fauna identification, and recommendations for guiding development while protecting ecological integrity. This report only represents Phase 1 of the Evaluation, and this evaluation is solely desktop-based using sources like NHIC, GBIF, Birds Canada, Fish-on-line, and Ontario Geohub..",
    thumbnail: nhs,
    heroImage: nhs,
    gallery: [Picture1,Picture2,Picture3,Picture4,Picture5],
    pdf: "/pdfs/NaturalHeritageEvaluation%20Project.pdf",
  },
  
];
