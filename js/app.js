var ViewModel = function(){
   this.currentCat = ko.observable(new Cat());

   this.incrementCounter = function(){
      this.currentCat().clickCount(this.currentCat().clickCount() + 1);
   };
}

var Cat = function(){
   this.clickCount = ko.observable(0);
   this.name = ko.observable('Tabby');
   this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
   this.catNewborn = ko.observable('Newborn');
   this.catInfant = ko.observable('Infant');
   this.catTeen = ko.observable('Teen');
   this.nickNames = ko.observableArray(['Tabs', 'T-diddy', 'T-No-Show']);

   this.catLevel = ko.computed(function(){
      if (this.clickCount() <= 10){
         return this.catNewborn();
      }
      else if (this.clickCount() <= 19 ) {
         return this.catInfant();
      }
      else if (this.clickCount() >= 20){
         return this.catTeen();
      }
   }, this)
}

ko.applyBindings(new ViewModel());
