(this["webpackJsonpflash-kanji"]=this["webpackJsonpflash-kanji"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(4),c=n.n(i),r=(n(13),n(14),n(5)),h=n(6),l=n(2),o=n(8),j=n(7),d=n(0),u=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).kanjis=[{english:"genki",japanese:"\u5143\u6c17"},{english:"hito",japanese:"\u4eba"},{english:"nihon",japanese:"\u65e5\u672c"},{english:"shiroi",japanese:"\u767d\u3044"},{english:"aka",japanese:"\u8d64"}],a.state={value:"",word:a.kanjis[Math.floor(Math.random()*a.kanjis.length)],check:"",correct:0,incorrect:0},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(l.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.valInput.focus()}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.state.value===this.state.word.english?this.setState({correct:this.state.correct+1}):this.setState({incorrect:this.state.incorrect+1}),this.setState({word:this.kanjis[Math.floor(Math.random()*this.kanjis.length)],value:""}),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:this.state.word.japanese}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)("input",{type:"text",style:{"background-color":"#555555",border:"none",color:"white",padding:"5px","text-align":"center"},ref:function(t){e.valInput=t},value:this.state.value,onChange:this.handleChange}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{style:{color:"green"},children:this.state.correct}),"/",Object(d.jsx)("span",{style:{color:"red"},children:this.state.incorrect})]})]})]})}}]),n}(s.a.Component);var b=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsxs)("div",{class:"topnav",children:[Object(d.jsx)("a",{class:"active",href:"#home",children:"Flash Kanji"}),Object(d.jsx)("a",{href:"#news",children:"Kanji"}),Object(d.jsx)("a",{href:"#contact",children:"Hirigana"}),Object(d.jsx)("a",{href:"#about",children:"Katakana"})]})}),Object(d.jsx)("body",{className:"App-header",children:Object(d.jsx)(u,{})})]})};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3a7f37f8.chunk.js.map