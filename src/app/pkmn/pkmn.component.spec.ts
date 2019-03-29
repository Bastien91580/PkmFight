import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pokemon } from '../pokemon.model';
import { PkmnComponent } from './pkmn.component';

describe('PkmnComponent', () => {
  let component: PkmnComponent;
  let fixture: ComponentFixture<PkmnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkmnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkmnComponent);
    component = fixture.componentInstance;
    component.pokemon = new Pokemon("Carapuce", 43, 44, 48, 65);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should name the pkmn Carapuce', () => {
    expect(fixture.debugElement.nativeElement.querySelector('.card-header').textContent).toContain('Carapuce');
  });

  it('should get the hp for the pkmn Carapuce', () => {
    expect(fixture.debugElement.nativeElement.querySelector('.card-text').textContent).toContain('44');
  });
});
