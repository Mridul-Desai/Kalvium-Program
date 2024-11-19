

// Mock fetch API
const mockFetch = (url) => {
  if (url.includes('random.php')) {
    return Promise.resolve({
      json: () => Promise.resolve({
        meals: [
          { idMeal: '52772', strMeal: 'Spicy Arrabiata Penne', strMealThumb: 'https://www.themealdb.com/images/media/meals/1529444830.jpg' }
        ]
      })
    });
  } else if (url.includes('filter.php')) {
    return Promise.resolve({
      json: () => Promise.resolve({
        meals: [
          { idMeal: '52772', strMeal: 'Chicken Curry', strMealThumb: 'https://www.themealdb.com/images/media/meals/1529444830.jpg' }
        ]
      })
    });
  } else if (url.includes('lookup.php')) {
    return Promise.resolve({
      json: () => Promise.resolve({
        meals: [
          {
            idMeal: '52772',
            strMeal: 'Spicy Arrabiata Penne',
            strIngredient1: 'Penne Rigate',
            strMeasure1: '1 pound',
            strIngredient2: 'Olive Oil',
            strMeasure2: '1/4 cup',
            // ... other ingredients
          }
        ]
      })
    });
  }
  return Promise.reject(new Error('Unknown URL'));
};

// Import the script or include it here
// (assuming the functions are available in the global scope)

describe('Meal Application', () => {
  beforeAll(() => {
    spyOn(window, 'fetch').and.callFake(mockFetch);

    // Initialize the DOMContentLoaded event
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);
  });

 

  it('should open a modal with ingredients when a meal is clicked', async (done) => {
    const mealContainer = document.getElementById('meal');
    mealContainer.innerHTML = `
      <div class="meal-item">
        <img src="https://www.themealdb.com/images/media/meals/1529444830.jpg" alt="Spicy Arrabiata Penne">
        <h3>Spicy Arrabiata Penne</h3>
      </div>
    `;
    const mealDiv = mealContainer.querySelector('.meal-item');
    mealDiv.addEventListener('click', () => {
      window.fetchMealDetails('52772');
    });

    mealDiv.click();

    setTimeout(() => {
      const modal = document.getElementById('meal-modal');
      expect(modal.classList.contains('hidden')).toBe(false);
      const ingredientsList = document.getElementById('ingredients');
      expect(ingredientsList.children.length).toBeGreaterThan(0);
      expect(ingredientsList.children[0].textContent).toContain('Penne Rigate');
      done();
    }, 1000);
  });

  it('should close the modal when the close button is clicked', () => {
    const modal = document.getElementById('meal-modal');
    modal.classList.remove('hidden');
    const closeModal = document.querySelector('.close');
    closeModal.click();
    expect(modal.classList.contains('hidden')).toBe(true);
  });


  it('should clear search input, empty meals container, and hide meal list section', () => {
    const searchInput = document.getElementById('search');
    const mealsContainer = document.getElementById('meals');
    const mealListSection = document.getElementById('meal-list');
  

    searchInput.value = 'Chicken';
    mealsContainer.innerHTML = `
      <div class="meal-item">
        <img src="https://www.themealdb.com/images/media/meals/1529444830.jpg" alt="Test Meal">
        <h3>Test Meal</h3>
      </div>
    `;
    mealListSection.classList.remove('hidden');
  
    clearSearchAndHideMeals();
    expect(searchInput.value).toBe('');
    expect(mealsContainer.innerHTML).toBe(''); 
    expect(mealListSection.classList.contains('hidden')).toBe(true);
  });
  


});
