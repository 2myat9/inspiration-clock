# Inspiration Clock

This is Project 2 of the Javascript 30-day Challenge by [Wes Bos](https://wesbos.com/).

Inspiration Clock is a simple clock written in vanilla HTML, CSS, and JS. I added a feature that generates a random inspirational quote below the clock every 1 minute.

### What I learned from this project

- **Box-shadow**: I learned about the `box-shadow` CSS property which was really useful in making the clock frame and the clock hands look realistic and 3D.
- **Background**: For the background, I wanted to make it a little blurry so I couldn't use `background-image` inside `body`. I had to create a separate `div` for it to use `filter: blur()` property. Consequently, I needed the other elements (clock and quote) to have larger z-indexes so they stay on top of the background. I also noticed that a white border appears on the edges of the image when I use blur filter. I tried to remove it but it was more problematic than useful so I decided to reduce the blur radius to decrease the size of the white edge.
- **Smoother clock animation**:
  Originally, whenever a clock hand finishes its full cycle, all 3 clock hands transitioned to their new places, which looked really awkward because `.hand` class had a transition time of `0.05s`. I wrote a function to remove this transition time whenever a clock hand finished a full cycle.
- **Clock center**: Originally, there were only 3 rectangular clock hands so a gap appeared in the center of the clock when they were moving. I decided to add a small circle in the center of the clock to hide this gap.
- **Positioning**: Positioning might have been the biggest challenge. After this project, I clearly understood how `relative` and `absolute` positionings worked. To put the small circle that I mentioned above at the _exact_ center of the clock, I needed to use `position: absolute;` and `left: calc(50% - half of the width of circle)`. Because the circle had its own width and height and the `left` offsets the _center_ of the element, half of the circle's size needed to be subtracted from `50%`.
- **Rotate**: I also learned that the `rotate` property in CSS starts from the leftmost side of the element.
- **Transform Origin**: By default, an element's `transform-origin`, in other words its rotational point, is at its center. I wanted to rotate the clock hands from their rightmost point so I needed to make `transform-origin: 100%`.
- **Scheduling**: I learned about `setInterval()` which I can use to run a function every "specified amount of time". I also used `setTimeout()` which runs a function once after a specified amount of time.
