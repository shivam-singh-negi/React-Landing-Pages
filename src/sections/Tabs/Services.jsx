import React from 'react';
import black_dot from "./Home/assets/black_dot_horizontal.png"
import development_icon from "./Home/assets/development_icon.png"

import quality_assurance from "./Home/assets/qa.png"
import hr from "./Home/assets/hr.png"
import strategies from "./Home/assets/strategies.png"
import management from "./Home/assets/management.png"
import policy from "./Home/assets/Policy.png"
const Services = () => {
    const service={

    }
    return (
        <div class="flex flex-col bg-white pt-10 mx-0" >
            <img src={black_dot} alt="black_dot_pattern" class="w-[500px] h-[70px] ml-auto" />

            <section class="relative flex flex-row  ">
            <div class="flex flex-col space-y-5 w-1/2 ">
                <h1 class="text-black text-3xl font-bold">What we Can Offer You</h1>
                <p>
                    Optimize your journey with our consulting services, delivering 
                    personallized solutions for success.
                </p>

            </div>
        
            </section>
            <section class="flex flex-row flex-wrap justify-evenly ">
            <div class="flex flex-col text-wrap items-center text-center p-5   space-y-4 w-1/3 ">
                    <img src={development_icon} alt="development_icon" class="w-[100px]" />
                    <div class="items-center">
                    <h1 class="text-xl font-bold">Method Development</h1>
                    <p>Strategic method development for business excellence and programme.</p>
                    </div>
                </div>
                <div class="flex flex-col text-wrap items-center text-center   p-5  space-y-4 w-1/3">
                    <img src={quality_assurance} alt="quality_assurance" class="w-[100px]" />
                    <div class="items-center">
                    <h1 class="text-xl font-bold">Method Development</h1>
                    <p>Strategic method development for business excellence and programme.</p>
                    </div>
                </div>
                <div class="flex flex-col text-wrap items-center text-center  p-5 space-y-4 w-1/3">
                    <img src={hr} alt="hr" class="w-[100px]" />
                    <div class="items-center">
                    <h1 class="text-xl font-bold">Method Development</h1>
                    <p>Strategic method development for business excellence and programme.</p>
                    </div>
                </div>
                <div class="flex flex-col text-wrap items-center text-center  p-5  space-y-4 w-1/3">
                    <img src={policy} alt="policy" class="w-[100px]" />
                    <div class="items-center">
                    <h1 class="text-xl font-bold">Method Development</h1>
                    <p>Strategic method development for business excellence and programme.</p>
                    </div>
                </div>
                <div class="flex flex-col text-wrap items-center text-center  p-5 space-y-4 w-1/3">
                    <img src={strategies} alt="strategies" class="w-[100px]" />
                    <div class="items-center">
                    <h1 class="text-xl font-bold">Method Development</h1>
                    <p>Strategic method development for business excellence and programme.</p>
                    </div>
                </div>
                <div class="flex flex-col text-wrap items-center text-center  p-5  space-y-4 w-1/3">
                    <img src={management} alt="manageent" class="w-[100px]" />
                    <div class="items-center">
                    <h1 class="text-xl font-bold">Method Development</h1>
                    <p>Strategic method development for business excellence and programme.</p>
                    </div>
                </div>
              
               
            </section>
        
            
            
        </div>
    );
}

export default Services;
