 //<![CDATA[

        var bloggerSection = document.getElementById("blogger-section");
        var facebookSection = document.getElementById("facebook-section");
        var disqusSection = document.getElementById("disqus-section");

        var bloggerTab = document.getElementById("blogger-tab");
        var facebookTab = document.getElementById("facebook-tab");
        var disqusTab = document.getElementById("disqus-tab");

        var bloggerActive = true;
        var facebookActive = false;
        var disqusActive = false;

        bloggerTab.addEventListener("click", function () {
          if(!bloggerActive) {
            bloggerTab.classList.add("active-comment-tab");
            bloggerSection.classList.add("active-comment-section");
            facebookSection.classList.remove("active-comment-section");
            disqusSection.classList.remove("active-comment-section");
            facebookTab.classList.remove("active-comment-tab");
            disqusTab.classList.remove("active-comment-tab");
            bloggerActive = true;
            facebookActive = false;
            disqusActive = false;

          } 
        });


        facebookTab.addEventListener("click", function () {
          if(!facebookActive) {
            facebookTab.classList.add("active-comment-tab");
            facebookSection.classList.add("active-comment-section");
            bloggerSection.classList.remove("active-comment-section");
            disqusSection.classList.remove("active-comment-section");
            bloggerTab.classList.remove("active-comment-tab");
            disqusTab.classList.remove("active-comment-tab");
            facebookActive = true;
            bloggerActive = false;
            disqusActive = false;

          } 
        });


        disqusTab.addEventListener("click", function () {
          if(!disqusActive) {
            disqusTab.classList.add("active-comment-tab");
            disqusSection.classList.add("active-comment-section");
            facebookSection.classList.remove("active-comment-section");
            bloggerSection.classList.remove("active-comment-section");
            facebookTab.classList.remove("active-comment-tab");
            bloggerTab.classList.remove("active-comment-tab");
            disqusActive = true;
            facebookActive = false;
            bloggerActive = false;

          } 
        });

        //]]>
