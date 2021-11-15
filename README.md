# Agiothyella Design Studio webpage

Landing page for Agiothyella Design Studio

Demo: https://agiothyella.github.io/web-fe-project-1-design-studio-PDA/

This webpage was designed and developed by me, Agiothyella.
This webpage is hosted on github as a showcase for my portofolio. Please do not copy/duplicate whole/parts of my markup.

Creator of the images used (in order of appearances):

- Header: Unknown, Ferdinand Ladera, Unknown, Jonathan Kuo
- About: Il Su Ko (Background), Jamie Ro (Front)
- Service Environment: Feng Zhu, Prince of Persia 2008 Concept Art, oscarvisual
- Service Character: Alex Jessup, Massive Black, Grando Espada Official Art
- Service Creature: Unknown, Sveta Kudakova, Dina Norlund
- Service Vehicle: Gian Andri Bezzola, Khang Le, Zhang Suo
- Service Props: sarahlindstromart, Unknown, Aaron de Leon
- Gallery Column 1: Assassins Creed Concept Art, Svetlin Velinov for "Magic the Gathering", Encho Enchev, Chenthooran Nambiarooran, Unknown, Unknown, danarune
- Gallery Column 2: Paul Tobin, nixell cho, Gabe Gonzalez, Assassins Creed Unity Concept Art
- Gallery Column 3: Alp Allen Altiner, Hamish Frater, Yu Chen Hong, Tatiana Yamshanova, Bobby Weissenberg
- Background Image: MelbuFrama (Header), OKAZU (Service), wikimedia commons (Service), MarcWasHere (Clients), jadrienC (Contact), Akihiko Yoshida for "Bravely Default" (Small menu)
- Pop-up: Unknown (Landscape), Jesse Van Dijk (Potrait)

No copyright infringement is intended. I do not own nor claim any of the Image used in this webpage, as it only served as placeholder.
If you know the creator of one of the images that I don't know, email me and I'll credit them here.
If you're creator of one of the images I use as placeholder on this webpage and wish it to be removed, just email me and i'll remove it immediately.

# Journal:

### Design:
There's one type of style that's popular for concept art design studios website that I had observed. And that is blasting the page with a lot of images they created as a proof of their work to impress the visitors. One problem I feel with that kind of style is: It's hard to manage the composition and harder to set the focal points on the page. Too many images confuses the visitors because even though it's shows what the studio capable of, It make it harder for the visitors to navigate the page. Images take the most attention, and too much of it shadows the functionality of the webpage.

I tried to make this webpage cleaner with some isolated space specialized for images so visitors can clearly navigate the page easily while presented samples of studio works. I also make some of the sections with grayish-blue color with subtle background image to give the impression of adventure and creativity, perfect for what concept art studios trying to communicate.

### Development:
The technical aspect of this page though, is a nightmare. The javascript is so dirty because the script is run as it is, without common functions running different tasks. The script is like different things mashed together to make one big messy code. It's a mistake, but I learn from it. 

Another thing worth reconsidering is the resources loading. It's a design studio webpage with lot of images, some of them may bigger in size. Maybe it's better to wait for the page to load completely before showing it to the user, and then using some sort of loading screen before it. Better, is to use lazy load to just load it faster before loading the big one. I should've done that, but I didn't know how to properly do that when I build this page.
