        // updates date and time
        function updateDateTime() {
            const currentDate = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
            const formattedDate = currentDate.toLocaleDateString('en-US', options);
            document.getElementById('todays-date').innerText = formattedDate;
        }

        // updates every second
        updateDateTime();
        setInterval(updateDateTime, 1000);

        // when clicked, remove placeholder text
        const taskInput = document.getElementById('taskInput');

        taskInput.addEventListener('focus', function() {
            this.placeholder = '';
        });

        taskInput.addEventListener('blur', function() {
            this.placeholder = 'add a task';
        });
        
// Get all list items
const listItems = document.querySelectorAll('.list-item');

// Add click event listeners to each list item
listItems.forEach(listItem => {
    listItem.addEventListener('click', () => {
        // Toggle the "crossed" class on the clicked list item
        listItem.classList.toggle('crossed');
    });
});