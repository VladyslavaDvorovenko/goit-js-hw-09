!function(){var e=document.querySelector(".form"),n=document.querySelector('[name="delay"]'),o=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]');function c(e,n){return new Promise((function(o,t){var c=Math.random()>.3;setTimeout((function(){c?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(r){r.preventDefault();for(var u=Number(n.value),a=Number(o.value),i=Number(t.value),l=1;l<=i;l+=1)c(l,u).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),u+=a;e.reset()}))}();
//# sourceMappingURL=03-promises.85a9f900.js.map