(function(){var t,e,i,n,o,r,s,u,a,c,h,d,m,_,l,f,p,g,b,v,y,I,k,x;v=[],o=[],m=[],_=[],f=0,s=0,l=new Date,a=!1,$(function(){var t,e;for($("#tab-container").easytabs(),this.room_id=$("#data").data("room_id"),this.card_id=$("#data").data("card_id"),this.community_id=$("#data").data("community_id"),this.get_item=$("#data").data("get_item"),t=e=0;e<=24;t=++e)o.push(!1);this.onPageLoad(),this.update_notice=setInterval(function(){return u()},1e3),this.start_check=setInterval(function(){return h(room_id)},5e3),i()?$("#bingo-button").show():$("#bingo-button").hide(),this.get_item&&$("[data-remodal-id=getitem]").remodal().open()}),h=function(){this.check_condition(),1===s&&(m.push("\u30b2\u30fc\u30e0\u304c\u59cb\u307e\u308a\u307e\u3057\u305f"),this.update_numbers=setInterval(function(){return this.numbers_update(),I()},5e3),this.end_check=setInterval(function(){return c()},8e3),clearInterval(this.start_check)),2===s&&(clearInterval(this.start_check),c())},c=function(){this.check_condition(),2===s&&(m.push("\u30b2\u30fc\u30e0\u304c\u7d42\u4e86\u3057\u307e\u3057\u305f\u3002"),u(),clearInterval(this.end_check),clearInterval(this.update_numbers),clearInterval(this.update_notice),n(),y(),this.update_result(),$("#result").show("slow"))},u=function(){var t;0!==m.length&&(t=m.shift(),$("#notice").empty(),$("#notice").text(t),k(),_.push(t))},k=function(){var t,e,i,n;for($("#notice-list").empty(),t=e=0,i=_.length;e<i;t=++e)n=_[t],$("#notice-list").prepend("<p> "+n+" </p>")},d=[],this.update_items=function(){$.get("/API/"+this.community_id+"/"+this.room_id+"/items")},this.update_result=function(){$.get("/API/"+this.community_id+"/"+this.room_id+"/get_items/"+p+"/"+b+"/"+g)},this.update_bingo_card=function(){$.get("/API/"+this.community_id+"/"+this.room_id+"/bingo_card")},this.show_notice_list=function(){$("#notice-list").toggle("slow")},this.numbers_update=function(){$.ajaxSetup({async:!1}),$.getJSON("/API/get_number",{room_id:this.room_id},function(t){v=t})},this.checks_update=function(){$.ajaxSetup({async:!1}),$.getJSON("/API/get_checked_number",{room_id:this.room_id},function(t){var e,i,n,r;for(o=[],i=n=0,r=t.length;n<r;i=++n)e=t[i],o.push("t"===e)})},this.check_condition=function(){$.ajaxSetup({async:!1}),$.getJSON("/API/check_condition",{room_id:this.room_id},function(t){s=t})},I=function(){var t,e,i,n;if(f!==v.length){for(v[v.length-1]!==-1&&m.push("\u65b0\u3057\u3044\u30ca\u30f3\u30d0\u30fc\u306f "+v[v.length-1]+"\u3067\u3059"),f=v.length,$("ul#number-list").empty(),t=e=0,i=v.length;e<i;t=++e)n=v[t],n!==-1&&$("ul#number-list").prepend("<li> "+n+" </li>");$("#last-number").empty(),v[f-1]!==-1&&$("#last-number").text(v[f-1]),l=new Date}},this.check_number=function(t){e(),console.log("riichi_num :"+b),$.ajaxSetup({async:!1}),$.getJSON("/API/check_number",{room_id:this.room_id,card_id:this.card_id,index:t,riichi_lines:b},function(e){return o[t]="t"===e[t]})},this.number_click=function(t,e){var n;if(!o[e])return jQuery.inArray(Number($(t).data("number")),v)>=0?(this.check_number(e),$(t).toggleClass("checked",o[e]),void(i()?$("#bingo-button").show():$("#bingo-button").hide())):void(n&&(n=!1,use_item_select_number(x,$(t).data("number"))))},this.onPageLoad=function(){var t;t=$("#data").data("room_id"),this.numbers_update(),this.checks_update(),I(),this.update_items()},this.display_past_number=function(){$("#number-list-wrapper").toggle("slow")},this.bingo=function(){var t;t=new Date,i&&!a&&$.post("/API/done_bingo",{card_id:this.card_id,room_id:this.room_id,times:v.length,seconds:t-l},function(t){a=t,a&&$("#bingo-button").hide()})},this.use_item=function(t,e){var i,n,o,r;r=this.room_id,i=this.community_id,$.ajaxSetup({async:!1}),$.getJSON("/API/use_item",{community_id:this.community_id,room_id:this.room_id,item_id:t},function(t){m.push(t),e&&$.get("/API/"+i+"/"+r+"/bingo_card")}),o=$(".quantity-"+t),n=parseInt(o.text())-1,n<=0&&$(".item-rows-"+t).hide(),o.text(n),$(".q-"+t).text(n)},this.use_item_select_number=function(t,e){var i,n,o;$.ajaxSetup({async:!1}),o="",$.getJSON("/API/use_item",{community_id:this.community_id,room_id:this.room_id,item_id:t,number:e},function(t){m.push(t),o=t}),n=$(".quantity-"+t),i=parseInt(n.text())-1,i<=0&&$(".item-rows-"+t).hide(),n.text(i),$(".q-"+t).text(i)},r=!1,x=0,this.select_number=function(t){r=!0,x=t,m.push("\u30a2\u30a4\u30c6\u30e0\u3092\u4f7f\u3046\u6570\u5b57\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044")},this.show_select_window=function(t){var e;e=$.remodal.lookup[$("[data-remodal-id=modal-select"+t+"]").data("remodal")],e.open(),$("#select-notice").text(""),$("#select-notice").text("\u30a2\u30a4\u30c6\u30e0\u3092\u4f7f\u3046\u6570\u5b57\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044")},n=function(){$.ajaxSetup({async:!1}),$.getJSON("/API/check_rank",{room_id:this.room_id},function(t){var e;e=t,0!==e&&($("#rank-number").text(e),$("#ranking").show())})},i=function(){var t,e,i;for(t=e=0;e<=4;t=++e)if(o[5*t+0]&&o[5*t+1]&&o[5*t+2]&&o[5*t+3]&&o[5*t+4])return!0;for(t=i=0;i<=4;t=++i)if(o[t+0]&&o[t+5]&&o[t+10]&&o[t+15]&&o[t+20])return!0;return!!(o[0]&&o[6]&&o[12]&&o[18]&&o[24])||!!(o[4]&&o[8]&&o[12]&&o[16]&&o[20])},p=0,b=0,g=0,t=function(){var t,e,i,n,r,s,u,a,c;for(e=[],p=0,b=0,g=0,n=0,u=o.length;n<u;n++)t=o[n],t===!0?(e.push(1),g++):e.push(0);for(i=r=0;r<=4;i=++r)e[5*i+0]+e[5*i+1]+e[5*i+2]+e[5*i+3]+e[5*i+4]===5&&p++;for(i=s=0;s<=4;i=++s)e[i+0]+e[i+5]+e[i+10]+e[i+15]+e[i+20]===5&&p++;for(e[0]+e[6]+e[12]+e[18]+e[24]===5&&p++,e[4]+e[8]+e[12]+e[16]+e[20]===5&&p++,i=a=0;a<=4;i=++a)e[5*i+0]+e[5*i+1]+e[5*i+2]+e[5*i+3]+e[5*i+4]===4&&b++;for(i=c=0;c<=4;i=++c)e[i+0]+e[i+5]+e[i+10]+e[i+15]+e[i+20]===4&&b++;e[0]+e[6]+e[12]+e[18]+e[24]===4&&b++,e[4]+e[8]+e[12]+e[16]+e[20]===4&&b++},e=function(){var t,e,i,n,r,s,u;for(e=[],b=0,n=0,u=o.length;n<u;n++)t=o[n],t===!0?e.push(1):e.push(0);for(i=r=0;r<=4;i=++r)e[5*i+0]+e[5*i+1]+e[5*i+2]+e[5*i+3]+e[5*i+4]===4&&b++;for(i=s=0;s<=4;i=++s)e[i+0]+e[i+5]+e[i+10]+e[i+15]+e[i+20]===4&&b++;e[0]+e[6]+e[12]+e[18]+e[24]===4&&b++,e[4]+e[8]+e[12]+e[16]+e[20]===4&&b++},y=function(){t(),$("#number-of-bingo").text(p),$("#number-of-one-left-line").text(b),$("#number-of-hole").text(g)}}).call(this);