import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Cersei Lannistere',
      imageUrl: 'assets/Cersei_Lannister.jpeg',
      username: 'When You Play The Game Of Thrones, You Win Or You Die . There is no middle ground."',
      content: 'Cersei Lannister est un personnage principal dans la première, deuxième,troisième, quatrième, cinquième, sixième, septième et huitième saison de Game of Thrones.'
    },
    {
      title: 'Tywin Lannister',
      imageUrl: 'assets/tywin.jpeg',
      username: 'Any Man Who Must Say I Am The King Is No True King',
      content: 'Tywin Lannister est un personnage récurrent de la première, deuxième, troisième et quatrième saison de Game of Thrones. Il est interprété par Charles Dance et fait ses débuts dans "Gagner ou mourir".'
    },
    {
      title: 'Tyrion Lannister',
      imageUrl: 'assets/tyrion.jpeg',
      username: 'A mind needs books like a sword needs a whetstone',
      content: 'Tyrion Lannister est un personnage principal dans les première, deuxième, troisième, quatrième, cinquième, sixième, septième et huitième saisons de Game of Thrones.'
    }
  ];
}
