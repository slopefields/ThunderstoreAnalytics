let startDate, endDate;

const formStartDate = document.getElementById('form-start-date');
const formEndDate = document.getElementById('form-end-date');
const dropdownSelection = document.getElementById('date-range-dropdown');
const formButton = document.getElementById('confirm-form-button');

dropdownSelection.addEventListener('change', function()
{
    
});

formButton.addEventListener('click', function(){
    if (!formStartDate.value || !formEndDate.value)
        alert('Enter both a start and end date!');
    else
    {
        startDate = formStartDate.value;
        endDate = formEndDate.value;

        fetchData();
    }
});

// Fetch data from backend API after startDate and endDate have values
function fetchData()
{
    fetch(`https://thunderstoreanalytics.onrender.com/data?start_date=${startDate}&end_date=${endDate}`)
    .then(response =>
    {
        // Handle HTTP errors
        if(!response.ok)
            throw new Error(`Error with response: ${response.status}`);
        return response.json();
    })
    .then(data =>
    {
        const totalDownloadElement = document.getElementById('downloads-total');
        const rangedDownloadElement = document.getElementById('downloads-ranged');
    })
    // Handle network errors
    .catch(error => 
    {
        console.error('Error fetching data:', error);
        document.getElementById('downloads').textContent = 'Error fetching download data.'
    });
}