import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ChallengeService} from "../challenge.service";
import {Subscription} from "rxjs";
import {Challenge} from "../challenge";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-challenge-edit',
  templateUrl: './challenge-edit.component.html'
})
export class ChallengeEditComponent implements OnInit, OnDestroy {
  challengeForm: FormGroup;
  private challengeIndex: number;
  private challenge: Challenge;
  private isNew = true;
  private subscription: Subscription;
  constructor(private route: ActivatedRoute,
              private challengeService: ChallengeService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          if (params.hasOwnProperty('id')) {
            this.isNew = false;
            this.challengeIndex = +params['id'];
            this.challenge = this.challengeService.getChallenge(this.challengeIndex);
          } else {
            this.isNew = true;
            this.challenge = null;
          }
          this.initForm();
        }
    )
  }

  onSubmit() {
    const newChallenge = this.challengeForm.value;
    if (this.isNew) {
      this.challengeService.addChallenge(newChallenge);
    } else {
      this.challengeService.editChallenge(this.challenge, newChallenge);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }
  onAddItem(name: string, amount: string) {
    (<FormArray>this.challengeForm.controls['ingredients']).push(
        new FormGroup({
          name: new FormControl(name, Validators.required),
          amount: new FormControl(amount, [
            Validators.required,
            Validators.pattern("\\d+")
          ])
        })
    );
  }

  onRemoveItem(index: number) {
    (<FormArray>this.challengeForm.controls['ingredients']).removeAt(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }
  //initialize new challenge Form
  private initForm() {
    let challengeName = '';
    let challengeImage = '';
    let challengeContent = '';
    let challengeIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
      if (this.challenge.hasOwnProperty('ingredients')) {
        for (let i = 0; i < this.challenge.ingredients.length; i++) {
          challengeIngredients.push(
              new FormGroup({
                name: new FormControl(this.challenge.ingredients[i].name, Validators.required),
                amount: new FormControl(this.challenge.ingredients[i].amount, [
                  Validators.required,
                  Validators.pattern("\\d+")
                ])
              })
          );
        }
      }

      challengeName = this.challenge.name;
      challengeImage = this.challenge.imagePath;
      challengeContent = this.challenge.description;
    }
    this.challengeForm = this.formBuilder.group({
      name: [challengeName, Validators.required],
      imagePath: [challengeImage, Validators.required],
      description: [challengeContent, Validators.required],
      ingredients: challengeIngredients
    });
  }

}
