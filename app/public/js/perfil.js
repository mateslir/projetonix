const usernameElement = document.getElementById('username');
const descriptionElement = document.getElementById('description');
const editButton = document.getElementById('edit-button');

editButton.addEventListener('click', () => {
    const newDescription = prompt('Digite uma nova descrição:');
    if (newDescription !== null) {
        descriptionElement.textContent = newDescription;
    }
});

const uploadButton = document.getElementById('upload-button');
const profileImageUpload = document.getElementById('profile-image-upload');
const profileImageElement = document.getElementById('profile-image');

// Adiciona um ouvinte de eventos ao botão de upload
uploadButton.addEventListener('click', () => {
    profileImageUpload.click(); // Abre a caixa de diálogo para selecionar uma imagem
});

// Ouvinte de eventos para quando uma nova imagem é selecionada
profileImageUpload.addEventListener('change', () => {
    const file = profileImageUpload.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImageElement.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
    function editField(fieldName) {

        const field = document.getElementById(fieldName);
      
       
      
        if (field) {
      
            const newValue = prompt(`Editar ${fieldName}:`, field.value);
      
       
      
            if (newValue !== null) {
      
                field.value = newValue;
      
            }
      
        }
      
      }
});

