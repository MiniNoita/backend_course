import { Component, OnDestroy, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html'
})
export class NavbarComponent implements OnDestroy {
  private authService = inject(AuthService);
  login: boolean;
  subscription: Subscription;

  constructor() {
    // Tilataan viesti ja tallennetaan tulos this.login -muuttujaan
    this.subscription = this.authService.loginTrue().subscribe(message => { this.login = message; });
    /* varmistetaan että login -tila säilyy myös kun sivu reffataan
       varmistus tehdään katsomalla onko token sessionstoragessa.
       Yllä oleva observablen tilaus silti tarvitaan, sillä sessionstoragen
       tarkistus vaatii aina reffauksen koska sitä ei voi kutsua asynkronisesti. */
    const atoken = sessionStorage.getItem('accesstoken');
    if (atoken) {
      this.login = true;
    } else {
      this.login = false;
    }
  }

  ngOnDestroy() {
    // lopetetaan tilaus kun komponentti tuhotaan
    this.subscription.unsubscribe();
  }

  doLogout() {
    this.login = false;
  }

}
