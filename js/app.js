var initialCats = [
   {
      clickCount: 0,
      name: "Tabby",
      imgSrc: "img/434164568_fea0ad4013_z.jpg",
      nickNames: 'TNoShow'
   },
   {
      clickCount: 0,
      name: "Tiger",
      imgSrc: "img/4154543904_6e2428c421_z.jpg",
      nickNames: "Tigger"
   },
   {
      clickCount: 0,
      name: "Scaredy",
      imgSrc: "img/22252709_010df3379e_z.jpg",
      nickNames: ""
   },
   {
      clickCount: 0,
      name: "Shadow",
      imgSrc: "img/1413379559_412a540d29_z.jpg",
      nickNames: "Casper"
   },
   {
      clickCount: 0,
      name: "Sleepy",
      imgSrc: "img/9648464288_2516b35537_z.jpg",
      nickNames: "Zzzzz"
   }
]

var ViewModel = function(){
   var self = this;

   this.catList = ko.observableArray([]);

   initialCats.forEach(function(catItem){
      self.catList.push( new Cat(catItem));
   });

   this.currentCat = ko.observable(this.catList()[0]);

   this.incrementCounter = function(){
      self.currentCat().clickCount(self.currentCat().clickCount() + 1);
   };

   this.setCat = function(clickedCat){
      self.currentCat(clickedCat);
   };
};

var Cat = function(data){
   this.clickCount = ko.observable(data.clickCount);
   this.name = ko.observable(data.name);
   this.imgSrc = ko.observable(data.imgSrc);
   this.nickNames = ko.observable(data.nickNames);

   this.catLevel = ko.computed(function(){
      var title;
      var clicks= this.clickCount();
      if (clicks < 10){
         title = "Newborn";
      }
      else if (clicks < 20 ) {
         title = "Infant";
      }
      else if (clicks < 30){
         title = "Teen";
      }
      else if (clicks < 50){
         title = "Young Adult";
      }
      else if (clicks < 100){
         title = "Adult";
      }
      else if (clicks < 200){
         title = "Giezer";
      }
      else{
         title = "Ninja";
      }
      return title;
   }, this)
}

ko.applyBindings(new ViewModel());
