# QuickDict 

QuickDict is an online english dictionary powered by Meriam-Webster's Collegiate dictionary API.

# Key Features 
* `Word search` - with access to over 225,000 clear and precise definitions. 
* Pronunciations:
  * Audio
  * Phonetic
* Mobile friendly & responsive user interface
* Data caching architecture
* Search History (TBA)

## Data Caching Architecture
I decided to implement a simple data caching architecture for the project due to the limits set on the free  version of the Merriam Webster's API and for the sake of optimization.

<img width="400" height="400" alt="Screenshot 2024-01-22 at 20 22 21" src="https://github.com/priscilla-e/quickdict/assets/56302477/265feb63-2e41-4d8b-9ae3-174db778e935">

With this in place,  new word searches are stored on the client side (IndexedDB) and a cache database (Firebase), allowing subsequent searches to be retrieved from these stores without hitting API. 

# Technologies
* React + Vite + TypeScript
* Firebase
* IndexedDB (idb Library)
* TailwindCSS

# Future Development
* `Search History`: Allowing user's to see their search history would be a nice feature to have.  This feature has actually been  implemented with the help of the IndexedDB client side Data Cache. I just need to display the search history on the UI. 

# Preview

*Live Demo:* https://quick-dict.vercel.app/

https://github.com/priscilla-e/quickdict/assets/56302477/40398248-9ac3-48b0-928a-ccc556cb3dd0
