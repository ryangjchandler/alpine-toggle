const e={start(){if(!window.Alpine)throw new Error("Alpine is required for `alpine-toggle` to work.");Alpine.addMagicProperty("toggle",e=>function(o){let i=e.__x.$data;o.split(".").reduce((e,o)=>{e[o]&&"object"!=typeof e[o]&&(e[o]=!e[o])},i)})}},o=window.deferLoadingAlpine||(e=>e());window.deferLoadingAlpine=function(i){e.start(),o(i)},module.exports=e;
//# sourceMappingURL=alpine-toggle.js.map
