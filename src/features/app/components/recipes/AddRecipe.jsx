import React from 'react';
import _ from 'lodash';
import store from '../../../../store';
import * as actions from '../../../data/actions';
import * as api from '../../../data/api';
import { IngredientInput } from './IngredientInput';
import { StepInput } from './StepInput';

export class AddRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      recipeName: '',
      cookTime: '',
      prepTime: '',
      ingredientCount: 1,
      stepCount: 1,
    };
  }

  /* Detect when a change has been made, and send that info to the store */
  onChangeInput = (event) => {
    store.dispatch(actions.updateFormValues(event.target.id, event.target.value));
  }

  onChangeIngredient = (event) => {
    const data = {
      id: event.target.id.split('-')[0],
      value: event.target.value,
      inputType: event.target.id.split('-')[1],
      updateType: event.target.className.split(' ')[1].split('-')[1],
    };
    store.dispatch(actions.updateIngredient(data));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    api.submitRecipeForm();
  }

  /* Detect when the tab button has been pressed on the last field 'quantity' */
  detectTabPress = (e) => {
    /* Get the ID of the ingredient we are working with */
    const id = parseInt(e.target.id.split('-')[0], 10);

    /* Check to see if tab was pressed as well as making sure the shift key
    * was not being held down to go back.  We are also checking to make sure the
    * id is the same as the ingredient count.  This checks to make sure we are
    * on the last entry of ingredients to prevent from adding unnecessary boxes */

    if (e.target.className.includes('ingredient') && e.key === 'Tab' && !e.shiftKey && id === this.state.ingredientCount) {
      this.setState({
        ingredientCount: this.state.ingredientCount += 1,
      });
    } else if (e.target.className.includes('step') && e.key === 'Tab' && !e.shiftKey && id === this.state.stepCount) {
      this.setState({
        stepCount: this.state.stepCount += 1,
      });
    }
  }

  /* Trigger add ingredient to add another Ingredient box */
  addIngredient = (e) => {
    e.preventDefault();
    this.setState({
      ingredientCount: this.state.ingredientCount += 1,
    });
  }
  addStep = (e) => {
    e.preventDefault();
    this.setState({
      stepCount: this.state.stepCount += 1,
    });
  }
  render() {
    /* Render the number of inputs equal to the state value of ingredientCount
    * as well as the state of stepCount */
    const renderIngredientInputs = n => (_.range(n).map(index => (
      <IngredientInput
        key={index + 1}
        handleChange={this.onChangeIngredient}
        handleKeyPress={this.detectTabPress}
        ingredient={index + 1}
      />
    )));
    const renderStepInputs = n => (_.range(n).map(index => (
      <StepInput
        key={index + 1}
        handleChange={this.onChangeIngredient}
        handleKeyPress={this.detectTabPress}
        step={index + 1}
      />
    )));

    /* Render the form */
    return (
      <form id="recipe-form" className="custom-form">
        <input className="form-control" id="recipeName" type="text" onChange={this.onChangeInput} placeholder="Recipe Name" />
        <input className="form-control" id="prepTime" type="text" onChange={this.onChangeInput} placeholder="Prep Time" />
        <input className="form-control" id="cookTime" type="text" onChange={this.onChangeInput} placeholder="Cook Time" />
        <div className="add-ingredients">
          <div className="form-ingredients">
            <button className="btn btn-primary" onClick={this.addIngredient}>Add Ingredient</button>
            <div id="form-ingredients" />
            {renderIngredientInputs(this.state.ingredientCount)}
          </div>
          <div className="form-steps">
            <button className="btn btn-primary" onClick={this.addStep}>Add Steps</button>
            <div id="form-steps" />
            {renderStepInputs(this.state.stepCount)}
          </div>
        </div>
        <button type="button" className="button" onClick={e => this.handleSubmit(e)}>Submit</button>
      </form>
    );
  }
}
