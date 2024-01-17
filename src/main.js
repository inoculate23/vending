import './app.css';

document.querySelector('#app').innerHTML = `
<div class="navbar bg-dark text-neutral-content">
<button class="btn btn-neutral text-xl">Sin City Sweets</button>
<button class="btn btn-neutral text-l">About Us</button>
<a href="#machines"><button  class="btn btn-secondary text-l">Our Machines</button></a>


<button class="btn btn-primary text-l">Contact</button>
</div>


<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="./images/pexels-photo-5196187.jpeg" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
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

<div class="join join-vertical lg:join-horizontal">
<div class="card w-86 bg-base-100 shadow-xl">
<figure><img src="./images/vending-machine-with-food-drink/421_generated.jpg" alt="Shoes" /></figure>
<div class="card-body">
  <h2 class="card-title">Drink Vending Machine</h2>
  <p>Are you thirsty? Quench your thirst with our state-of-the-art vending machine! With just a touch, you'll have a refreshing drink in your hand. Stay hydrated and satisfied with our wide selection of beverages. Don't wait, visit our vending machine today!</p>
  <div class="card-actions justify-end">
    <button class="btn btn-primary ">Book</button>
  </div>
</div>
</div>
<div class="card w-86 bg-base-100 shadow-xl">
<figure><img src="./images/vending-machine-queue/422_generated.jpg" alt="Shoes" /></figure>
<div class="card-body">
  <h2 class="card-title">Combo Snack Machine</h2>
  <p>Get your favorite drinks and snacks in one place! Our combo vending machine offers a wide selection of refreshing beverages and delicious snacks. Stay hydrated and satisfied throughout the day with our convenient and reliable vending solution. Upgrade your snacking experience today!
  </p>
  <div class="card-actions justify-end">
    <button class="btn btn-primary ">Book</button>
  </div>
</div>
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
