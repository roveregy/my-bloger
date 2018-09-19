//<![CDATA[
var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;try
{thumburl[relatedTitlesNum]=entry.media$thumbnail.url;}
catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[relatedTitlesNum]=d;}else thumburl[relatedTitlesNum]='http://3.bp.blogspot.com/-qnLm52EsvBE/VDkrZ46TWXI/AAAAAAAAAsM/tiJ36WiboU4/s1600/90.jpg';}
if(relatedTitles[relatedTitlesNum].length>35)relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"...";for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++;}}}}
function removeRelatedDuplicates_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i]))
{tmp.length+=1;tmp[tmp.length- 1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length- 1]=relatedTitles[i];tmp3[tmp3.length- 1]=thumburl[i];}}
relatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3;}
function contains_thumbs(a,e){for(var j=0;j<a.length;j++)if(a[j]==e)return true;return false;}
function printRelatedLabels_thumbs(){for(var i=0;i<relatedUrls.length;i++)
{if((relatedUrls[i]==currentposturl)||(!(relatedTitles[i])))
{relatedUrls.splice(i,1);relatedTitles.splice(i,1);thumburl.splice(i,1);i--;}}
var r=Math.floor((relatedTitles.length- 1)*Math.random());var i=0;if(relatedTitles.length>0)document.write('<h2>'+relatedpoststitle+'</h2>');document.write('<div style="clear: both;"/>');while(i<relatedTitles.length&&i<20&&i<maxresults){function bp_thumbnail_resize(image_url,post_title)
{var image_size=150;var show_default_thumbnail=true;var default_thumbnail="http://2.bp.blogspot.com/-erTXCq61ULM/TmHYAQBZ0GI/AAAAAAAACCs/6cBX54Dn6Gs/s72-c/default.png";if(show_default_thumbnail==true&&image_url=="")image_url=default_thumbnail;image_tag='<img src="'+image_url.replace('/s72-c/','')+'" class="postthumb" alt="'+post_title+'"/>';if(image_url!="")return image_tag;else return"";}
document.write('<a style="text-decoration:none;padding:5px;float:left;');if(i!=0)document.write('border-left:solid 0.5px #d4eaf2;"');else document.write('"');document.write(' href="'+ relatedUrls[r]+'"><img style="font:12px Droid Arabic Kufi;width:187px;height:120px;border:0px;" src="'+thumburl[r].replace('/s72-c/','/s600-c/')+'"/><br/><div style="width: 187px;padding-left: 3px;border: 0pt none;margin: 3px 0pt 0pt;line-height: normal;">'+relatedTitles[r]+'</div></a>');if(r<relatedTitles.length- 1){r++;}else{r=0;}
i++;}
document.write('</div>');relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length);}
//]]>
