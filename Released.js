//Script by Aneesh 
//Released on 2108
//Bubble tips added
var relatedTitles=new Array();
var relatedTitlesNum=0;
var relatedUrls=new Array();
var thumburl=new Array();
function related_results_labels_thumbs(e){for(var i=0;i<e.feed.entry.length;i++)
{var f=e.feed.entry[i];relatedTitles[relatedTitlesNum]=f.title.$t;
 try{thumburl[relatedTitlesNum]=f.media$thumbnail.url}catch(error){s=f.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);
c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);
if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))
{thumburl[relatedTitlesNum]=d}else{if(typeof(defaultnoimage)!=='undefined')thumburl[relatedTitlesNum]=defaultnoimage;
else thumburl[relatedTitlesNum]="http://4.bp.blogspot.com/-WQzi5hugHT8/TsEgEpZVEbI/AAAAAAAAAHs/Vq8oZLnRTVw/s1600/noimage.jpg"}}
 if(relatedTitles[relatedTitlesNum].length>35)relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"...";
 for(var k=0;k<f.link.length;k++){if(f.link[k].rel=='alternate')
 {relatedUrls[relatedTitlesNum]=f.link[k].href;relatedTitlesNum++}}}}
function removeRelatedDuplicates_thumbs(){
  var a=new Array(0);
  var b=new Array(0);
  var c=new Array(0);
  for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(a,relatedUrls[i])){a.length+=1;a[a.length-1]=relatedUrls[i];b.length+=1;
c.length+=1;b[b.length-1]=relatedTitles[i];c[c.length-1]=thumburl[i]}}relatedTitles=b;
  relatedUrls=a;thumburl=c}function contains_thumbs(a,e){for(var j=0;j<a.length;j++)if(a[j]==e)return true;
return false}function printRelatedLabels_thumbs(a){var b;if(typeof(splittercolor)!=='undefined')b=splittercolor;
else b="#d4eaf2";for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==a)||(!relatedTitles[i])){relatedUrls.splice(i,1);
relatedTitles.splice(i,1);thumburl.splice(i,1);i--}}
var r=Math.floor((relatedTitles.length-1)*Math.random());
var i=0;if(relatedTitles.length>0)document.write('<h2>'+relatedpoststitle+'</h2>
<div id="calcList"><span style="font-size:9px;float:right;font-family:arial;margin:-15px 33px 0 0">
<a title="مواضيع ذات صلة" href="http://roveregy.blogspot.com" target="_blank">
<font color="#ff5f00">By Rover Egy</font></a></span><nobr/>');
document.write('<div style="clear: both;"/>');
while(i<relatedTitles.length&&i<20&&i<maxresults){document.write('<a style="text-decoration:none;padding:5px;float:left;');
if(i!=0)document.write('border-left:solid 0.5px '+b+';"');
else document.write('"');document.write(' href="'+relatedUrls[r]+'" title="'+relatedTitles[r]+'">
<img style="width:100px;height:100px;border:0px;" src="'+thumburl[r]+'"/><br/>
<div style="max-width:95px;padding-left:3px;
overflow:hidden;max-height:20px;
border: 0pt none ; margin: 3px 0pt 5px 0; padding: 0pt; 
font-style: normal; font-variant: normal; font-weight: normal; 
font-size: 11px; line-height: normal; font-size-adjust: none; 
font-stretch: normal;">'+relatedTitles[r]+' ...</div></a>');
i++;if(r<relatedTitles.length-1){r++}else{r=0}}document.write('</div></div>');
relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);
relatedTitles.splice(0,relatedTitles.length)}
function enableTooltips(a){
var b,i,h;if(!document.getElementById||!document.getElementsByTagName)return;
AddCss();h=document.createElement("span");h.id="btc";h.setAttribute("id","btc");h.style.position="absolute";
document.getElementsByTagName("body")[0].appendChild(h);
if(a==null)b=document.getElementsByTagName("a");
else b=document.getElementById(a).getElementsByTagName("a");
for(i=0;i<b.length;i++){Prepare(b[i])}}
function Prepare(a){
var c,t,s,b,l;t=a.getAttribute("title");
if(t==null||t.length==0)return;a.removeAttribute("title");
c=CreateEl("span","tooltip");
s=CreateEl("span","top");s.appendChild(document.createTextNode(t));
c.appendChild(s);b=CreateEl("b","bottom");
c.appendChild(b);setOpacity(c);a.tooltip=c;
  a.onmouseover=showTooltip;
  a.onmouseout=hideTooltip;
  a.onmousemove=Locate}function showTooltip(e){document.getElementById("btc").appendChild(this.tooltip);Locate(e)}
function hideTooltip(e){
  var d=document.getElementById("btc");
  if(d.childNodes.length>0)d.removeChild(d.firstChild)}
function setOpacity(a){a.style.filter="alpha(opacity:90)";
a.style.KHTMLOpacity="0.90";a.style.MozOpacity="0.90";
a.style.opacity="0.90"}
function CreateEl(t,c){
  var x=document.createElement(t);x.className=c;x.style.display="block";return(x)}
function AddCss(){var l=CreateEl("link");
l.setAttribute("type","text/css");
l.setAttribute("rel","stylesheet");
l.setAttribute("media","screen");
document.getElementsByTagName("head")[0].appendChild(l)}
function Locate(e){var a=0,posy=0;
if(e==null)e=window.event;
if(e.pageX||e.pageY){a=e.pageX;posy=e.pageY}
else if(e.clientX||e.clientY){if(document.documentElement.scrollTop){a=e.clientX+document.documentElement.scrollLeft;
posy=e.clientY+document.documentElement.scrollTop}
else{a=e.clientX+document.body.scrollLeft;posy=e.clientY+document.body.scrollTop}}
document.getElementById("btc").style.top=(posy+10)+"px";
document.getElementById("btc").style.left=(a-20)+"px"}
