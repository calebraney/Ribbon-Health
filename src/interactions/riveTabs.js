import { attr, checkBreakpoints, runSplit, ClassWatcher } from '../utilities';
import * as rive from '@rive-app/canvas';

export const riveTabs = function () {
  //animation ID
  const ANIMATION_ID = 'cr-tabs';
  //elements
  const WRAP = '[cr-rive-tabs="wrap"]';
  const RIVE_SELECTOR = '[cr-rive-tabs="rive"]';
  //webflow classes
  const TAB_LINK = '.w-tab-link';
  const TAB_ITEM = '.w-tab-pane';
  const ITEM_ACTIVE_CLASS = 'w--tab-active';
  //webflow rive data attributes
  const RIVE_URL = 'data-rive-url';
  const RIVE_ARTBOARD = 'data-rive-artboard';
  const RIVE_STATE_MACHINE = 'data-rive-state-machine';
  //const RIVE NAMES
  const STATE_MACHINE_NAME = 'State Machine 1';
  // Rive input names
  const INPUT_BOOLEAN = 'active';
  const INPUT_TRIGGER = 'trigger';
  const INPUT_NUMBER = 'number';

  //options
  //select all the wrap elements
  const wraps = [...document.querySelectorAll(WRAP)];
  if (wraps.length === 0) return;
  //for each tabs elements
  wraps.forEach((wrap) => {
    const items = [...wrap.querySelectorAll(TAB_ITEM)];
    const links = [...wrap.querySelectorAll(TAB_LINK)];
    if (items.length === 0) return;
    //listen for click event
    items.forEach((item, index) => {
      //handle rive for each item

      const riveEl = item.querySelector(RIVE_SELECTOR);
      if (!riveEl) return;
      //get rive attributes
      const riveURL = riveEl.getAttribute(RIVE_URL);
      const riveArtboard = riveEl.getAttribute(RIVE_ARTBOARD);
      const riveStateMachine = riveEl.getAttribute(RIVE_STATE_MACHINE);
      const riveCanvas = riveEl.firstChild;
      console.log(riveCanvas);

      //Getting console error
      const riveInstance = new rive.Rive({
        src: riveURL,
        canvas: riveCanvas,
        autoplay: true,
        artboard: riveArtboard,
        stateMachines: riveStateMachine,
        onLoad: () => {
          riveInstance.resizeDrawingSurfaceToCanvas();
          const input = useStateMachineInput(riveInstance, riveStateMachine, INPUT_BOOLEAN);
        },
      });

      //   console.log(riveInstance);

      //   const inputs = riveInstance.stateMachineInputs('state-machine-1');

      function useStateMachineInput(riveInstance, stateMachineName, inputName, initialValue) {
        const inputs = riveInstance
          .stateMachineInputs(stateMachineName)
          .find((input) => input.name === inputName);
        if (input) {
          input.value = initialValue;
        }
        return input;
      }

      //   useStateMachineInput(riveInstance, riveStateMachine, INPUT_BOOLEAN, false);

      //set to visible state

      //function to run when active class is added to the item
      function tabActivated() {}
      //function to run when active class is removed from the item

      function tabDeactivated() {
        // console.log('inactive');
      }

      // listen for class changes and run callbacks
      let classWatcher = new ClassWatcher(item, ITEM_ACTIVE_CLASS, tabActivated, tabDeactivated);
    });
  });
};

///////////////

// const riveInstances = [];

// function createRiveInstance(config) {
//   const { canvasId, artboard, stateMachine, triggerId } = config;
//   const canvas = document.getElementById(canvasId);

//   const riveInstance = new rive.Rive({
//     src: 'https://uploads-ssl.webflow.com/668ac02aa7e3b4c7cab68183/668cfe2c716537795fbcdd63_airplane-2.riv.txt',
//     canvas: canvas,
//     autoplay: false,
//     artboard: artboard,
//     stateMachines: [stateMachine],
//     onLoad: () => {
//       riveInstance.resizeDrawingSurfaceToCanvas();
//     },
//   });

//   riveInstances.push(riveInstance);
// }

// function useStateMachineInput(riveInstance, stateMachineName, inputName, initialValue) {
//   const input = riveInstance
//     .stateMachineInputs(stateMachineName)
//     .find((input) => input.name === inputName);
//   if (input) {
//     input.value = initialValue;
//   }
//   return input;
// }

// function setupScrollTrigger(riveInstance, stateMachineName, triggerId) {
//   const progressInput = useStateMachineInput(riveInstance, stateMachineName, 'progress', 0);
//   gsap.registerPlugin(ScrollTrigger);

//   const animationTimeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: `#${triggerId}`,
//       start: 'top center',
//       end: 'bottom center',
//       scrub: 0.5, // Adjust scrub value as needed
//     },
//   });

//   animationTimeline.to(progressInput, {
//     value: 100,
//     onUpdate: () => {
//       riveInstance.play();
//     },
//     onStart: () => {
//       riveInstance.play();
//     },
//     onComplete: () => {
//       riveInstance.pause();
//     },
//   });
// }

// function initializeAnimations(configs) {
//   configs.forEach((config) => {
//     createRiveInstance(config);
//   });
// }

// const animationConfigs = [
//   {
//     canvasId: 'airplane-1',
//     artboard: 'production-1',
//     stateMachine: 'State Machine 1',
//     triggerId: 'airplane-1',
//   },
//   {
//     canvasId: 'airplane-2',
//     artboard: 'production-2',
//     stateMachine: 'State Machine 1',
//     triggerId: 'airplane-2',
//   }, // New instance
// ];

// initializeAnimations(animationConfigs);
