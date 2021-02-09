import { elements, renderLoader,clearLoader,elementStrings } from './views/base';
import * as searchView from './views/searchView';
import Search from './models/Search';

/** Global state of the app
 * -Search object
 * -Current recipe object
 * -Shopping list object
 * -Liked recipes
 * 
 */
const state = {};

const ctrlSearch = async () =>{
    
    // 1 get query from view
    const query = searchView.getInput(); //TODO
    console.log(query); 
    if(query){
        // 2 new searchobject and add to state
        state.search = new Search(query);

        // 3 prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        
        // 4 Search for recipes
        await state.search.getResults();

        // 5 render results on UI
        clearLoader();
        searchView.renderResults(state.search.recipes);
    }
    
     
}

elements.searchForm.addEventListener('submit',e =>{
    e.preventDefault();
    ctrlSearch();
});

elements.searchResPages.addEventListener('click', e=>{
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goTOPage = parseInt(btn.dataset.goto,10);
        searchView.clearResults();
        searchView.renderResults(state.search.recipes,goTOPage);
        console.log(goTOPage);

    }
    //console.log(btn);
});