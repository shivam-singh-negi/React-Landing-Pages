import React from 'react';
import heroImage from './assets/hero_home_image_consulting.jpg'; // Importing the image
import dot_pattern from "./assets/dot_pattern3.png";
import team_image from "./assets/team_management.jpg"
import sq_dot from "./assets/square_dot.png"
import strip_pattern from "./assets/stripe_pattern.png"

const Story = () => {
    return (
<div class="border-blue-900  mt-[50px] space-y-5">
<section class=" flex flex-row justify-evenly ">
    <div class=" flex flex-col pt-10 w-[60%] gap-5">
        <h1 class="text-[30px] text-white font-bold">Know Our Story</h1>
        <p class="text-gray-400 pr-10">Founded in 2019. Lumina is a leading web consulting firm based in Malang, Indonesia. Our expert team specializes in web development, design, digital marketing
        , and Strategic consulting. We craft tailored solutions to exceed client expectations, staying ahead of industry trends to provide cutting-edge solutions. Beyond projects, we prioritize lasting
        relationships offering ongoing support for sustained success.
        Whether you're a startup or an established enterprise, Lumina is your dedicated partner in achieving digital excellence.
       </p>  
       <div class=" my-10 flex flex-row justify-start gap-10 text-start ">
       <button type="button" class="text-white  bg-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
       </div>
       <div class="h-[1px] bg-orange-500 w-[70%]"/>
       </div> 
       <div class="relative inline-block w-[40%]">
        <img class="absolute top-[20px] left-[-50px]  w-[100px]  z-10" src={sq_dot} alt="dot_pattern_image" />
        <img class="rounded-3xl w-[100%] h-full grayscale-[100%] z-20" src={team_image} alt="hero_home_consulting_image" />
        <img class="absolute bottom-[20px] right-[-10px] w-[50px]   z-30" src={strip_pattern} alt="strip_pattern" />

        <div class="rounded-3xl absolute border-[1px] border-orange-500 w-full h-full top-[30px] left-[20px] z-30"></div>

</div>

</section>

</div>
    );
}

export default Story;
