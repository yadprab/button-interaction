[Live site](https://button-interaction.vercel.app/)

[Repo](https://github.com/yadprab/button-interaction)


When I noticed this UI button interaction, I was like 

![interaction example plus reaction gif](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ducjdjxx9ea7wgolnpfp.gif)

- set up a react project

```
npx create-react-app
```

- Add framer-motion

 ```
 npm install framer-motion  
 ```
Now everything is ready.


This is how we're going to achieve this effect...!

![Project structure](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yxy3u9o8ukbsat2ty4lb.png)

HTML STRUCTURE

Create the main component, and add the button wrapper and button elements.

![HTML STRUCTURE](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wwdgalnldbpo4tv6cyk9.png)

![main component](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hhfq3xufilnzb62sk1wk.png)

Now add the main component and styles to our App component.

![App component](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7nsci5umsqnkzzidawlc.png)


Add some default styles to our Project

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');


:root {
    --bg: hsla(330, 6%, 12%, 1);
    --button: hsla(160, 27%, 98%, 1);
    --buttonText: hsla(330, 8%, 20%, 1);
    --notSelected: hsla(330, 6%, 46%, 1);




}

html {

    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    min-width: 100%;
    overflow-x: hidden;
    font-size: 100%;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;



}

*::after,
*::before {
    box-sizing: border-box;
}

img {
    max-width: 100%;
    display: block;
    overflow: hidden;
}

a {
    text-decoration: none;
}

svg {
    width: 24px;
    height: 24px;
    pointer-events: none;
}

body {
    background-color: var(--bg);

    font-family: 'Inter',
        sans-serif;
    font-weight: 400;
    line-height: 1.75;
    position: relative;
    transition: background 0.4s ease-in-out;
}

```



## Fun part
![this is where fun beigns gif](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ntbxhkuqn7qliinrqsu6.gif)





## Create a Separate component for our animation(span element)

![Animation component](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/70oibo7e4i4nsxfle2a5.png)


Now import motion from framer motion add it to our span element and add a **layoutId button(will explain about this later**).

![added motion](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rkprzm7fip57dngufkot.png)


## Setting up a state using useState hook 
![state](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/alo85wruzwgbf6zc9fqd.png)

Now add motion to our both buttons and wrap both buttons by **Animateshared layout** from framer motion.

1. Based on the state,  we're going to add a class to our button element active and non-active class.

2. Based on the state, we're going to render the Anicomp.

3. Now add the Onclick event to both buttons and set the button state regarding each button.

![based on state we add calss and render component](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ep44cadcyghnrcv8qb6j.png)![based on state we add calss and render component](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qcdptiiqahlqa66pbese.png)


## Button styles

```css
 button {
            appearance: none;
            border: none;
            background-color: unset;
            font-size: 1rem;
            letter-spacing: 4px;
            padding: 1.125em 1.5em;
            position: relative;
            border-radius: 50px;
            cursor: pointer;
  }


//  active and non active classes
        .active {
            color: var(--buttonText);
        }

        .notActive {
            color: var(--notSelected);
        }

 //span element styles
    .button--bg {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        right: 0;
        background: var(--button);
        display: block;
        width: 100%;
        height: 100%;
        z-index: -1;
        border-radius: 50px;
    }

```

##Final Output
![Animation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hnntf22q1bfzd8h964y0.gif)


## AnimateShared Layout
Animateshared layout changes across, and between, multiple components. with help of the same layout id,  framer motion shares the transition across the components.

More about AnimateShared layout and Layout animations using framer motion.

[Layout animations indepth](https://youtu.be/5-JIu0u42Jc)

[AnimateShared Layout indepth](https://www.framer.com/docs/animate-shared-layout/)




 












