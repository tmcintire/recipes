export const INITIALIZED = 'INITIALIZED';
export const UPDATED_FORM_VALUES = 'UPDATED_FORM_VALUES';
export const UPDATED_INGREDIENT = 'UPDATED_INGREDIENT';
export const RECEIVED_RECIPES = 'RECEIVED_RECIPES';

export const initialized = () => ({
  type: INITIALIZED,
});

export const receivedRecipes = recipes => ({
  type: RECEIVED_RECIPES,
  recipes,
});

export const updateFormValues = (id, value) => ({
  type: UPDATED_FORM_VALUES,
  id,
  value,
});

export const updateIngredient = data => ({
  type: UPDATED_INGREDIENT,
  id: data.id,
  value: data.value,
  inputType: data.inputType,
  updateType: data.updateType,
});
