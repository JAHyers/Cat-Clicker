var ViewModel = function(){
   this.currentCat = ko.observable(new Cat({
      clickCount : 0,
      name : "Tabby",
      imgSrc:"img/434164568_fea0ad4013_z.jpg",
      nickNames:['Tabs', 'T-Diddy', 'T-No-Show']
   }));

   this.incrementCounter = function(){
      this.clickCount(this.clickCount() + 1);
   };
}

var Cat = function(data){
   this.clickCount = ko.observable(data.clickCount);
   this.name = ko.observable(data.name);
   this.imgSrc = ko.observable(data.imgSrc);
   this.nickNames = ko.observableArray(data.nickNames);

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
