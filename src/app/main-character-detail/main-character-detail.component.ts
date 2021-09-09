import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainCharacter } from '../main-character';
import { MainCharacterService } from '../main-character.service';

@Component({
  selector: 'app-main-character-detail',
  templateUrl: './main-character-detail.component.html',
  styleUrls: ['./main-character-detail.component.scss'],
})
export class MainCharacterDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private mainCharacterService: MainCharacterService,
    private location: Location
  ) {}
  @Input() mainCharacter?: MainCharacter;
  ngOnInit(): void {
    this.getMainCharacter();
  }
  getMainCharacter(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mainCharacterService
      .getMainCharacter(id)
      .subscribe((mainCharacter) => (this.mainCharacter = mainCharacter));
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.mainCharacter) {
      this.mainCharacterService
        .updateMainCharacter(this.mainCharacter)
        .subscribe(() => this.goBack());
    }
  }
}
