import React from 'react';
import { RecipeItem } from './RecipeItem';

export class Recipes extends React.Component {
  render() {
    const renderRecipes = () => {
      const { recipes } = this.props;
      return Object.keys(recipes).map((recipe) => {
        const eachRecipe = recipes[recipe];
        return (
          <RecipeItem
            key={recipe}
            recipeKey={recipe}
            {...eachRecipe}
          />
        );
      });
    };
    return (
      <div>
        <h1>Recipes Component</h1>
        {renderRecipes()}
      </div>
    );
  }
}

Recipes.propTypes = {
  recipes: React.PropTypes.object, //eslint-disable-line
};
