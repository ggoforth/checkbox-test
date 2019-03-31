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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fs = changes.featureSet.currentValue;
    const epics = Array(this.fs.epics.length).fill(false); // [false, false, false]

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
          const checked = Array(this.fs.epics.length).fill(!!fs);
          this.form.get('epics').patchValue(checked);
      });

    /**
     * Listen for changes on the children, and update the parent accordingly.
     */
    this.form.get('epics').valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(_epics => {
        const featureSet = !!_epics.some(epic => epic);
        this.form.patchValue({featureSet}, {onlySelf: true, emitEvent: false});
      });
  }

  get epics() {
    return this.form.get('epics');
  }


}
