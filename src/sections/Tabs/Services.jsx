import React from 'react';
import black_dot from "./Home/assets/black_dot_horizontal.png"
import development_icon from "./Home/assets/development_icon.png"

import quality_assurance from "./Home/assets/qa.png"
import hr from "./Home/assets/hr.png"
import strategies from "./Home/assets/strategies.png"
import management from "./Home/assets/management.png"
import policy from "./Home/assets/Policy.png"


const data = [
    {
      imgSrc: development_icon,
      imgAlt: 'development_icon',
      title: 'Method Development',
      description: 'Strategic method development for business excellence and programme.'
    },
    {
      imgSrc: quality_assurance,
      imgAlt: 'quality_assurance',
      title: 'Quality Assurance',
      description: 'Quality excellence or optional and sustainable business operation.'
    },
    {
      imgSrc: hr,
      imgAlt: 'hr',
      title: 'Human Resources',
      description: 'Optimize human resources for sustainable business growth.'
    },
    {
      imgSrc: policy,
      imgAlt: 'policy',
      title: 'Policy Compliance',
      description: 'Strategic policy compliance for seamless business operations.'
    },
    {
      imgSrc: strategies,
      imgAlt: 'strategies',
      title: 'Business Strategies',
      description: 'Unlocking growth potential using dynamic business strategies.'
    },
    {
      imgSrc: management,
      imgAlt: 'management',
      title: 'Management System',
      description: 'Maximize productivity with our advanced management structure.'
    }
  ];
  

const Services = () => {
    const service={

    }
    return (
        <div class="flex flex-col bg-white pt-10 mx-0" >
            <img src={black_dot} alt="black_dot_pattern" class="w-[500px] h-[70px] ml-auto" />

            <section class="relative flex flex-row  ">
            <div class="flex flex-col space-y-5 w-1/2 ">
                <h1 class="text-black text-3xl font-bold">What we Can Offer You</h1>
                <p class="font-serif ">
                    Optimize your journey with our consulting services, delivering 
                    personallized solutions for success.
                </p>

            </div>
        
            </section>
     
        
            
            <section className="flex flex-row flex-wrap justify-evenly">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center p-5 space-y-4 w-1/3">
          <img src={item.imgSrc} alt={item.imgAlt} className="w-[100px]" />
          <div className="items-center">
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
        </div>
    );
}

export default Services;
