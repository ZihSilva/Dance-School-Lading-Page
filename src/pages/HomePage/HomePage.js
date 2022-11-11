// import { PricingCard } from "../../components/PricingCards/PricingCard";
import {MainSection} from "../../components/MainSection/MainSection";
import {Classes} from "../../components/Classes/Classes";
import {Gallery} from "../../components/Gallery/Gallery";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { Footer } from "../../components/Footer/Footer";
import { OurTeam } from "../../components/OurTeam/OurTeam";


export function HomePage(){
    return (
<>
<MainSection/>
<Classes/>
<OurTeam/>
{/* <PricingCard/> */}
<Gallery/>
<Testimonials/>
<Footer />


</>


    )
}