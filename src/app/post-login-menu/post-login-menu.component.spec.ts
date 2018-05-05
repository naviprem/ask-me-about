import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginMenuComponent } from './post-login-menu.component';

describe('PostLoginMenuComponent', () => {
  let component: PostLoginMenuComponent;
  let fixture: ComponentFixture<PostLoginMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLoginMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLoginMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
