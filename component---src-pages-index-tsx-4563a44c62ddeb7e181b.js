(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0AQl":function(e,t,a){e.exports={PostListContainer:"PostList-module--PostListContainer--2i8y8",Post:"PostList-module--Post--gTwXf",PostTitle:"PostList-module--PostTitle--2gTrI",PostDate:"PostList-module--PostDate--2RWjX"}},QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return L}));a("a1Th"),a("Btvt"),a("I5cv");var r=a("q1tI"),n=a.n(r),o=a("soUV"),i=a("e+cp"),l=a("7vrA"),c=a("wx14"),s=a("zLVn"),m=a("TSYQ"),u=a.n(m),d=a("vUet"),p=a("YdCC"),f=function(e){return n.a.forwardRef((function(t,a){return n.a.createElement("div",Object(c.a)({},t,{ref:a,className:u()(t.className,e)}))}))},b=a("Wzyw"),v=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.variant,i=e.as,l=void 0===i?"img":i,m=Object(s.a)(e,["bsPrefix","className","variant","as"]),p=Object(d.a)(a,"card-img");return n.a.createElement(l,Object(c.a)({ref:t,className:u()(o?p+"-"+o:p,r)},m))}));v.displayName="CardImg",v.defaultProps={variant:null};var P=v,y=f("h5"),E=f("h6"),g=Object(p.a)("card-body"),h=n.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.bg,l=e.text,m=e.border,p=e.body,f=e.children,v=e.as,P=void 0===v?"div":v,y=Object(s.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(d.a)(a,"card"),h=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return n.a.createElement(b.a.Provider,{value:h},n.a.createElement(P,Object(c.a)({ref:t},y,{className:u()(o,E,i&&"bg-"+i,l&&"text-"+l,m&&"border-"+m)}),p?n.a.createElement(g,null,f):f))}));h.displayName="Card",h.defaultProps={body:!1},h.Img=P,h.Title=Object(p.a)("card-title",{Component:y}),h.Subtitle=Object(p.a)("card-subtitle",{Component:E}),h.Body=g,h.Link=Object(p.a)("card-link",{Component:"a"}),h.Text=Object(p.a)("card-text",{Component:"p"}),h.Header=Object(p.a)("card-header"),h.Footer=Object(p.a)("card-footer"),h.ImgOverlay=Object(p.a)("card-img-overlay");var k=h,j=a("+ZDr"),C=a.n(j);a("lw3w"),a("emEt").default.enqueue,n.a.createContext({});var O=a("0AQl"),w=a.n(O);var x=function(e){var t,a;a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r;r=o;function o(){return e.apply(this,arguments)||this}return o.prototype.render=function(){return n.a.createElement(l.a,{className:w.a.PostListContainer},this.props.data.allMarkdownRemark.edges.map((function(e,t){return n.a.createElement(C.a,{key:t,to:e.node.fields.slug},n.a.createElement(k,{className:w.a.Post},n.a.createElement(k.Header,null,e.node.frontmatter.language),n.a.createElement(k.Body,null,n.a.createElement(k.Title,null,e.node.frontmatter.title),n.a.createElement(k.Text,null,e.node.frontmatter.date),e.node.frontmatter.tag)))})))},o}(n.a.Component);var I=function(e){var t,a;a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n;n=l;function l(){return e.apply(this,arguments)||this}return l.prototype.render=function(){return r.createElement(o.a,null,r.createElement(i.a,null),r.createElement(x,this.props))},l}(r.Component),L=(t.default=I,"608157560")},"e+cp":function(e,t,a){"use strict";a("a1Th"),a("Btvt"),a("I5cv"),a("tUrg");var r=a("q1tI"),n=a("IdFE"),o=a("7vrA"),i=a("3Z9Z"),l=a("JI6e"),c=a("oJEe"),s=a.n(c);var m=function(e){var t,a;a=e,(t=m).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c;c=m;function m(){for(var t,a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).links=[{name:"Instagram",link:"https://instagram.com",icon:r.createElement(n.c,{size:"1.5rem"})},{name:"LinkedIn",link:"https://linkedin.com",icon:r.createElement(n.d,{size:"1.5rem"})},{name:"Github",link:"https://github.com/kimjjiro",icon:r.createElement(n.b,{size:"1.5rem"})}],t}return m.prototype.render=function(){return r.createElement(o.a,{className:s.a.MiniProfileContainer},r.createElement(i.a,null,r.createElement(l.a,{className:s.a.MiniProfileImageContainer,style:{background:"black",width:"200px",height:"200px",display:"flex"}}),r.createElement(l.a,{className:s.a.MiniProfileDescContainer},r.createElement("div",null,r.createElement("h2",null,"Hi"),r.createElement("p",null,"I'm Jiiro")),r.createElement("ul",{className:s.a.Links},this.links.map((function(e,t){return r.createElement("li",{key:t,className:s.a.Link},r.createElement("a",{href:e.link},e.icon))}))))))},m}(r.Component);t.a=m},lw3w:function(e,t,a){var r;e.exports=(r=a("rzlk"))&&r.default||r},oJEe:function(e,t,a){e.exports={MiniProfileContainer:"MiniProfile-module--MiniProfileContainer--3JQIZ",MiniProfileImageContainer:"MiniProfile-module--MiniProfileImageContainer--1TJSZ",MiniProfileDescContainer:"MiniProfile-module--MiniProfileDescContainer--u-f5Z",Links:"MiniProfile-module--Links--kURGG",Link:"MiniProfile-module--Link--1t_6_"}},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),n=a.n(r),o=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4563a44c62ddeb7e181b.js.map