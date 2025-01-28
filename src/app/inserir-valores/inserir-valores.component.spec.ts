import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirValoresComponent } from './inserir-valores.component';

describe('InserirValoresComponent', () => {
  let component: InserirValoresComponent;
  let fixture: ComponentFixture<InserirValoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserirValoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
