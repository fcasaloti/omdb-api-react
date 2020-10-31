(this["webpackJsonpomdb-api"]=this["webpackJsonpomdb-api"]||[]).push([[0],{31:function(e,t,a){e.exports=a(59)},36:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(27),o=a.n(l),s=(a(36),a(10)),m=a(11),c=a(8),r=a(13),u=a(12),h=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"moviesList",value:function(){var e=this;return this.props.movies.map((function(t,a){return i.a.createElement("tr",{key:a},i.a.createElement("td",null,"\u2022 ",t.title," (",t.year,")"),i.a.createElement("td",null,i.a.createElement("button",{onClick:function(){e.props.onClick(a)},disabled:t.nominate},"Nominee")))}))}},{key:"render",value:function(){return this.moviesList()}}]),a}(i.a.Component);var v=function(e){return e.nominations.map((function(t,a){return a>0?i.a.createElement("tr",{key:a},i.a.createElement("td",null,"\u2022 ",t.title," ",t.year),i.a.createElement("td",null,i.a.createElement("button",{onClick:function(){e.onClick(a)}},"Remove"))):null}))},d=a(28),b=a.n(d),p=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={movie:"",movies:[],nominations:[{title:"",year:"",imdbID:""}]},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.getData=n.getData.bind(Object(c.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.loadLocalData()}},{key:"loadLocalData",value:function(){var e=localStorage.getItem("nominations"),t=JSON.parse(e);null!==t&&this.setState({nominations:t})}},{key:"handleChange",value:function(e){this.setState({movie:e.target.value})}},{key:"handleSubmit",value:function(e){this.getData(),e.preventDefault()}},{key:"getData",value:function(){var e=this;b.a.get("https://www.omdbapi.com/?apikey=ae471440&s="+this.state.movie).then((function(t){e.newState(t.data.Search)})).catch((function(e){console.log(e)}))}},{key:"newState",value:function(e){var t=e.map((function(e){return{title:e.Title,year:e.Year,imdbID:e.imdbID,nominate:!1}}));this.setState({movies:t.slice(1)})}},{key:"handleAdd",value:function(e){var t=this.state.nominations.slice(),a=this.state.movies.slice();t.length<=5?(a[e]={title:this.state.movies[e].title,year:this.state.movies[e].year,imdbID:this.state.movies[e].imdbID,nominate:!0},t.push({title:this.state.movies[e].title,year:this.state.movies[e].year,imdbID:this.state.movies[e].imdbID}),this.setState({movies:a,nominations:t}),localStorage.setItem("nominations",JSON.stringify(t))):alert("Maximum nominations is 5")}},{key:"handleDelete",value:function(e){for(var t=this.state.nominations,a=t.filter((function(t,a){return a!==e})),n=this.state.movies.slice(),i=0;i<n.length;i++)t[e].imdbID===n[i].imdbID&&(n[i].nominate=!1);localStorage.setItem("nominations",JSON.stringify(a)),this.setState({movies:n,nominations:a})}},{key:"render",value:function(){var e=this,t=this.state.movies.slice(),a=this.state.movie?'"'.concat(this.state.movie,'"'):null;return i.a.createElement("div",{className:"container m-4"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col m-2"},i.a.createElement("h3",null,"The Shoppies"))),i.a.createElement("div",{className:"input-box bg-white m-2 p-4"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col"},i.a.createElement("h6",null,"Movie Title"))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{className:"col",type:"text",value:this.state.movie,onChange:this.handleChange}))))),i.a.createElement("div",{className:"row m-2"},i.a.createElement("div",{className:"col mr-2 p-3 min-vh-100 bg-white"},i.a.createElement("h6",null,"Results for ",a),i.a.createElement("table",{className:"table table-hover"},i.a.createElement("tbody",null,i.a.createElement(h,{movies:t,onClick:function(t){e.handleAdd(t)}})))),i.a.createElement("div",{className:"col ml-2 p-3 min-vh-100 bg-white"},i.a.createElement("h6",null,"Nominations"),i.a.createElement("table",{className:"table table-hover"},i.a.createElement("tbody",null,i.a.createElement(v,{nominations:this.state.nominations,onClick:function(t){e.handleDelete(t)}}))))))}}]),a}(i.a.Component),f=a(29),E=a(1);o.a.render(i.a.createElement(f.a,{basename:"/omdb-api-react"},i.a.createElement(E.a,{path:"/",exact:!0,component:p})),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.a11003e5.chunk.js.map