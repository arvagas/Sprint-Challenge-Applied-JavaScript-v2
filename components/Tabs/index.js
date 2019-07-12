// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsBar = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log('API data for topics succesfully retrieved:', data)
        const extractTopics = data.data.topics
        extractTopics.forEach(topic => {
            topicsBar.appendChild(topicTabs(topic))
        })
    })
    .catch(error => {
        console.log('API for topics currently down:', error)
    })

function topicTabs(name) {
    // Create element
    const tab = document.createElement('div')

    // Set attribute
    tab.textContent = name
    tab.dataset.tab = name

    // Set classe
    tab.classList.add('tab')

    return tab
}