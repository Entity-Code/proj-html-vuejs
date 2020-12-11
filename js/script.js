var app = new Vue({
   el: "#app",
   data: {
      rightArrow: "fas fa-chevron-right",
      bottomArrow: "fas fa-chevron-down",
      // HEADER
      header:{
         //logo (left)
         logo: "img/logo-dark.png",
         // sections (center)
         sections:[
            {
               dropdown: false,
               name: "HOME",
            },
            {
               dropdown: true,
               name: "LANDING",
               subSections: [
                  "SUPPORT",
                  "FAQ",
                  "TEAM"
               ]
            },
            {
               dropdown: true,
               name: "PAGES",
               subSections: [
                  "NEWS",
                  "APP",
                  "ABOUT",
                  "LOG-IN"
               ]
            },
            {
               dropdown: true,
               name: "DOCS",
               subSections: [
                  "DEMO",
                  "STARTUP",
                  "CEO",
                  "POLICY"
               ]
            },
         ],
         // search/contacts (right)
         contacts:[
            "fas fa-search",
            "fab fa-github",
            "fab fa-stack-overflow",
            "far fa-user"
         ]
      },

      // FOOTER
      footer:{
         // top

         //Landrick 1
         title1: "img/logo-light.png", //logo
         p1: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
         socials:[
            "fab fa-facebook-f",
            "fab fa-instagram",
            "fab fa-twitter",
            "fab fa-linkedin-in"
         ],

         // Company 2
         title2: "Company",
         links2: [
            "About us",
            "Services",
            "Team",
            "Pricing",
            "Project",
            "Careers",
            "Blog",
            "Login"
         ],
         // Usefull Links
         title3: "Usefull Links",
         links3: [
            "Terms of Services",
            "Privacy Policy",
            "Documentation",
            "Changelog",
            "Components",
         ],
         // Newsletter 4
         title4: "Newsletter",
         p4: "Sign up and receive the latest tips via email.",
         hdue4: ["Write your email", "*"],
         emailDue4: ["far fa-envelope", "Your email:"],

         // bottom
         // left
         credits: "© 2020 Landrick. Design with ❤️ by Shreethemes.",
         //right
         cards: [
            "img/american-ex.png",
            "img/discover.png",
            "img/master-card.png",
            "img/paypal.png",
            "img/visa.png"
         ]
      }



   }
   // mounted: function() {
   //
   // }

   // methods: {
   //
   // }

});
