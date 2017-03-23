'use strict';

customElements.define('geo-logo', class extends HTMLElement {
 constructor(a) {
   super();
   let shadowRoot = this.attachShadow({mode: 'open'});
   let _document = document.currentScript ? document.currentScript.ownerDocument : document;
   const t = _document.querySelector('#geo-logo-template');
   const instance = t.content.cloneNode(true);
   shadowRoot.appendChild(instance);
 }

 static get observedAttributes() {
   return ['move','width', 'height','interval', 'duration'];
 }

 attributeChangedCallback(name, oldValue, newValue) {
   if(name=='move'){
     this._animated(1500);

   }else if(name=='width'){
     this.shadowRoot.querySelector('svg').setAttribute('width',newValue);

   }else if(name=='height'){
     this.shadowRoot.querySelector('svg').setAttribute('height',newValue);

   }else if(name=='interval' && this._interval){
    clearInterval(this._interval);
    this._animated(newValue);

   }else if(name=='duration'){
     let animate = this.shadowRoot.querySelectorAll('animateTransform');
     for(var a of animate){
       a.setAttribute('dur',parseFloat(newValue));
     }
   }

 }

 _animated(interval){
   let positions = [
     {
       G:{x:-16,y:-16},
       E:{x:0,y:-16},
       O:{x:16,y:0},
       G_2:{x:0,y:0},
       R:{x:16,y:0},
       A:{x:16,y:0},
       P:{x:-16,y:0},
       H:{x:0,y:0},
       I:{x:16,y:16},
       C:{x:0,y:16},
       A_2:{x:16,y:16},
       point:{x:16,y:16}
     },
     {
       G:{x:-16,y:-16},
       E:{x:-16,y:-16},
       O:{x:0,y:-16},
       G_2:{x:-16,y:-16},
       R:{x:0,y:-16},
       A:{x:16,y:-16},
       P:{x:-16,y:-16},
       H:{x:-16,y:-16},
       I:{x:-16,y:-16},
       C:{x:0,y:-16},
       A_2:{x:16,y:-16},
       point:{x:16,y:0}
     },
     {
       G:{x:-16,y:-16},
       E:{x:0,y:0},
       O:{x:16,y:0},
       G_2:{x:0,y:0},
       R:{x:0,y:0},
       A:{x:0,y:0},
       P:{x:-16,y:0},
       H:{x:0,y:16},
       I:{x:16,y:16},
       C:{x:16,y:16},
       A_2:{x:16,y:16},
       point:{x:16,y:16}
     },
     {
       G:{x:0,y:0},
       E:{x:0,y:0},
       O:{x:0,y:0},
       G_2:{x:0,y:0},
       R:{x:0,y:0},
       A:{x:0,y:0},
       P:{x:0,y:0},
       H:{x:0,y:0},
       I:{x:0,y:0},
       C:{x:0,y:0},
       A_2:{x:0,y:0},
       point:{x:0,y:0}
     },
   ]
   var letters = this.shadowRoot.querySelectorAll('[letter]'),
     current = 0;

   this._interval = setInterval(function(){
     for(var i=0; i<letters.length; i++){
       var animate = letters[i].querySelector('animateTransform');
       animate.setAttribute('from',animate.getAttribute('to'));
       animate.setAttribute('to',positions[current][letters[i].getAttribute('letter')].x + ' ' + positions[current][letters[i].getAttribute('letter')].y);
       animate.beginElement();
     }
     current = current == (positions.length - 1) ? 0:(current + 1);
   }, interval);
 }
});
