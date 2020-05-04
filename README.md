<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Welcome to Splendid Excursions</title>
    <link rel="stylesheet" type="text/css" href="sstyle.css">
</head>

<body>
    <div class="logo">
        <img src="images/logoImage.png" alt="Logo Image">
    </div>
    <nav id="navbar">
        <div class="Menu">
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                        <img src="images/nav_image.png" alt="">
                    </label>
            <img id="menulogo" src="images/logoImage.png" alt="">
            <ul class="menu_list">
                <li><a id="a" href="index.html">Home</a></li>
                <li><a id="a" href="#service">Services</a></li>
                <li><a id="a" href="#location">Locations</a></li>
                <li><a id="a" href="#contacts">Contact</a></li>
                <li><a id="a" href="#about">About Us</a></li>
            </ul>
        </div>
    </nav>
    <div class="galleryContainer">
        <div class="slideShowContainer">

            <div onclick="plusSlides(-1)" class="nextPrevBtn leftArrow"><span class="arrow arrowLeft"></span></div>
            <div onclick="plusSlides(1)" class="nextPrevBtn rightArrow"><span class="arrow arrowRight"></span></div>
            <div class="captionTextHolder">
                <p class="captionText slideTextFromTop"></p>
            </div>
            <div class="imageHolder">
                <img src="images/home.jpg">1366X768
                <p class="captionText"><a href="">Welcome to SriLankan Paradise!!!</a></p>
            </div>
            <div class="imageHolder">
                <img src="images/services.jpg">
                <p class="captionText"><a href="">Serve you with the Best Services</a></p>
            </div>
            <div class="imageHolder">
                <img src="images/thingsToDo.jpg">
                <p class="captionText"><a href="">Too Many Things to do to Enjoy</a></p>
            </div>
            <div class="imageHolder">
                <img src="images/locations.jpg">
                <p class="captionText"><a href="">Many Location to Explore</a>
                </p>
            </div>
        </div>
        <div id="dotsContainer"></div>
    </div>
    <div id="service" class="services">
        <h1 class="servicesTitle">
            Services
        </h1>
    </div>

    <div class="serviceIn">

        <div class="boxes">
            <a href="transport.html">
                <div class="transport">
                    <h1>Transport</h1>
                    <p>buses, three-wheelers, trains and private transport modes like self-driven cars, vans, motorbikes or lorries make up the major transportation modes in Sri Lanka within the country. So we can say that transportation in Sri Lanka is
                        mainly based on the road network but airports, harbors, and waterways are also there.</p>
            </a>
            </div>
            <div class="accomadation">
                <a href="hotel.html">
                    <h1>Hotels</h1>
                    <p>Sri Lanka has an excellent range of accommodation in all price brackets, from basic beachside shacks to elegant colonial mansions and sumptuous five-star resorts – indeed staying in one of the country’s burgeoning number of luxury
                        hotels and villas can be one of the principal pleasures of a visit to the island, if you can afford it.</p>
                </a>
            </div>
            <div class="thingsToDo">
                <a href="activities.html">
                    <h1>Things To Do</h1>
                    <p>While you’re planning your next vacay to this serene country, scroll down to know where all you can head for an amazing trip with your friends and family. Make sure you cover all the must-have experiences at these beautiful places
                        in Sri Lanka! The following are the most beautiful places in Sri Lanka.</p>
                </a>
            </div>
        </div>
    </div>

    <div id="location" class="locations">
        <h1 class="locationsTitle">
            Locations
        </h1>
    </div>

    <div id="locations" class="locationsIn">
        <div class="location_in">

            <div class="beachSide">
                <a href="beach.html">
                    <h1>Beach Side</h1>
                    <p>Sri Lanka is a cluster of islands. What’s the first thing which comes to your mind when we say island? Beaches, of course. That is exactly what Sri Lanka is famous for. People from all around the world come to explore the best beaches
                        in Sri Lanka. The scenic views of these gorgeous sandy shores are sure to make you want to revisit these beautiful beaches in and around Sri Lanka.Besides, beaches are the perfect place to relax with the sound of gushing waves
                        giving you an upheaval feeling. There is a sense of true joy and peace while relaxing on a beach. Needless to say, the Sri Lankan beaches are your perfect place to rejuvenate completely.</p>
                </a>
            </div>

            <img class="beachimg" src="images/BeachSide.jpg" alt="">
            <div class="forest">
                <a href="forest.html">
                    <h1>Rain Forest</h1>
                    <p>Rainforests are incredible places which cover only 6% of the surface area of the Earth, however more than half of the world’s plant and animal species lives in them. The reason they are called rainforests is because they receive a
                        high amount of rainfall annually. Consisting of tall, dense jungle, the climate inside a rainforest is hot and humid. At one time in Sri Lanka rainforests consisted of over 26% of the land area, however today only 2% is left of
                        forest cover. Hence it is no surprise that all rainforests in the island have been declared protected areas with Sinharaja designated as a World Heritage site.</p>
                </a>
            </div>
            <img src="images/Forest.jpg" alt="" class="forestimg">


            <div class="hillCountry">
                <a href="mountain.html">
                    <h1>Hill Country</h1>
                    <p>Sri Lanka's Hill Country is the island at its most scenic, a mist-wrapped land of emerald peaks and stupendous views, of hillsides carpeted with tea plantations and graced by astonishing waterfalls. This is a place where you can wear
                        a fleece in the daytime and cuddle up beside a log fire in the evening. Where you can enjoy a memorable meal in the eternal city of Kandy or at a roadside shack in lovely Ella. A region where you can walk to the end of the world,
                        stand in the footsteps of the Buddha and be surrounded by a hundred wild elephants. Ride a train utterly bewitched by the vistas. Paddle a raft down a raging river. Enjoy the drumbeat of traditional dance and then savour the silence
                        on a lonely mountaintop.</p>
                </a>
            </div>
            <img src="images/HillCountry.jpg" alt="" class="hillimg">
            <div class="sanctuary">
                <a href="sanctuaries.html">
                    <h1>Sanctuary</h1>
                    <p>
                        Sri Lanka Wildlife Sanctuaries is one of the finest wildlife watching countries in South Asia. The island may be small in size, but the variety of habitats, and the wildlife found there, would do justice to a country many times its size. A lot of nature
                        reserves and sanctuaries are in Sri Lanka in order to protect the wildlife from human interests that might harm the animals including poaching. Visitors are allowed in to these reserves where you can take safari trips with a trained
                        guide provided by the reserves themselves.Sri Lanka’s wildlife is as varied as the island itself, ranging from elephants and leopards to marine life and a vast number of different birds, and Sri Lanka is now one of the best places
                        in the world to see whales, including the mighty blue whale. With 12% of the country designated for wildlife protection, it is easy to get a taste of Sri Lankan wildlife</p>
                </a>
            </div>

            <img src="images/Sanctuary.jpg" alt="" class="sanctuaryimg">
            <div class="waterfall">
                <a href="waterfalls.html">
                    <h1>Waterfalls</h1>
                    <p>The country is home to more than 100 waterfalls and rivers which at the end of the day stops at the Indian Ocean. Waterfalls are mostly located in the Hill Country. Some of the waterfalls are man-made but still doesn't stop short of
                        being breath-takingly beautiful. Unknown waterfalls are still present, those that weren't officially discovered. Most of the waterfalls are very difficult to find because of the dense forests and are sometimes totally inaccessible.
                        Only a handfull of waterfalls are used to bathe in, whereas the others are too dangerous to do so.This island is abundant with waterfalls which are known in the world over for their beauty and some of which are seasonal. If you
                        are looking to visit a waterfall during your next trip, here are 5 unique waterfalls that will leave you breathless.</p>
                </a>
            </div>
            <img src="images/Waterfall.jpg" alt="" class="waterfallimg">
            <div class="ancient">
                <a href="ancient.html">
                    <h1>Ancient Places</h1>
                    <p>Sri Lanka, the pearl of the Indian Ocean, has always been subject to conquest by various invaders. Apart from British colonization, this little island had previously been dominated by the Portuguese, Dutch, South Indians, etc., giving
                        Sri Lanka a wealth of history to boast about. This rich history makes Sri Lanka a tourist hotspot famous for its ancient ruins, age old buildings, legends and folktales. A trip to Sri Lanka wouldn’t be complete without a taste
                        of its history and a visit to these historical places in Sri Lanka. Anuradhapura, Polonnaruwa, Sigiriya and Kandy form the cultural triangle and are home to most of the ancient ruins of Sri Lanka.</p>
                </a>
            </div>
            <img src="images/ancient.jpg" alt="" class="ancientimg">
            <div class="sacred">
                <a href="sacred.html">
                    <h1>Sacred Places</h1>
                    <p>Sri Lanka’s Cultural and Religious sites are many. They range from the ancient ruins of cities, temples and shrines in the Cultural Triangle including the Temple of the Tooth in Kandy to the remains of Portuguese, Dutch and British
                        colonisation in the form of old forts (especially the one at Galle). In Colombo there are statues of cultural interest as well as modern monuments such as Independence Square. Colombo has many museums reflecting the importance
                        of its cultural heritage, including the National Museum with many artefacts from the Kandyan period. </p>
                </a>
            </div>
            <img src="images/SecretPlaces.jpg" alt="" class="sacredimg">
            <div class="camping">
                <a href="camping.html">
                    <h1>Camping Sites</h1>
                    <p>Camping in Sri Lanka can be the best experience you can have while being close to nature. Amidst the scenic jungle location you have a chance to go for rainforest camping which will allow you to get deeply absorbed in the sound of
                        the water being closer to the fall. One can couple the camping expedition with other water activities such as water rafting, bird watching and trekking to waterfalls amongst others. You can have the same concept in a jungle safari
                        too which is an equally thrilling experience.If its hiking/trekking trails or adventure you are interested in, Sri Lanka’s mist covered central mountains in Ella offers marvellous opportunities.</p>
                </a>
            </div>
            <img src="images/Camping.jpg" alt="" class="campingimg">
        </div>
        <div id="contacts" class="contactus">
            <img src="images/Contact-us.jpg" alt="">
        </div>
        <div class="container">
            <form id="contact" action="" method="post">
                <h3>Splendid Excursions Pvt(Ltd)</h3>
                <h4>Contact us for more informations</h4>
                <fieldset>
                    <input placeholder="Your name" type="text" tabindex="1">
                </fieldset>
                <fieldset>
                    <input placeholder="Your Email Address" type="email" tabindex="2" required>
                </fieldset>
                <fieldset>
                    <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required>
                </fieldset>
                <fieldset>
                    <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required>
                </fieldset>
                <fieldset>
                    <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        </div>
        <div id="about" class="aboutus">
            <img src="images/about-us.png" alt="">
        </div>

        <footer class="footer-distributed">

            <div class="footer-left">

                <h3>Splendid<span>Excursions</span></h3>

                <p class="footer-company-name">Splendid Excursions Pvt(Ltd) © 2020</p>
            </div>

            <div class="footer-center">

                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>University Of Kelaniya</span>Kelaniya,SriLanka</p>
                </div>

                <div>
                    <i class="fa fa-phone"></i>
                    <p>+9476-627-4633 </p>
                    <p>/ +9471-037-0396</p>
                </div>

                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">gimhanah_se17013@stu.kln.ac.lk</a></p>
                </div>

            </div>

            <div class="footer-right">

                <p class="footer-company-about">
                    <span>About us</span> We are the No.1 Online Company in Sri Lanka regarging Tourism.We Serve you the best Services as fast as possible efficiently.
                </p>

                <div class="footer-icons">

                    <a href="https://www.facebook.com/dinethshan.gimhana"><img src="images/facebook.png" alt="" class="facebook"></a>
                    <a href="https://twitter.com/dsg9758"><img src="images/twitter logo.png" alt="" class="twitter"></a>
                    <a href="https://www.linkedin.com/in/dinethshangimhana/"><img src="images/linkedin logo.png" alt="" class="linkedin"></a>
                    <a href="https://github.com/DinethSGimhana"><img src="images/github logo.png" alt="" class="github"></a>

                </div>

            </div>

        </footer>

        <script src="sscript.js"></script>
</body>

</html>
