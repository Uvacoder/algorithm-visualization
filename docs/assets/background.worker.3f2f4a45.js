(function(){"use strict";var r=(e=>(e.ADD_UP_TO_LOOP="add-up-to-loop",e.ADD_UP_TO_MATH="add-up-to-math",e.ARRAY_OF_PAIRS="array-of-pairs",e.FACTORIAL="factorial",e))(r||{});function i(e){let a=0;for(let t=0;t<e;t++)a=+t;return a}function c(e){return e*(e+1)/2}function u(e){const a=[];for(let t=0;t<e;t++)for(let n=0;n<e;n++)a.push([t,n]);return a}function o(e){if(e===0)return 1;let a=e;for(let t=0;t<e;t++)a=e*o(t);return a}onmessage=e=>{let a=0,t=0;switch(e.data.activeTitle){case r.ADD_UP_TO_LOOP:a=performance.now(),i(e.data.inputValue),t=performance.now();break;case r.ADD_UP_TO_MATH:a=performance.now(),c(e.data.inputValue),t=performance.now();break;case r.ARRAY_OF_PAIRS:a=performance.now(),u(e.data.inputValue),t=performance.now();break;case r.FACTORIAL:a=performance.now(),o(e.data.inputValue),t=performance.now();break}const n=t-a;postMessage({time:n,title:e.data.activeTitle}),a=0,t=0}})();