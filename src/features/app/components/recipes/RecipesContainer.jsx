import { connect } from 'react-redux';
import { Recipes } from './Recipes';

const mapStateToProps = state => ({
  recipes: state.data.recipes,
});

export const RecipesContainer = connect(mapStateToProps)(Recipes);
