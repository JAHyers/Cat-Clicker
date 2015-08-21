var ViewModel = function(){
   this.clickCount = ko.observable(0);
   this.name = ko.observable('Tabby');
   this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
   this.catNewborn = ko.observable('Newborn');
   this.catInfant = ko.observable('Infant');
   this.catTeen = ko.observable('Teen');
   this.nickNames = ko.observableArray(['Tabs', 'T-diddy', 'T-No-Show']);

   this.incrementCounter = function(){
      this.clickCount(this.clickCount() + 1);
   };

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
ko.applyBindings({
        nickName: [
            { catNickName: "Tabs" },
            { catNickName: "T-didy" },
            { catNickName: "T-No-Show" }
        ]
    });
