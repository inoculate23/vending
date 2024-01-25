import './app.css';

document.querySelector('#app').innerHTML = `

<div class="navbar bg-dark text-neutral-content">
<div class="flex-1">
<a href="./index.html"><button class="btn btn-secondary text-xl">Sin City Sweets</button></a>
</div>
<div class="flex-none">
<a href="#machines"><button  class="btn btn-primary text-l">Need a Vending Machine?</button></a>



<a href="#about"><button class="btn btn-primary text-l">About Us</button></a>

<a href="#contact"><button class="btn btn-primary text-l">Contact</button></a>
<a href="tel:7025507688"><button class="btn btn-primary text-l">Phone</button></a>
</div>
</div>
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
  
  <iframe id="iframe" title="#3December 2023 - The Vendomatic 360" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/95e89daf76724f2f9eb1725ce52cbe39/embed?autospin=1&autostart=1&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_theme=dark" width="100%" height="100vh"> </iframe> 

    <div>
      <h1 class="text-5xl text-primary font-bold">VendGo Machines 
      </h1>
      <br>
      <h2 class="text-2xl text-accent font-bold"> in Our Business</h2>
      <p class="py-6">At Sin City Sweets Vending, we’re proud to offer our vending machines that dispense snacks and drinks to your residents. We make it easy for them to grab either a necessary drink or snack without having to leave the premises.</p>
      <h2 class="text-2xl text-accent font-bold">Convenience</h2>
      <p class="py-6">Sin City Sweets Vending currently operates machines at several establishments in our community. We plan to make it easy for your residents to quickly grab items. It's far more convenient for them to step downstairs (perhaps in their slippers) than to walk to a store.</p>
      <h2 class="text-2xl text-accent font-bold">The Bottom-Line</h2>
      <p class="py-6"> Our data shows that in-house vending machines capture more revenue simply because of their visibility and convenience.</p>
     <a href="#machines"> <button class="btn btn-primary">Get Started</button></a>
    </div>
  </div>
</div>

<section id="machines">
<div class="join join-vertical lg:join-horizontal">
  
  <div class="card join-item w-86 bg-base-100 shadow-xl">
  <figure><img src="./images/vending-machine-business/423_generated.jpg" alt="Shoes" /></figure>
  <div class="card-body join-item">
    <h2 class="card-title join-item">Novelty Vending Machine</h2>
    <p>Are you ready for a delightful surprise? Step right up to our vending machine and discover a world of souvenirs and novelty items! From quirky keychains to adorable plush toys, we have something for everyone. Don't miss out on the chance to bring home a little piece of joy. Visit our vending machine today!</p>
    <div class="card-actions join-item justify-end">
      <button class="btn btn-primary join-item ">Book</button>
    </div>
  </div>
</div>

<div class="card join-item w-86 bg-base-100 shadow-xl">
<figure><img src="/./images/multi.jpeg" alt="Shoes" /></figure>
<div class="card-body join-item">
  <h2 class="card-title join-item">Snack Vending Machines</h2>
  <p>Are you ready for a delightful surprise? Step right up to our vending machine and discover a world of souvenirs and novelty items! From quirky keychains to adorable plush toys, we have something for everyone. Don't miss out on the chance to bring home a little piece of joy. Visit our vending machine today!</p>
  <div class="card-actions join-item justify-end">
    <button class="btn btn-primary join-item ">Book</button>
  </div>
</div>
</div>

<div class="card join-item w-86 bg-base-100 shadow-xl">
<figure><img src="./images/vending-machine-with-food-drink/421_generated.jpg"" alt="Shoes" /></figure>
<div class="card-body join-item">
  <h2 class="card-title join-item">Drink Vending Machine</h2>
  <p>Are you thirsty? Quench your thirst with our state-of-the-art vending machine! With just a touch, you'll have a refreshing drink in your hand. Stay hydrated and satisfied with our wide selection of beverages. Don't wait, visit our vending machine today!</p>
  <div class="card-actions join-item justify-end">
    <button class="btn btn-primary join-item ">Book</button>
  </div>
</div>
</div>

<div class="card join-item w-86 bg-base-100 shadow-xl">
<figure><img src="./images/vending-machine-queue/422_generated.jpg" alt="Shoes" /></figure>
<div class="card-body join-item">
  <h2 class="card-title join-item">Combo Snack Machine</h2>
  <p>Get your favorite drinks and snacks in one place! Our combo vending machine offers a wide selection of refreshing beverages and delicious snacks. Stay hydrated and satisfied throughout the day with our convenient and reliable vending solution. Upgrade your snacking experience today!
  </p>
  <div class="card-actions join-item justify-end">
    <button class="btn btn-primary join-item">Book</button>
  </div>
</div>
</div>

</div>

</section>

<section id="about">
<div class="hero max-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">The SinCity Dream Team</h1>
      </div>
    
<div class="card join-horizontal w-96 bg-base-100 shadow-xl">
  <div class="card-body">
  
  <figure><img src="/images/david.png" alt="David" /></figure>

  <h1 class="text-2xl text-primary font-bold">David J. Frias</h1>
<p class="text-sm text-accent">CO-CHIEF EXECUTIVE OFFICER</p>

    </div>
  </div>

<div class="card join-horizontal w-96 bg-base-100 shadow-xl">
<div class="card-body">
  
  <figure><img src="/images/rich.png" alt="Richard" /></figure>

  <h1 class="text-2xl text-primary font-bold">Richard Lang

  </h1>
<p class="text-sm text-accent">CO-CHIEF EXECUTIVE OFFICER</p>

    </div>
  </div>

  <div class="card join-horizontal w-96 bg-base-100 shadow-xl">
<div class="card-body">
  
  <figure><img src="/images/sam.png" alt="Samantha" /></figure>

  <h1 class="text-2xl text-primary font-bold">Samantha Kormoski</h1>
<h3 class="text-sm text-accent">DIRECTOR OF MARKETING
</h3>

    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
<center>
<div class="stats shadow">
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div class="stat-title">Happy Clients</div>
    <div class="stat-value">100</div>
  
    </div>
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div class="stat-title">Partners in USA</div>
    <div class="stat-value">50+</div>
    <div class="stat-desc">↗︎ 25 (50%)</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div class="stat-title">Candy Bars Sold</div>
    <div class="stat-value">20,000</div>
    <div class="stat-desc">↗︎ 5000 (25%)</div>
  </div>
  
  <div class="stat">
  <div class="stat-figure text-secondary">
  
  <img src="/images/water.svg" width="40px">
  </div>
  <div class="stat-title">Thirsts Quenched</div>
  <div class="stat-value">32,080</div>
  <div class="stat-desc">↗︎ 8000 (25%)</div>
</div>
</div>
</center>
</section>
<section id="contact">

<div class="contact-box">

 
  
<img src="/images/woman.webp" width="45%"/><div class="contact-form-wrapper">
  <form>
    <div class="form-item text-accent text-3xl">
      <input type="text" name="sender" required>
      <label class="text-accent text-2xl">Name:</label>
    </div>
    <div class="form-item">
      <input type="text" name="email" required>
      <label class="text-accent text-2xl">Email:</label>
    </div>
    <div class="form-item">
      <textarea class="" name="message" required></textarea>
      <label class="text-accent text-2xl">Message:</label>
    </div>
    <button class="submit-btn bg-primary">Send</button>  
  </form>
</div>
</div>

</section>
<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav class="grid grid-flow-col gap-4">
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <div class="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved by Sin Cty Sweets Llc</p>
  </aside>
</footer>
`;
