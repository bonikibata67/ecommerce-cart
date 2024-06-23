document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('#product-list ul');
    const addForm = document.querySelector('form[action="submit"]');   
    
  
    // Delete items
    list.addEventListener('click', (e) => {
      if(e.target.id === 'btn'){
        const li = e.target.closest('li');
        li.parentNode.removeChild(li);
      }
    });
  
    // Add items
    addForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = addForm.querySelector('h3').textContent;
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="product">
          <div class="description">
            <h3>${name}</h3>
            <p1>Size: M</p1><br />
            <p2>Color: Grey</p2>
          </div>
          <div class="numberItems">3</div>
          <div class="price">kshs 450</div>
          <div class="button">
            <button id="btn">delete</button>
          </div>
        </div>
      `;
      list.appendChild(li);
    });
  
   
  
  
  
   
  });
  document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('#product-list ul');
    const addForm = document.querySelector('#add-product-form');   
    

    list.addEventListener('click', (e) => {
        if(e.target.classList.contains('btn-delete')){
            const li = e.target.closest('li');
            li.parentNode.removeChild(li);
        }
    });
  

    addForm.addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('product-name').value;
        const size = document.getElementById('product-size').value;
        const color = document.getElementById('product-color').value;
        const price = document.getElementById('product-price').value;
        
        if(name && size && color && price){
            const li = document.createElement('li')
            li.classList.add('added-product')
            li.innerHTML = `
                <div class="product">
                    <div class="image">
                        <!-- Add your image source here -->
                    </div>
                    <div class="description">
                        <h3>${name}</h3>
                        <p1>Size: ${size}</p1><br />
                        <p2>Color: ${color}</p2>
                    </div>
                    <div class="numberItems">3</div>
                    <div class="price">${price}</div>
                    <div class="button">
                        <button class="btn-delete">delete</button>
                    </div>
                </div>
            `;
            list.appendChild(li);
        } else {
            alert("Please fill in all fields.");
        }
    });
});
  