var gradientify=function(){var e={},t=3e3,n=[],a=[],i=document.body,r=0;function s(e){n.map((t,n)=>{let s=function(e){let t=document.createElement("div");return Object.assign(t.style,{backgroundImage:e.backgroundImage,opacity:e.index===r?1:0,transitionDuration:`${e.transitionDuration/1e3}s`}),t.classList.add("gradientify-gradient"),t}({backgroundImage:t,index:n,transitionDuration:e.interval});a.push(s),i.append(s)})}function l(e){o(),t=setInterval(()=>{o()},e.interval+40)}function o(){a.map((e,t)=>{e.style.opacity=t===r?1:0}),r=++r%a.length}return e.presets=[],e.init=function(e){i=e.element,n=e.gradients,s({interval:e.interval}),clearInterval(t),l({interval:e.interval})},e.loadPreset=function(a){i=a.element,n=e.presets[a.hash].gradients,s({interval:e.presets[a.hash].interval}),clearInterval(t),l({interval:e.presets[a.hash].interval})},e}();