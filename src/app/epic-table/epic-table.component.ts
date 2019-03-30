import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-epic-table',
  templateUrl: './epic-table.component.html',
  styleUrls: ['./epic-table.component.scss']
})
export class EpicTableComponent implements OnInit, OnChanges {
  @Input() featureSet: any;
  form: FormGroup;
  fs: any;
  shouldUpdateChildren: boolean = true;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fs = changes.featureSet.currentValue;
    const epics = Array(this.fs.epics.length).fill(false);

    /**
     * Create the form group.
     */
    this.form = this.fb.group({
      featureSet: [false],
      epics: this.fb.array(epics)
    });

    /**
     * Listen for changes on the featureSet (heading) level, and update the children accordingly.
     */
    this.form.get('featureSet').valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(fs => {
        if (this.shouldUpdateChildren) {
          const checked = Array(this.fs.epics.length).fill(!!fs);
          this.form.get('epics').patchValue(checked);
        }
        this.shouldUpdateChildren = true;
      });

    /**
     * Listen for changes on the children, and update the parent accordingly.
     */
    this.form.get('epics').valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(_epics => {
        const featureSet = !!_epics.some(epic => epic);
        this.shouldUpdateChildren = false;
        this.form.patchValue({featureSet});
      });
  }

  get epics() {
    return this.form.get('epics');
  }


}
