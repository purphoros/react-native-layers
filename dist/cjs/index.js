"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-native");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};function a(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var u=function(e){return e.filter((function(e){return!!e.status})).sort((function(e,t){return e.updatedOn>t.updatedOn?1:e===t?0:-1}))},l=function(e,t){return(null==t?void 0:t.length)!==(null==e?void 0:e.length)?t:e},i=function(r){var a=r.layers,i=r.closeLayerByUuid,s=e.useReducer(l,u(a)),f=s[0],d=void 0===f?[]:f,p=s[1];e.useEffect((function(){p(u(a))}),[a]);var y={modal:{alignItems:"center",justifyContent:"center"},default:{},bottom:{justifyContent:"flex-end"}};return n.default.createElement(n.default.Fragment,null,d.map((function(r){var a=r.layerUuid,u=r.component,l=r.orientation,s=void 0===l?"modal":l,f=s&&y[s]?y[s]:y.default;return n.default.createElement(t.View,{key:a,style:o(o({},f),c.container)},n.default.createElement(t.Pressable,{style:c.closable,onPress:function(){return a&&i(a)}}),e.cloneElement(u,o(o(o({},u.props),{style:o(o({},u.props.style),c.component)}),r)))})))},c=t.StyleSheet.create({container:{display:"flex",flexDirection:"column",position:"absolute",top:0,right:0,bottom:0,left:0,overflow:"scroll",backgroundColor:"transparent"},closable:{position:"absolute",top:0,right:0,bottom:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)"},component:{backgroundColor:"#FF0000",position:"relative"}}),s=e.createContext({layers:[]});exports.LayersProvider=function(t){var r=t.children,o=e.useRef([]),u=e.useState([]),l=u[0],c=u[1],f=e.useCallback((function(e){return void 0===e&&(e=""),c(l.filter((function(t){return t.layerUuid!==e})))}),[l]),d=e.useCallback((function(e){return c(l.filter((function(t){return t.name!==e})))}),[l]),p=e.useCallback((function(){return c([])}),[]),y=e.useCallback((function(t,r){var n,u,l=t.component,i=t.name,s=t.orientation,f=void 0===s?"full":s,d=(n=(new Date).getTime(),u="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0,"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random();return n>0?(t=(n+t)%16|0,n=Math.floor(n/16)):(t=(u+t)%16|0,u=Math.floor(u/16)),("x"===e?t:3&t|8).toString(16)}))),p={name:i,layerUuid:d,orientation:f,status:1,updatedOn:Date.now(),component:e.isValidElement(l)&&e.cloneElement(l,{layerUuid:d})};c((function(e){return a(a([],e,!0),[p],!1)})),r&&o.current.push(r)}),[]);e.useEffect((function(){o.current.forEach((function(e){return e()})),o.current=[]}),[l]);var x=e.useMemo((function(){return{layers:l,createLayer:y,closeLayerByUuid:f,closeLayerByName:d,closeAllLayers:p}}),[l,y,f,d,p]),m=l.sort((function(e,t){return e.updatedOn<t.updatedOn?-1:e===t?0:1})).filter((function(e){return!!e.status}));return n.default.createElement(s.Provider,{value:x},r,!!(null==m?void 0:m.length)&&n.default.createElement(i,{layers:m,closeLayerByUuid:f}))},exports.useLayer=function(){var t=e.useContext(s);if(void 0===t)throw new Error("useLayer was used outside of its Provider");return t};
//# sourceMappingURL=index.js.map
