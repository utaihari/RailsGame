(function(){var t;t=[],this.add_number=function(t,n){$.post("/API/add_number",{room_id:t,number:n},function(){})},this.random_number_add=function(t){var n;this.rate_update(t),n=this.get_random_number(),this.add_number(t,n),$("#number-display").text(n)},this.rate_update=function(n){$.ajaxSetup({async:!1}),$.getJSON("/API/get_number_rate",{room_id:n},function(n){t=n})},this.get_random_number=function(){var n,r,e,a,u,o,i,d;for(o=[],r=e=0,u=t.length;e<u;r=++e)for(i=t[r],n=a=0,d=i;0<=d?a<d:a>d;n=0<=d?++a:--a)o.push(r+1);return 0===o.length?void $("#number-display").text("\u5168\u3066\u306e\u6570\u5b57\u304c\u51fa\u529b\u3055\u308c\u307e\u3057\u305f"):o[Math.floor(Math.random()*o.length)]}}).call(this);