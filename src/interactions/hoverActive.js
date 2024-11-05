import { attr, checkBreakpoints } from '../utilities';

export const hoverActive = function () {
  //animation ID
  const ANIMATION_ID = 'hoveractive';
  //elements
  const WRAP = '[cr-hoveractive="wrap"]';
  const ITEM = '[cr-hoveractive="item"]';
  //options
  const OPTION_ACTIVE_CLASS = 'cr-hoveractive-class';
  const OPTION_KEEP_ACTIVE = 'cr-hoveractive-keep-active';
  const ACTIVE_CLASS = 'is-active';

  //select all the wrap elements
  const wraps = gsap.utils.toArray(WRAP);

  const activateOnHover = function (parent) {
    const children = parent.querySelectorAll(ITEM);

    let activeClass = attr(ACTIVE_CLASS, parent.getAttribute(OPTION_ACTIVE_CLASS));
    let keepActive = attr(false, parent.getAttribute(OPTION_KEEP_ACTIVE));

    //on each child
    console.log('enter');
    children.forEach((currentItem) => {
      //when hovered in
      currentItem.addEventListener('mouseover', function (e) {
        //go through each child and activate the current item

        children.forEach((child) => {
          if (child === currentItem) {
            child.classList.add(activeClass);
          } else {
            child.classList.remove(activeClass);
          }
        });
      });
      currentItem.addEventListener('mouseleave', function (e) {
        //only remove the active class if keep active is false, otherwise active class will get removed when another item is hovered in
        if (!keepActive) {
          currentItem.classList.remove(activeClass);
        }
      });
    });
  };

  //if wraps exist run on each wrap, otherwise run on the body
  if (wraps.length >= 0) {
    wraps.forEach((wrap) => {
      activateOnHover(wrap);
    });
  } else {
    const body = document.querySelector(body);
    activateOnHover(body);
  }
};
