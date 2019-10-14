import { Component, LOCALE_ID, Inject , OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import en_json from '../assets/en.json';
import fil_json from '../assets/fil.json';
import { TranslateService } from  '@ngx-translate/core';

@Component({  
    selector: 'app-root',  
    templateUrl: './app.component.html',  
    styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {  
    title = 'i18nDemo'; 
    WelcomeMessage;
    Firstname;
    Lastname;
    languageList = [ 
        { code: 'en', label: 'English' },    
        { code: 'fil', label: 'Filipino'}
    ];  

    constructor(@Inject(LOCALE_ID) protected localeId: string ) { 
    }

    ngOnInit() {
        localStorage.setItem('locale',this.localeId);
    }

    onLocaleChange(locale: string) {
        // - set locale base selected option
        localStorage.setItem('locale', locale);
        switch (locale) {
            case 'en':
                const enObjStr = JSON.stringify(en_json);
                var result = JSON.parse(enObjStr);
                this.Lastname = result.Lastname;
                this.Firstname = result.Firstname;
                this.WelcomeMessage = result.WelcomeMessage;
                break;
            case 'fil':
                const myObjStr = JSON.stringify(fil_json);
                var result = JSON.parse(myObjStr);
                this.Lastname = result.Lastname;
                this.Firstname = result.Firstname;
                this.WelcomeMessage = result.WelcomeMessage;
                break;
            default:
        }
    }
}