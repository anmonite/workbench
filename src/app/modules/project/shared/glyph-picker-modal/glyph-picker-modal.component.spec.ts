// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NgxSmartModalService } from 'ngx-smart-modal';
import { TestBed } from '@angular/core/testing';
import { GlyphPickerModalComponent } from './glyph-picker-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

class MockTranslateService {
  get(key: any): any {
    of(key);
  }
}

describe('GlyphPickerModalComponent', () => {
  let component: GlyphPickerModalComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GlyphPickerModalComponent,
        NgxSmartModalService,
        { provide: TranslateService, useClass: MockTranslateService },
      ],
    });
    component = TestBed.get(GlyphPickerModalComponent);
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });
});
