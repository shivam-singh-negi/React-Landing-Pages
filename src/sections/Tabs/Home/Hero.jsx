import { Button,  } from 'flowbite-react';
import React from 'react';

const Hero = () => {
    return (
<>   
<section class="flex flex-row justify-evenly">
    <div class="bg-red-600 ">
        <h1 class="text-3xl">Masterminds to <br/> Your Positive Goal</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sunt iure,
         exercitationem laborum eum eius atque vel beatae unde excepturi. 
         Aspernatur repudiandae deserunt itaque necessitatibus? Dolor perspiciatis tempora veritatis autem.
       </p>  
       <div class="flex flex-row justify-start gap-10 bg-black text-start">
       <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Collaborate With Us</button>
        <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>

       </div>
       </div>

    <div class="bg-blue-600 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Autem aliquam beatae dolore unde soluta quibusdam similique sequi voluptatum velit ea! 
     Unde quaerat cum iste voluptatem mollitia doloribus velit odio commodi?
     </div>
</section>

<section class="flex flex-row justify-between">
<div>
    <h1>This is Our Result</h1>
    <p>How capable we are at work shines through in every endevor.</p>
</div>
<div class="flex  w-[100%]">
    <ul class="flex flex-row justify-evenly w-[100%]">
        <li>
            <div class="flex flex-wrap flex-col bg-blue-500">
            <h1>160</h1>
            <p>client Project</p>
            </div>
        </li>
        <li>
            <div class="flex flex-wrap flex-col bg-green-50">
            <h1>340</h1>
            <p>Sucesful Project</p>
            </div>
        </li>
        <li>
            <div class="flex flex-wrap flex-col bg-yellow-200">
            <h1>300+</h1>
            <p>Team Members</p>
            </div>
        </li>
        <li>
            <div class="flex flex-wrap flex-col bg-pink-40">
            <h1>82 M</h1>
            <p>Total Revenue</p>
            </div>
        </li>
    </ul>
</div>
</section>
</>
    );
}

export default Hero;
