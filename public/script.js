        // Function to update the date and time
        function updateDateTime() {
            const currentDate = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
            const formattedDate = currentDate.toLocaleDateString('en-US', options);
            document.getElementById('todays-date').innerText = formattedDate;
        }

        // Initial call to update the date
        updateDateTime();

        // Update the date and time every 1 second (1000 milliseconds)
        setInterval(updateDateTime, 1000);

        // JavaScript code to clear the placeholder text on click
        const taskInput = document.getElementById('taskInput');

        taskInput.addEventListener('focus', function() {
            this.placeholder = '';
        });

        taskInput.addEventListener('blur', function() {
            this.placeholder = 'add a task';
        });